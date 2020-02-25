<template>
  <div class="home">
    <div id="nav">
      <p :class="{active:tab=='all'}" @click="changeTab('all')">全部</p>
      <p :class="{active:tab=='good'}" @click="changeTab('good')">精华</p>
      <p :class="{active:tab=='share'}" @click="changeTab('share')">分享</p>
      <p :class="{active:tab=='ask'}" @click="changeTab('ask')">问答</p>
      <p :class="{active:tab=='job'}" @click="changeTab('job')">招聘</p>
    </div>
    <Content :list='topics' v-show="tab=='all'"></Content>
    <Content :list='topics' v-show="tab=='good'"></Content>
    <Content :list='topics' v-show="tab=='share'"></Content>
    <Content :list='topics' v-show="tab=='ask'"></Content>
    <Content :list='topics' v-show="tab=='job'"></Content>
  </div>
</template>

<script>
import Content from '../components/Content'
import axios from '../../node_modules/axios'

export default {
  name: 'Home',
  components: {
    Content
  },
  data() {
    return {
      topics: [],
      tab: 'all'
    }
  },

  mounted() {
    this.getTopics()
  },

  methods: {
    changeTab(tab) {
      this.tab = tab
      this.getTopics()
    },

    getTopics() {
      axios
      .get(`https://cnodejs.org/api/v1/topics?tab=${this.tab}`)
      .then(this.getTopicsSucc)
    },

    getTopicsSucc(res) {
      res = res.data
      if (res.success && res.data) {
        this.topics = res.data
      }
    },
  },
}

</script>

<style lang="stylus">
#nav
  border-bottom 2px solid #eee
#nav p
  display inline-block
  line-height 40px
  margin-right 40px
  cursor pointer
.active
  color #409eff
  border-bottom 2px solid #409eff

</style>
