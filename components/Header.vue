<template>
  <header>
    <div class="avatar">
      <el-avatar
        :src="$themeConfig.avator.url"
        :size="$themeConfig.avator.size"
        :alt="$themeConfig.avator.alt"
      ></el-avatar>
    </div>

    <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />

    <div class="nav">
      <el-button class="btn" icon="el-icon-user" type="text">关于我</el-button>
      <el-button class="btn" icon="el-icon-star-off" type="text">GitHub</el-button>
    </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  name: 'Header',

  components: { SearchBox }
}
</script>

<style>
.avatar {
  float: left;
  margin-top: 10px;
}

.nav {
  float: right;
}

.btn {
  color: #7a7374;
  font-size: 14px;
  padding: 0.5em;
}

</style>