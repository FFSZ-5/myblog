/*
 * @FilePath: \code\src\router\index.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-29 09:27:24
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { getFileName } from '@/units/tool.js'
Vue.use(VueRouter)
function getfilename () {
  const arr = getFileName('mdfile')
  if (arr.length > 0) {
    const components = {}
    for (const key of arr) {
      if (typeof (components[key.split('/')[0]]) === 'undefined') {
        components[key.split('/')[0]] = []
      }
      components[key.split('/')[0]].push({
        path: key.split('/').pop().split('-')[1].split('.')[0],
        name: key.split('/').pop().split('.')[0],
        component: () => import('../mdfile/' + key)
      })
    }
    // console.log(components)
    const route = [{
      path: '/',
      name: 'Home',
      meta: {
        title: '学我想学'
      },
      component: () => import('@/views/home.vue')
    }, {
      path: '/drag',
      name: 'drag',
      meta: {
        title: '拖拽测试'
      },
      component: () => import('@/views/candrag/index.vue')
    }, {
      path: '/lfcomponents',
      name: 'lfcomponents',
      component: () => import('@/views/vueC/index.vue')
    }]
    for (const key in components) {
      const newkey = key.split('-')[1]
      route.push({
        path: '/' + newkey,
        name: key,
        title: key,
        component: () => import('../views/detail.vue'),
        meta: {
          list: components[key]
        },
        children: components[key]
      })
    }
    return route
  }
}

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = getfilename()

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  if (to.path.includes('%')) {
    const newpath = decodeURIComponent(to.path)
    next(newpath)
  } else {
    if (to.meta?.title) {
      document.title = to.meta.title
    } else {
      console.log(to)
      document.title = to.path.split('/')[1] + ' | ' + to.name.split('-')[1]
      store.commit('setActiveLi', to.name.split('-')[1])
    }
    next()
  }
})
export default router
