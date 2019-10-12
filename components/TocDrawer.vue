<template>
  <div v-show="tocItems.length > 0">

    <a-tooltip placement="left">
      <template slot='title'>目录</template>
      <a-icon
        type="bars"
        @click="visible = true"
        class="toc-button" />
    </a-tooltip>

    <a-drawer
      placement="left"
      :closable="false"
      :visible="visible"
      @close="visible = !visible">
      <a-anchor @click="visible = !visible">
        <a-anchor-link
          v-for="toc in tocItems"
          :key="toc.title"
          :title="toc.title"
          :href="fullPath + '#' + toc.slug">
          <a-anchor-link 
            v-for="item of toc.children"
            :key="item.title"
            :title="item.title"
            :href="fullPath + '#' + item.slug"/>
        </a-anchor-link>
      </a-anchor>
    </a-drawer>
  </div>
</template>
<script>
import { resolveTocItems } from '../util'

export default {
  data() {
    return {
      visible: false
    }
  },

  computed: {
    tocItems () {
      return resolveTocItems(this.$page)
    },

    fullPath() {
      return this.$route.fullPath.split('#')[0]
    }
  }
}
</script>

<style scope lang="stylus">
.toc-button
  position fixed
  padding-top 2px
  right .5rem
  bottom 5rem
  width 40px
  height 40px
  line-height 40px
  color $bgColor
  cursor pointer
  font-size 22px
  border-radius 20px
  background rgba(0, 0, 0, .65)
  overflow hidden
  z-index 1

.toc-button:hover
  background $accentColor
  transition all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)
</style>
