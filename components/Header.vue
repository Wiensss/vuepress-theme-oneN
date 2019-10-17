<template>
  <div>
    <a-tooltip placement="bottom">
      <template slot="title">Click to Stop</template>
      <a-avatar
        :size="55"
        :src="data.avatar ? $withBase(data.avatar) : require('../images/logo.png')"
        :class="[isPaused ? 'none-rotate' : '', 'navbar-avatar']"
        @click="isPaused = !isPaused"
        @mouseenter="toPaused"
        @mouseleave="toPlay"
      />
    </a-tooltip>
    <SearchBox class="search-box" />

    <audio ref="music" autoplay="autoplay" loop="loop">
      <source type="audio/mpeg" :src="data.music" />
    </audio>

    <a-breadcrumb class="navbar-breadcrumb">
      <a-breadcrumb-item
        v-for="item of $themeConfig.navbar"
        :key="item.type"
      >
        <a-tooltip placement="bottom">
          <template slot="title">{{ item.title }}</template>
          <a :href="item.href" class="navbar-icon">
            <a-icon :type="item.type" />
            <span class="navbar-icon-title">{{ item.title }}</span>
          </a>
        </a-tooltip>
      </a-breadcrumb-item>
    </a-breadcrumb>

  </div>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox },

  data() {
    return {
      music: '',
      isPaused: false 
    }
  },

  computed: {
    data() {
      return this.$themeConfig
    }
  },

  mounted() {
    this.music = this.$refs.music
  },

  methods: {
    toPaused() {
      if (this.data.music) {
        this.music.pause()
      }
    },

    toPlay() {
      if (this.data.music) {
        this.isPaused ? this.music.pause() : this.music.play()
      }
    }
  }
}
</script>

<style lang="stylus">
@keyframes rotate 
  from 
    transform rotate(0deg)

  to 
    transform rotate(360deg)

.navbar-avatar 
  float left
  margin .5rem
  animation rotate 2s linear infinite

.none-rotate
.navbar-avatar:hover
  animation-play-state paused

.navbar-breadcrumb
  float right
  font-size 16px
  line-height 75px
  background-color rgba(0, 0, 0, 0)

  .navbar-icon 
    color $textColor

  .navbar-icon:hover 
    color $accentColor
    transition all .5s cubic-bezier(.645, .045, .355, 1)

@media screen and (min-width $MQNarrow + 1) 
  .navbar-breadcrumb 
    margin-right 1rem

  .search-box 
    margin .2rem 0 0 5rem

    .suggestions 
      width 18rem
      top 3.5rem

@media (max-width $MQNarrow) 
  .search-box 
    margin-top 0.1rem

    input:focus 
      width 7rem

    .suggestions 
      top 3.5rem
      width 12rem

  .navbar-breadcrumb 
    margin-right 2.8rem

    .navbar-icon 
      .navbar-icon-title 
        display none
      svg 
        font-size 22px
</style>