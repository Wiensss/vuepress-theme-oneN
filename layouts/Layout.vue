<template>
<div>
  <LoadingPage v-if="firstLoad" />

  <Home v-if="$page.frontmatter.home"/>

  <a-layout v-else>
    <a-layout-sider
      width="256px"
      breakpoint="lg"
      collapsedWidth="0"
      v-model="collapsed"
      class="layout-sidebar"
    >
      <div class="logo">
        <img
          :src="$themeConfig.logo
            ? $withBase($themeConfig.logo)
            : require('../images/logo.png')"
          alt="logo"
        />
      </div>
      <Sidebar :collapsed="collapsed" />
    </a-layout-sider>

    <a-layout class="content-margin">
      <a-layout-header class="layout-header">
        <Header />
        <a-icon
          class="trigger"
          @click="collapsed = !collapsed"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        />
      </a-layout-header>

      <a-layout-content @click="isCollapsed">
        <Page />
      </a-layout-content>

      <a-layout-footer class="layout-footer">
        <Footer />
      </a-layout-footer>

      <TocDrawer />
      <a-back-top class="back-top" />

    </a-layout>
  </a-layout>
</div>
</template>

<script>
import Home from '@theme/components/Home'
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import Sidebar from '@theme/components/Sidebar'
import Page from '@theme/components/Page'
import TocDrawer from '@theme/components/TocDrawer'
import LoadingPage from '@theme/components/LoadingPage'

export default {
  components: {
    Home,
    Header,
    Footer,
    Sidebar,
    Page,
    TocDrawer,
    LoadingPage
  },

  data() {
    return {
      collapsed: false,
      firstLoad: true
    }
  },

  mounted() {
    const time = sessionStorage.getItem('firstLoad') == undefined ? 1000 : 0
    setTimeout(() => {
      this.firstLoad = false
      if (sessionStorage.getItem('firstLoad') == undefined) {
        sessionStorage.setItem('firstLoad', false)
      }
    }, time)
  },

  methods: {
    isCollapsed() {
      if (!this.collapsed && document.documentElement.clientWidth < 992)
        return this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="stylus">
.layout-header
  padding 0
  height 70px
  background #f9f9f9 url('../images/header.jpg') no-repeat left
  background-size auto 100%

.layout-footer 
  color $textColor
  font-weight 500
  text-align center

.layout-sidebar 
  position fixed
  height 100vh
  overflow hidden
  z-index 5

  .logo
    height 70px
    width 100%
    border 5px solid
    text-align center
    background $bgColor
    border-image linear-gradient(to left, $accentColor, $textColor) 30 30
    background-size auto 80px

    img
      max-height 60px

.back-top 
  right .5rem
  bottom 2rem
  z-index 10

.trigger:hover 
  color $accentColor
  transition all .5s cubic-bezier(.645, .045, .355, 1)

@media screen and (min-width $MQNarrow + 1) 
  .content-margin
    margin-left 256px

  .trigger 
    display none

@media (max-width $MQNarrow) 
  .content-margin
    margin-left 0

  .trigger 
    position absolute
    top 0
    right 0
    padding 0 10px
    font-size 26px
    line-height 75px
</style>