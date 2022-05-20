<template>
  <div class="leftnav"
       :class="{'hide-leftnav':!isShowLeft}">
    <div class="extend"
         @click="hideLeft">{{isShowLeft?'收':'放' }}</div>
    <div class="title">
      {{ leftList.title }}
    </div>
    <ul>
      <li v-for="item in bookList"
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
import { storeFile } from '@/units/tool.js'
export default {
  props: {
    list: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      bookList: []
    }
  },
  watch: {
    'leftList.list': {
      handler (val) {
        this.bookList = storeFile(val)
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations(['setIsShowLeft']),
    routeJump (val) {
      this.$router.push({ path: val })
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
