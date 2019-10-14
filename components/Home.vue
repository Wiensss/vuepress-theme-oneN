<template>
  <div 
    class="home"
    :class="isShow? 'isShow': 'isHide'"
  >

    <LoadingPage v-if="firstLoad" />

    <div class="hero">
      <img
        v-if="data.isShowHeroImage !== false"
        :src="data.heroImage || $withBase(data.heroImage)"
        alt="hero"
      />

      <h1 v-if="data.isShowTitleInHome !== false">
        {{ $title }}
      </h1>

      <p class="action">
        <a class="action-button" :href="data.actionLink">
          {{ data.actionText }}
        </a>
      </p>
    </div>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import LoadingPage from './LoadingPage'

export default {
  components: { LoadingPage },

  data() {
    return {
      recoShow: false,
      firstLoad: true
    }
  },

  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  },

  mounted() {
    this.isShow = true

    const time = sessionStorage.getItem('firstLoad') == undefined ? 1000 : 0
    setTimeout(() => {
      this.firstLoad = false
      if (sessionStorage.getItem('firstLoad') == undefined) {
        sessionStorage.setItem('firstLoad', false)
      }
    }, time)
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/loadMixin.styl'

.home
  display block
  margin 0 auto
  padding 2rem 0
  max-width 960px

  .hero
    text-align center
    img
      display block
      margin 3rem auto 1.5rem
      max-width 100%
      max-height 280px
    h1
      font-size 3rem
    h1, .action
      margin 1.8rem auto
    .action-button
      display inline-block
      box-sizing border-box
      padding .8rem 1.6rem
      border-radius 4px
      border-bottom 1px solid darken($accentColor, 10%)
      color #fff
      font-size 1.2rem
      background-color $accentColor
      transition background-color .3s ease
      load-start()

      &:hover
        background-color lighten($accentColor, 10%)

  .features
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
    margin-top 2.5rem
    padding 1.2rem 0
    border-top 1px solid $viceBgColor

  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    transition all .5s
    h2
      padding-bottom 0
      border-bottom none
      font-size 1.4rem
      font-weight 500
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
    &:hover
      transform scale(1.1)

&.isHide
  .hero
    img
    .h1
    .action-button
      load-start()

  .features
    load-start()

  .home-center
    load-start()
    padding 0

&.isShow
  .hero
    img 
      load-end(.08s)
    .h1
      load-end(.16s)
    .action-button
      load-end(.4s)

  .features
    load-end(.40s)

  .home-center
    load-end(.48s)

@media (max-width $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      padding 0 2.5rem
      max-width 100%

@media (max-width $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        margin 2rem auto 1.2rem
        max-height 210px
      h1
        font-size 2rem
      h1, .action
        margin 1.2rem auto
      .action-button
        font-size 1rem
        padding .6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>