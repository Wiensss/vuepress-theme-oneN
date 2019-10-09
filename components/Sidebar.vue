<template>
  <a-menu
    theme="light"
    mode="inline"
    :openKeys="openKeys"
    @openChange="onOpenChange"
    class="component-sidebar"
  >
    <a-sub-menu v-for="menu in $themeConfig.menu" :key="menu.text">
      <span slot="title"><span>{{ menu.text }}</span></span>
      <a-sub-menu
        v-for="subMenu in menu.children"
        :key="subMenu.text"
        @titleClick="titleClick(menu.link + subMenu.link)"
      >
        <span slot="title"><span>{{ subMenu.text }}</span></span>
        <a-menu-item
          v-for="(post, index) in posts"
          :key="post.path"
          @click="gotoPost(post.path)"
        >
          <span>{{ 1 + index + ' - ' + post.title }}</span>
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  name: "Sidebar",

  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      menuPath: '',
      rootSubmenuKeys: [],
      openKeys: [],
    }
  },

  computed: {
    posts() {
      return this.$site.pages
        .filter(post => post.path.startsWith(this.menuPath) && !post.frontmatter.blog_index)
        .sort((a, b) => a.frontmatter.index - b.frontmatter.index)
    }
  },

  mounted() {
    this.getRootSubmenuKeys() 
  },

  methods: {
    getRootSubmenuKeys () {
      this.rootSubmenuKeys = this.$themeConfig.menu.map(item => item.text)
    },
    titleClick(path) {
      this.menuPath = path
      if (this.openKeys.length > 1) {
        this.openKeys.pop()
      }
    },
    gotoPost(path) {
      path !== this.$route.path ? this.$router.push(path) : null
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      )
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/palette.styl'

.component-sidebar
  width 256px
  height 91vh
  overflow-x 0
  overflow-y auto

.ant-menu-item:hover
.ant-menu-submenu-title:hover
  color $link-color

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected
  background-color $bg-link-color

.ant-menu-submenu-title
.ant-menu-item
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:before
.ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow:after
  color $text-color
  font-weight 600

.ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:after
.ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow:before
  background linear-gradient(to right, $link-color, $link-color)

.ant-menu-inline .ant-menu-item:after
  border-right 3px solid $link-color

</style>