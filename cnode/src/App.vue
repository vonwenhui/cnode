<template>
  <div id="app">
    <Header></Header>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style lang="stylus">
#app
  font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  #main
    width 900px
    margin 30px auto
    padding 30px
    box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
</style>
