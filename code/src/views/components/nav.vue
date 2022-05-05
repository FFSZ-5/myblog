<template>
  <div class="nav">
    <div class="logo"></div>
    <div class="tab">
      <ul>
        <li v-for="item in tabList"
            :key="item.name"
            @click="$router.push(item.url)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      tabList: [
        {
          name: '首页',
          url: '/'
        }
      ]
    }
  }
}
</script>
