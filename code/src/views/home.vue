<template>
  <div class="home">
    <div class="banner">
      <div>
        <span>学习</span>
        <span>好好学习，天天向上</span>
      </div>
    </div>
    <div class="content">
      <div class="learn-item"
           v-for="(key,value) in learnList"
           :key="key"
           @click="click(key)">{{value}}</div>
    </div>
    <div class="github-right"><a href="https://github.com/FFSZ-5/myblog"
         target="_blank"><i class="github"></i><span>GitHub</span></a></div>
  </div>
</template>

<script>
import * as THREE from 'three'
import cloud from 'vanta/src/vanta.clouds'
export default {
  data () {
    return {
      vanta: null,
      learnList: {}
    }
  },
  mounted () {
    this.vanta = cloud({
      el: '.banner',
      THREE: THREE
    })
    this.getList()
  },
  beforeDestroy () {
    if (this.vanta) {
      this.vanta.destroy()
    }
  },
  methods: {
    click (val) {
      this.$router.push({ path: val })
    },
    getList () {
      var requireModule = require.context('../mdfile', true, /\.md$/)
      var arr = []
      for (var i = 0; i < requireModule.keys().length; i++) {
        arr.push(
          requireModule.keys()[i].substr(2, requireModule.keys()[i].length)
        )
      }
      arr.map((element) => {
        if (!Object.keys(this.learnList).includes(element.split('/')[0])) {
          this.learnList[element.split('/')[0]] = element.split('.')[0]
        }
      })
      this.learnList = JSON.parse(JSON.stringify(this.learnList))
    }
  }
}
</script>
