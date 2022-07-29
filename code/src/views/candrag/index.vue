<template>
  <div class="drag">
    <Left />
    <Content />
    <Right />
  </div>
</template>

<script>
import Left from './components/left.vue'
import Content from './components/content.vue'
import Right from './components/right.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Left,
    Content,
    Right
  },
  data () {
    return {
      // 是否选中
      isDrag: false,
      // 拖拽元素克隆
      cloneElement: null,
      // 点中元素的位置
      offX: 0,
      offY: 0,
      // 画布上的元素
      contentElement: []
    }
  },
  created () {
    window.addEventListener('mousemove', (e) => { this.mouseMove(e) })
    window.addEventListener('mouseup', (e) => { this.mouseUp(e) })
    window.addEventListener('mousedown', (e) => { this.mouseDown(e) })
  },
  computed: {
    ...mapState(['startDrag'])
  },
  methods: {
    ...mapMutations(['setStartDrag']),
    // 鼠标按下
    mouseDown (e) {
      // 添加克隆
      if (e.target.className.indexOf('drag-left-list') > -1) {
        this.offX = e.offsetX
        this.offY = e.offsetY
        this.cloneElement = e.target.cloneNode(true)
        this.cloneElement.classList.add('move-element')
        document.querySelector('body').appendChild(this.cloneElement)
        this.isDrag = true
        console.log(this.cloneElement)
      }
    },
    // 拖拽
    mouseMove (e) {
      if (this.isDrag) {
        this.cloneElement.style.left = e.pageX - this.offX + 'px'
        this.cloneElement.style.top = e.pageY - this.offY + 'px'
      }
    },
    // 鼠标抬起
    mouseUp (e) {
      // console.log(e)
      if (this.isDrag) {
        console.log(this.cloneElement.getAttribute('type'))
        this.isDrag = false
        document.querySelector('body').removeChild(this.cloneElement)
        this.cloneElement = null
      }
    }
  }
}
</script>
