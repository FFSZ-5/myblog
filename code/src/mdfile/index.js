// /*
//  * @FilePath: \code\src\mdfile\index.js
//  * @Version: 2.0
//  * @LastEditors: lhl
//  * @LastEditTime: 2022-04-24 17:31:08
//  * @Description:
//  */
// import Vue from 'vue'
// function getfilename () {
//   var requireModule = require.context('./', true, /\.md$/)
//   var arr = []
//   for (var i = 0; i < requireModule.keys().length; i++) {
//     arr.push(
//       requireModule.keys()[i].substr(2, requireModule.keys()[i].length)
//     )
//   }
//   if (arr.length > 0) {
//     const components = {}
//     for (const key of arr) {
//       components[key.split('/').pop().split('.')[0]] = import('./' + key)
//     }
//     return components
//   }
// }

// const components = getfilename()
// for (const key in components) {
//   Vue.component(key, components[key])
// }
