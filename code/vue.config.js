/*
 * @FilePath: \code\vue.config.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 11:40:22
 * @Description:
 */
module.exports = {
  productionSourceMap: process.env.VUE_APP_TYPE !== 'normal',
  publicPath: './'
}
