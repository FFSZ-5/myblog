
<template>
  <div class="detail">
    <Nav />
    <LeftNav :list="listData" />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/nav'
import LeftNav from './components/leftnav.vue'
export default {
  components: {
    Nav,
    LeftNav
  },
  data () {
    return {
      listData: {}
    }
  },
  created () {
    console.log(this.$route)
    this.listData.title = this.$route.name
    this.listData.list = this.$route.meta.list.map((element) => element.name)
  }
}
</script>
