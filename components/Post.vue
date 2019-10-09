<template>
  <div class="page">
    <Content class="theme-default-content" />
    <PageUpdate />
    <a-back-top class="back-top"/>
  </div>
</template>

<script>
import PageUpdate from '@theme/components/PageUpdate.vue'
import { resolvePage, outboundRE, endingSlashRE } from '../util'

export default {
  name: 'Post',

  components: {
    PageUpdate
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  display block
  padding-bottom 2rem

.back-top
  right 1%
  bottom 30px

.ant-back-top-content:hover
  background #42b983
</style>
