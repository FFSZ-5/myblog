<template>
  <div class="leftnav">
    <div class="title">
      {{ leftList.title }}
    </div>
    <ul>
      <li v-for="item in leftList.list" :key="item" @click="routeJump(item)" :class="{'active':activeLi==item}">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {

    }
  },
  methods: {
    routeJump (val) {
      this.$router.push({ name: val })
    }
  },
  computed: {
    ...mapState([
      'leftList',
      'activeLi'
    ])
  }
}
</script>
