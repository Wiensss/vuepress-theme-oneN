<template>
  <div class="page">
    <Content class="content__default" />
    <SourceCard />
  </div>
</template>

<script>
import SourceCard from './SourceCard'

export default {
  components: { SourceCard },
}
</script>

<style lang="stylus">
.page
  padding-bottom 2rem
  display block
</style>