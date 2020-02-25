<template>
  <div class="header">
      <div class="header_left">
          <img src="../assets/cnodejs_logo.svg" alt="cnode">
      </div>
      <div class="header_right">
          about
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>


<style scoped lang="stylus">
.header
  display flex
  justify-content space-between
  align-items center
  padding 10px 120px
  background rgba(0,0,0,.65);
  color #fff
  .header_left
    width 120px

</style>
