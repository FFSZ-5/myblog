<template>
  <div class="leftnav">
    <div class="title">
      {{list.title}}
    </div>
    <ul>
      <li v-for="item in list.list"
          :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => { }
    }
  },
  created () {
    console.log(this.list)
  },
  methods: {
  }
}
</script>
