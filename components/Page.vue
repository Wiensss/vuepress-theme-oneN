<template>
  <div class="page">

    <transition name="slide-fade">
      <Content class="content__default" />
    </transition>

    <SourceCard />
    
  </div>
</template>

<script>
import SourceCard from './SourceCard'

export default {
  components: { SourceCard }
}
</script>

<style lang="stylus">
.page 
  padding-bottom 2rem
  display block

.slide-fade-enter-active 
  transition all .3s ease

.slide-fade-enter 
  transform translateX(20px)
  opacity 0
</style>