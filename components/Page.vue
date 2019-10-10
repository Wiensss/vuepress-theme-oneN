<template>
  <div class="page">
    <Content ref="content" class="content__default" />
    <a-back-top class="back-top"/>
  </div>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

.back-top
  right 1%
  bottom 30px

.ant-back-top-content:hover
  background #42b983
</style>
