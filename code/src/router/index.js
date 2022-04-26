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
      if (typeof (components[key.split('/')[0]]) === 'undefined') {
        components[key.split('/')[0]] = []
      }
      components[key.split('/')[0]].push({
        path: key.split('/').pop().split('.')[0],
        name: key.split('/').pop().split('.')[0],
        component: () => import('../mdfile/' + key)
      })
    }
    const route = [{
      path: '/',
      name: 'Home',
      component: () => import('@/views/home.vue')
    }]
    for (const key in components) {
      route.push({
        path: '/' + key,
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
  routes
})
router.beforeEach((to, from, next) => {
  document.title = '前端学习 | ' + to.name
  console.log(to)
  next()
})
export default router
