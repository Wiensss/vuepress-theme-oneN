<template>
  <div v-if="this.$frontmatter.references">
    <a-collapse class="card">
      <a-collapse-panel :showArrow="false">
        <template slot="header">
          <a-icon type="tags" />&nbsp;&nbsp;阅读&nbsp;&amp;&nbsp;参考
        </template>
        <p
          v-for="(item, index) in this.$frontmatter.references"
          :key="item.title"
          class="card-content"
        >
          {{ index + 1 + ' - ' + item.author + ', ' }}
          <a :href="item.link" target="view_window">{{ item.title }}</a>
        </p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: 'SourceCard'
}
</script>

<style lang="stylus">
@require '../styles/palette.styl'

.card
  width 740px
  margin 0 auto

  .card-content
    padding-left 10px
    font-weight 600
    font-size 14px
    color $text-color
</style>