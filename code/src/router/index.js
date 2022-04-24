/*
 * @FilePath: \code\src\router\index.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 17:52:00
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
function getfilename () {
  var requireModule = require.context('../mdfile', true, /\.md$/)
  var arr = []
  for (var i = 0; i < requireModule.keys().length; i++) {
    arr.push(
      requireModule.keys()[i].substr(2, requireModule.keys()[i].length)
    )
  }
  if (arr.length > 0) {
    const components = {}
    for (const key of arr) {
      components[key.split('/').pop().split('.')[0]] = import('./' + key)
    }
    console.log(components)
  }
}
getfilename()
const routes = [
  {
    path: '/:name',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../mdfile/test.md')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_URL,
  routes
})

export default router
