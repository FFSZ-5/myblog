<!--
 * @FilePath: \code\src\App.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-04-24 17:50:56
 * @Description:
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  created () {

  },
  methods: {
    click () {
      this.$router.push('/collect')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
