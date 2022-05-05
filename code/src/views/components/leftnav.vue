<template>
  <div class="leftnav"
       :class="{'hide-leftnav':!isShowLeft}">
    <div class="extend"
         @click="hideLeft">{{isShowLeft?'收':'放' }}</div>
    <div class="title">
      {{ leftList.title }}
    </div>
    <ul>
      <li v-for="item in leftList.list"
          :key="item"
          @click="routeJump(item)"
          :class="{'active':activeLi==item}">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    list: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['setIsShowLeft']),
    routeJump (val) {
      this.$router.push({ name: val })
    },
    hideLeft () {
      this.setIsShowLeft(!this.isShowLeft)
    }
  },
  computed: {
    ...mapState([
      'leftList',
      'activeLi',
      'isShowLeft'
    ])
  }
}
</script>
