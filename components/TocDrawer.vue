<template>
  <div class="draw-content">
    <a-tooltip placement="left">
      <template slot='title'><span>目录</span></template>
      <a-icon type="bars" @click="showDrawer" class="toc-button"/>
    </a-tooltip>
    <a-drawer
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <a-anchor @click="visible = !visible">
        <a-anchor-link
          v-for="toc in tocItems"
          :key="toc.title"
          :title="toc.title"
          :href="fullPath + '#' + toc.title.toLowerCase()"
        >
          <a-anchor-link 
            v-for="item of toc.children"
            :key="item.title"
            :title="item.title"
            :href="fullPath + '#' + item.title.toLowerCase()"
          />
        </a-anchor-link>
      </a-anchor>
    </a-drawer>
    </div>
  </div>
</template>
<script>
import { resolveTocItems } from '../util'

export default {
  name: 'Toc-Drawer',

  data() {
    return {
      visible: false,
      prePath: ''
    }
  },

  computed: {
    tocItems () {
      return resolveTocItems(this.$page)
    },

    fullPath() {
      return this.$route.fullPath.split('#')[0]
    }
  },

  methods: {
    showDrawer() {
      this.visible = true
    },

    onClose() {
      this.visible = false
    }
  },
}
</script>

<style lang="stylus">
@require '../styles/palette.styl'

.toc-button
  position fixed
  right 1%
  bottom 85px
  width 40px
  height 40px
  line-height 40px
  border-radius 20px
  z-index 10
  color #fff
  cursor pointer
  font-size 22px
  background rgba(0, 0, 0, .65)
  right 1%
  transition all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)
  overflow hidden

.toc-button:hover
  background $link-color

.ant-anchor-link
  line-height 1.3

.ant-anchor-link-title
  color $text-color

.ant-anchor-ink-ball
  border 2px solid $link-color

.ant-anchor-link-title:hover
.ant-anchor-link-active > .ant-anchor-link-title
  color $link-color

.draw-content
  display flex
  align-items center
</style>
