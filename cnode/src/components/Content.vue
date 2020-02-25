<template>
  <div class="Content">
    <div class="topic" v-for="item of list" :key="item.id">
      <div class="topic_left">
        <img :src=item.author.avatar_url alt="avatar">
        <p class="count"><em>{{item.reply_count}}</em> /{{item.visit_count}}</p>
        <p class="category" :class="item.tab"></p>
        <a href="">{{item.title}}</a>
      </div>
      <div class="date">{{$moment(item.last_reply_at,"YYYY-MM-DD").startOf('day').fromNow()}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content',
  props: ['list'],
  data() {
    return {
      topics: []
    }
  },

 
}
</script>

<style lang="stylus" scoped>
  .topic
    display flex
    align-items center
    justify-content space-between
    padding 10px
    .topic_left
      display flex
      align-items center 
    .topic_left img
      width 50px
      border-radius 50%
    .topic_left a
      display inline-block
      width 550px
      line-height normal
      margin-left 30px
      color #42b983
      font-weight 600 
    .count
      width 100px
      margin-left 20px
    .count em 
      font-size 1.2em
      color purple
    .category
      margin-left 20px
      padding 8px
      border-radius 5px
      font-size 0.9em
    .share
      border 1px solid rgba(230,162,60,.2)
      background rgba(230,162,60,.1)
      color #e6a23c
    .share:before
      content '分享'
    .ask
      border 1px solid rgba(103,194,58,.2)
      background rgba(103,194,58,.1)
      color #67c23a
    .ask:before
      content '问答'
    .job
      border 1px solid rgba(144,147,153,.2)
      background rgba(144,147,153,.1)
      color #909399
    .job:before
      content '招聘'
</style>