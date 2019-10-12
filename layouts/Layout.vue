<template>
  <a-layout>

    <a-layout-sider
      width="256px"
      breakpoint="lg"
      collapsedWidth="0"
      v-model="collapsed"
      class="layout-sidebar">
      <div class="logo" title="oneN"></div>
      <Sidebar :collapsed="collapsed"/>
    </a-layout-sider>

    <a-layout class="content-margin">

      <a-layout-header class="layout-header">
        <Header />
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed" />
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
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import Sidebar from '@theme/components/Sidebar'
import Page from '@theme/components/Page'
import TocDrawer from '@theme/components/TocDrawer'

export default {
  components: {
    Header,
    Footer,
    Sidebar,
    Page,
    TocDrawer
  },

  data() {
    return {
      collapsed: false
    }
  },

  methods: {
    isCollapsed() {
      if (!this.collapsed && document.documentElement.clientWidth < 992) {
        return this.collapsed = !this.collapsed
      }
    }
  }
}
</script>

<style scope lang="stylus">
.layout-header
  padding 0
  height 70px
  background #f9f9f9 url('/header.jpg') no-repeat left
  background-size auto 100%

.layout-footer  
  color $textColor
  font-weight 500
  text-align center

.layout-sidebar
  position fixed
  height 100vh
  overflow hidden
  z-index 10

  .logo
    height 70px
    border 5px solid $borderColor
    background $bgColor url('/logo.png') no-repeat center
    background-size auto 100%

.back-top
  right .5rem
  bottom 2rem

.trigger:hover
  color $accentColor
  transition all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)

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
