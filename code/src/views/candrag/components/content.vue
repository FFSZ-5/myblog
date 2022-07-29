<!--
 * @FilePath: \code\src\views\candrag\components\content.vue
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-12 15:27:16
 * @Description:
-->
<template>
  <div class="drag-content">
    <div class="content">
      <lf-button />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      round: 0
    }
  },
  created () {
    const a = setInterval(() => {
      if (this.round === 314) {
        this.round = 0
        clearInterval(a)
      } else {
        this.round++
      }
    }, 10)
  },
  computed: {
    ...mapState(['startDrag'])
  },
  methods: {
    ...mapMutations(['setStartDrag']),
    // 鼠标移入
    mouseEnter () {
      console.log(456)
      console.log(this.startDrag)
    }
  }
}
</script>
