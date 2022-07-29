/*
 * @FilePath: \code\vue.config.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-29 11:25:12
 * @Description:
 */
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: true,
  publicPath: process.env.VUE_APP_TYPE !== 'normal' ? '/' : '/myblog',
  css: {
    extract: true,
    sourceMap: false
  },
  configureWebpack: (config) => {
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            test: /node_modules/,
            name: 'vendor',
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          }
        }
      }
    }
    config.plugins.push(
      new CompressionWebpackPlugin(
        {
          filename: info => {
            return `${info.path}.gz${info.query}`
          },
          algorithm: 'gzip',
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'
          ),
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        }
      )
    )
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    const imagesRule = config.module.rule('images')
    imagesRule.uses.clear()
    imagesRule.use('file-loader')
      .loader('url-loader')
      .options({
        limit: 10240,
        fallback: {
          loader: 'file-loader',
          options: {
            outputPath: 'static/images'
          }
        }
      })
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('src/components'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
    config.resolve.symlinks(true)
    config.module.rule('md').test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        wrapper: 'article',
        wrapperName: '123',
        raw: true,
        preventExtract: true,
        use: [
          [require('markdown-it-container'), 'tip'],
          [require('markdown-it-container'), 'warning'],
          [require('markdown-it-container'), 'danger'],
          [require('markdown-it-container'), 'details']
        ]
      })
  }
}
