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
        const result = []
        if (val && val.length > 0) {
          for (const i of val) {
            console.log(i.name)
            result[Number(i.name.split('-')[0])] = i.name.split('.')[0].split('-')[1]
          }
        }
        this.bookList = result
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
