<template>
  <a-layout>
    <a-layout-sider
      theme="light"
      width="256px"
      breakpoint="lg"
      collapsedWidth="0"
      v-model="collapsed"
      class="layout-sidebar"
    >
      <div class="logo" title="oneN">
      </div>
      <Sidebar :collapsed="collapsed"/>
    </a-layout-sider>
    <a-layout class="clear-content-margin">
      <a-layout-header class="layout-header">
        <Header />
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content @click="isCollapsed">
        <Page />
        <a-back-top class="back-top"/>
      </a-layout-content>
      <a-layout-footer class="layout-footer">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import Sidebar from '@theme/components/Sidebar'
import Page from '@theme/components/Page'

export default {
  name: 'Layout',

  components: {
    Header,
    Footer,
    Sidebar,
    Page
  },

  data() {
    return {
      collapsed: false,
    }
  },

  methods: {
    isCollapsed() {
      if (!this.collapsed && document.documentElement.clientWidth < 992) {
        this.collapsed = !this.collapsed
      }
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
@require '../styles/wrapper.styl'

.logo
  height 70px
  background rgba(255, 255, 255, .4) url('/logo.png') no-repeat center
  background-size auto 100%
  border 5px solid #d6d3d3

.layout-header
  padding 0
  background #eee

.layout-footer
  text-align center 

.layout-sidebar
  position fixed
  height 100vh
  width 256px
  z-index 10
  overflow hidden

.back-top
  right 1%
  bottom 30px

.ant-back-top-content:hover
  background #42b983

.trigger:hover
  color $link-color

@media screen and (min-width 993px)
  .clear-content-margin
    margin-left 256px

  .trigger
    display none

@media (max-width 992px)
  .clear-content-margin
    margin-left 0
  
  .trigger
    position absolute
    top 0
    right 0
    padding 0 10px
    line-height 70px
    font-size 26px
</style>
