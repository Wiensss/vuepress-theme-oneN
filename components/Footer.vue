<template>
  <div class="component-footer">
    <a-divider>End</a-divider>
    ©2019 Created by Vincent Hy
    <a-icon type="fullscreen" spin />
    Powered by
    <a href="https://github.com/vuejs/vuepress" target="view_window">Vuepress</a> | Theme by
    <a href="https://github.com/Veminem/vuepress-theme-oneN" target="view_window">oneN</a>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus">
@require '../styles/palette.styl'

.cpmponent-footer
  border-top solid 0.5em #e2e1e4
  line-height 60px

</style>
