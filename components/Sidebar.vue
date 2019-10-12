<template>
  <a-menu
    mode="inline"
    :openKeys="openKeys"
    :defaultSelectedKeys="[this.$route.path]"
    @openChange="onOpenChange"
    class="component-sidebar">

    <a-sub-menu
      v-for="menu in $themeConfig.menu"
      :key="menu.link">
      <span slot="title">{{ menu.text }}</span>

      <a-sub-menu
        v-for="subMenu in menu.children"
        :key="subMenu.link"
        @titleClick="keepOpenKeys(menu.link + subMenu.link)">
        <span slot="title">{{ subMenu.text }}</span>

        <a-menu-item
          v-for="(post, index) in posts"
          :key="post.path"
          @click="gotoPost(post.path)">
          {{ 1 + index + ' - ' + post.title }}
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
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
    this.rootSubmenuKeys = this.$themeConfig.menu.map(item => item.link)
    this.getDefaultmenuKeys()
  },

  methods: {
    getDefaultmenuKeys() {
      if (this.$route.query !== null) {
        const defaultMenu = []
        for (let param in this.$route.query)
          defaultMenu.push(this.$route.query[param])
        this.openKeys = defaultMenu
        this.menuPath = defaultMenu.join('')
      }
    },

    keepOpenKeys(path) {
      this.menuPath = path
      if (this.openKeys.length > 1)
        this.openKeys.pop()
    },

    gotoPost(path) {
      path !== this.$route.path ? this.$router.push({ path: path, query: this.openKeys }) : null
    },

    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      )
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1)
        this.openKeys = openKeys
      else
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
    }
  }
}
</script>

<style scope lang="stylus">
.component-sidebar
  height 91.4vh
  overflow-y auto
</style>