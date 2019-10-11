<template>
  <div class="page">
    <Content class="content__default" />
    <SourceCard />
    <a-back-top class="back-top"/>
  </div>
</template>

<script>
import SourceCard from './SourceCard'

export default {
  name: 'Page',

  components: { SourceCard },
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
