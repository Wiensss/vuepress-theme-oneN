<template>
  <div class="loader-wrapper">

    <div class="loader-main">
      <div v-for="item in 4" :key="`out${item}`"></div>
    </div>

    <h3 v-if="$frontmatter.home" class="title">
      {{ $frontmatter.message }}
    </h3>

    <p class="description">Just wait a minute!</p>

  </div>
</template>

<style lang="stylus" scoped>
.loader-wrapper 
  width: 100vw
  height: 100vh

  .loader-main 
    position fixed
    top 45%
    left 50%
    width 120px
    height 50px
    z-index 20
    transform translate(-50%, 0)

    div 
      &:nth-child(2) 
        animation pacman-balls 1s 0s infinite linear
      &:nth-child(3) 
        animation pacman-balls 1s 0.33s infinite linear
      &:nth-child(4) 
        animation pacman-balls 1s 0.66s infinite linear
      &:nth-child(5) 
        animation pacman-balls 1s 0.99s infinite linear
      &:first-of-type 
        width 0
        height 0
        border-top 25px solid $accentColor
        border-bottom 25px solid $accentColor
        border-left 25px solid $accentColor
        border-right 25px solid transparent
        border-radius 25px
        animation: rotate-up 0.5s 0s infinite
      &:nth-child(2) 
        margin-top -50px
        width 0
        height 0
        border-top 25px solid $accentColor
        border-left 25px solid $accentColor
        border-bottom 25px solid $accentColor
        border-right 25px solid transparent
        border-radius 25px
        animation rotate-down 0.5s 0s infinite
      &:nth-child(3)
      &:nth-child(4)
      &:nth-child(5)
      &:nth-child(6) 
        position absolute
        margin 2px
        top 25px
        left 100px
        width 15px
        height 15px
        border-radius 100%
        background-color $accentColor
        transform translate(0, -6.25px)

  .title 
    position absolute
    margin auto
    padding 0 10px
    top 12%
    left 0
    right 0
    box-sizing border-box
    color $textColor
    font-size 30px
    text-align center
    text-shadow 0 2px 10px rgba(0, 0, 0, .2)

  .description 
    position absolute
    margin auto
    padding 0 10px
    top 20%
    left 0
    right 0
    box-sizing border-box
    color $textColor
    font-size 22px
    text-align center
    text-shadow 0 2px 10px rgba(0, 0, 0, .2)

@keyframes pacman-balls 
  75% 
    opacity .7

  100% 
    -webkit-transform translate(-100px, -6.25px)
    transform translate(-100px, -6.25px)
  

@keyframes rotate-up 
  0% 
    -webkit-transform rotate(270deg)
    transform rotate(270deg)

  50% 
    -webkit-transform rotate(360deg)
    transform rotate(360deg)
  
  100% 
    -webkit-transform rotate(270deg)
    transform rotate(270deg)

@keyframes rotate-down 
  0% 
    -webkit-transform rotate(90deg)
    transform rotate(90deg)
  
  50% 
    -webkit-transform rotate(0deg)
    transform rotate(0deg)

  100% 
    -webkit-transform rotate(90deg)
    transform rotate(90deg)
</style>