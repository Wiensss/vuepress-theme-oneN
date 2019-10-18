<template>
  <div v-if="this.$frontmatter.references">

    <a-collapse class="ref-card">
      <a-collapse-panel :showArrow="false">

        <template slot="header">
          <a-icon type="link" />&nbsp;&nbsp;阅读&nbsp;&amp;&nbsp;参考
        </template>

        <p
          v-for="(item, index) in this.$frontmatter.references"
          class="card-content"
          :key="item.title"
        >
          {{ index + 1 + ' - ' + item.author + ', ' }}
          <a v-if="item.link" :href="item.link" target="view_window">{{ item.title }}</a>
          <span v-else>{{ item.title }}</span>
        </p>

      </a-collapse-panel>
    </a-collapse>

  </div>
</template>

<style lang="stylus" scoped>
.ref-card 
  margin 0 auto
  font-weight 600
  width $contentWidth

  .card-content 
    padding-left 10px
    color $textColor

.ref-card:hover
  background #42b9833d
  transition all .5s cubic-bezier(.645, .045, .355, 1)
</style>