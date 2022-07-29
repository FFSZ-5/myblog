/*
 * @FilePath: \code\src\main.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-29 14:27:25
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/common.scss'
import 'github-markdown-css'
import './units/markdown'
import './units/rem'
import lfC from 'vue-lfcomponents'
import CodeBox from './components/CodeBox.vue'
import 'vue-lfcomponents/dist/lfComponents.css'
import hljs from 'highlight.js'
require('highlight.js/styles/color-brewer.css')
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    if (block.className.includes('html')) {
      block.innerHTML = block.innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
    console.log(block.innerHTML)
    hljs.highlightBlock(block)
  })
})
Vue.use(lfC)
Vue.component('CodeBox', CodeBox)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
