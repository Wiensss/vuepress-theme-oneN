<template>
  <div class="flex-layout">
    <div class="item">
      <el-menu style="width: 200px" :unique-opened="true" @select="clickMenu">
        <el-submenu v-for="menu in $themeConfig.menu" :key="menu.text" :index="menu.text">
          <template slot="title">{{ menu.text }}</template>
          <el-menu-item
            v-for="subMenu in menu.children"
            :key="subMenu.text"
            :index="menu.link + subMenu.link"
          >{{ subMenu.text }}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

    <div class="item">
      <el-menu @select="clickMenuItem">
        <el-menu-item :index="post.path" v-for="post in posts">
          <span slot="title">{{ post.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  data() {
    return {
      menuPath: null
    }
  },

  computed: {
    posts() {
      return this.$site.pages
        .filter(post =>
          post.path.startsWith(this.menuPath) && !post.frontmatter.blog_index
        )
    }
  },

  methods: {
    clickMenu(index) {
      this.menuPath = index
    },

    clickMenuItem(index) {
      index !== this.$route.path ? this.$router.push(index) : null
    }
  }
}
</script>

<style>
.flex-layout {
  display: flex;
}

.item {
  flex: auto;
}
</style>
