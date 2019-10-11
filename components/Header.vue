<template>
  <div class="component-header">
    <div class="navbar-avatar">
      <a-avatar :size="55" src="/avatar.jpg" />
    </div>
    <span>
      <SearchBox class="search-box"/>
    </span>
    <a-breadcrumb class="navbar-breadcrumb">
      <a-breadcrumb-item
        v-for="item of $themeConfig.navbar"
        :key="item.type"
      >
        <a class="navbar-icon" :href="item.href">
          <a-tooltip placement="bottom">
            <template slot='title'><span>{{ item.title }}</span></template>
            <a-icon :type="item.type"/>
          </a-tooltip>
          <span class="navbar-icon-title">{{ item.title }}</span>
        </a>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  name: 'Header',

  components: { SearchBox }
}
</script>

<style lang="stylus">
@require '../styles/palette.styl'

@keyframes rotate 
  from 
    transform rotate(0deg)
  to 
    transform rotate(360deg)

.component-header
  height 70px
  background #fff

  .navbar-avatar img:hover
    animation rotate 2s linear infinite

  .navbar-breadcrumb
    float right
    font-size 16px
    line-height 70px
    padding-right 20px

    .navbar-icon
      color $text-color

    .navbar-icon:hover
      color $link-color

@media (max-width 992px)
  .search-box
    margin-left 0.4em

    .suggestions
      top 4rem
      width 12rem

  .navbar-breadcrumb
    margin-right 2rem

    .navbar-icon
      svg
        font-size 22px

      .navbar-icon-title
        display none

  .navbar-avatar
    float left
    padding-left 10px

@media screen and (min-width 993px)
  .search-box
    margin-left 13%
    
    .suggestions
      width 18rem
      top 4rem

  .navbar-avatar
    float left
    padding-left 20px
</style>