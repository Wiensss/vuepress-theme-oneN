<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>

    <el-container>
      <Menu />
      <Post />
    </el-container>

    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import Menu from '@theme/components/Menu'
import Post from '@theme/components/Post'

export default {
  name: 'Layout',

  components: {
    Header,
    Footer,
    Menu,
    Post
  }
}
</script>

<style>
.el-header {
  background-color: #e2e1e4;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 0px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
