<template>
  <div v-show="tocItems.length > 0">

    <a-tooltip placement="left">
      <template slot="title">目录</template>
      <a-icon
        type="bars"
        class="toc-button"
        @click="visible = true"
      />
    </a-tooltip>

    <a-drawer
      placement="left"
      :closable="false"
      :visible="visible"
      @close="visible = !visible"
    >
      <a-anchor @click="visible = !visible">
        <a-anchor-link
          v-for="(toc, index) in tocItems"
          :title="toc.title"
          :href="fullPath + '#' + toc.slug"
          :key="toc.title + index"
        >
          <a-anchor-link
            v-for="(item, index) of toc.children"
            :title="item.title"
            :href="fullPath + '#' + item.slug"
            :key="item + index"
          />
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
    tocItems() {
      return resolveTocItems(this.$page)
    },

    fullPath() {
      return this.$route.fullPath.split('#')[0]
    }
  }
}
</script>

<style lang="stylus" scoped>
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
  transition all .3s cubic-bezier(.645, .045, .355, 1)
</style>