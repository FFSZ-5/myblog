
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
  computed: {
    ...mapState(['isShowLeft'])
  },
  created () {
    if (this.$route?.meta?.list) {
      this.setLeftList({ title: this.$route.name, list: this.$route.meta.list.map((element) => { return { name: element.name, path: element.path } }) })
    } else {
      this.setLeftList({ title: this.$route.matched[0].name, list: this.$route.matched[0].meta.list.map((element) => { return { name: element.name, path: element.path } }) })
    }
    this.$nextTick(() => {
      mdFunction()
    })
  },
  updated () {
    this.$nextTick(() => {
      console.log(11)
      mdFunction()
    })
  },
  methods: {
    ...mapMutations(['setLeftList'])
  }
}
</script>
