<template>
  <div class="drag-left">
    <ul>
      <li v-for="item in list"
          :key="item.type">
        <div class="drag-left-list"
             :style="item.style"
             :type='item.type'
             @mousedown="mouseDown"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      left: null,
      content: null,
      leftWidth: 15,
      list: [{
        type: 'circle',
        style: {
          height: '100px',
          width: '100px',
          border: '1px solid red'
        }
      }, {
        type: 'div',
        style: {
          height: '100px',
          width: '100px',
          border: '1px solid red',
          'border-radius': '50%'
        }
      }]
    }
  },
  computed: {
    ...mapState(['startDrag'])
  },
  mounted () {
    this.left = document.querySelector('.drag-left')
    this.content = document.querySelector('.drag-content')
    this.left.style.width = this.leftWidth + '%'
    this.content.style.width = 100 - this.leftWidth + '%'
  },
  methods: {
    ...mapMutations(['setStartDrag'])
  }
}
</script>
