<template>
  <div class="home">
    <div @click="click">123</div>

  </div>
</template>

<script>
export default {
  methods: {
    click () {
      this.$router.push({ path: '/js技术收集' })
    }
  }
}
</script>
