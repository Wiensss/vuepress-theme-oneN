<template>
  <div v-if="this.$frontmatter.references">
    <a-collapse class="ref-card">
      <a-collapse-panel :showArrow="false">

        <template slot="header">
          <a-icon type="link" />&nbsp;&nbsp;阅读&nbsp;&amp;&nbsp;参考
        </template>

        <p
          v-for="(item, index) in this.$frontmatter.references"
          :key="item.title"
          class="card-content">
          {{ index + 1 + ' - ' + item.author + ', ' }}
          <a :href="item.link" target="view_window">{{ item.title }}</a>
        </p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style scope lang="stylus">
.ref-card
  margin 0 auto
  font-weight 600
  width $contentWidth

  .card-content
    padding-left 10px
    color $textColor

.ref-card:hover
  background #42b9833d
  transition all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)
</style>