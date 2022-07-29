<!--
 * @FilePath: \code\src\views\detail.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-29 09:31:32
 * @Description:
-->

<template>
  <div class="detail">
    <Nav />
    <LeftNav />
    <div class="content"
         :class="{'full-content':!isShowLeft}">
      <div class="md-detail markdown-body">
        <router-view></router-view>
      </div>
    </div>
    <div class="vernier"></div>
    <div class="to-top"
         @click="toTop">去顶部</div>
  </div>
</template>

<script>
import { mdFunction } from '@/units/markdown'
import Nav from './components/nav'
import { mapState, mapMutations } from 'vuex'
import LeftNav from './components/leftnav.vue'
export default {
  components: {
    Nav,
    LeftNav
  },
  data () {
    return {
    }
  },
  watch: {
    $route: {
      handler (val) {
        this.$nextTick(() => {
          this.toTop()
          if (decodeURIComponent(window.location.href).includes('组件库')) {
            mdFunction('.lf-code-box', '.message-title', 'code-box-active')
          } else {
            mdFunction('h2', 'h2', 'hactive')
          }
        })
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(['isShowLeft'])
  },
  created () {
    if (this.$route?.meta?.list) {
      this.setLeftList({ title: this.$route.name.split('-')[1], list: this.$route.meta.list.map((element) => { return { name: element.name, path: element.path } }) })
    } else {
      this.setLeftList({ title: this.$route.matched[0].name.split('-')[1], list: this.$route.matched[0].meta.list.map((element) => { return { name: element.name, path: element.path } }) })
    }
  },
  methods: {
    ...mapMutations(['setLeftList']),
    toTop () {
      const content = document.querySelector('.content')
      if (content) {
        content.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>
