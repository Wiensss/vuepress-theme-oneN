<template>
  <div>

    <a-divider>End</a-divider>

    © 2019-Present Created by {{ data.name ? data.name : 'Vicent Hy' }}
    <a-icon
      :spin="data.footer && data.footer.spin ? data.footer.spin : false"
      :type="data.footer && data.footer.type ? data.footer.type : 'chrome'"
      :theme="data.footer && data.footer.theme ? data.footer.theme : 'filled'"
    />
    Powered by
    <a href="https://github.com/vuejs/vuepress" target="view_window">Vuepress</a>
    | Theme by
    <a href="https://github.com/Veminem/vuepress-theme-oneN" target="view_window">oneN</a>

  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$themeConfig
    }
  }
}
</script>

<style lang="stylus" scoped>
a:hover 
  color $accentColor
  text-decoration overline

svg 
  color $accentColor
  font-size 1.2rem

svg:hover 
  color $textColor
</style>