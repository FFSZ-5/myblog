/*
 * @FilePath: \code\vue.config.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 14:27:35
 * @Description:
 */
module.exports = {
  productionSourceMap: process.env.VUE_APP_TYPE !== 'normal',
  publicPath: './',
  chainWebpack: (config) => {
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
