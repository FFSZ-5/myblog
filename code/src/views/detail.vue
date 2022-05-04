
<template>
  <div class="detail">
    <Nav />
    <LeftNav />
    <div class="content">
      <div class="md-detail markdown-body"><router-view></router-view></div>

    </div>
  </div>
</template>

<script>
import { mdFunction } from '@/units/markdown'
import Nav from './components/nav'
import store from '@/store'
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
  created () {
    if (this.$route?.meta?.list) {
      store.commit('setLeftList', { title: this.$route.name, list: this.$route.meta.list.map((element) => element.name) })
    } else {
      store.commit('setLeftList', { title: this.$route.matched[0].name, list: this.$route.matched[0].meta.list.map((element) => element.name) })
    }
    this.$nextTick(() => {
      console.log(11)
      mdFunction()
    })
  },
  updated () {
    this.$nextTick(() => {
      console.log(11)
      mdFunction()
    })
  }
}
</script>
