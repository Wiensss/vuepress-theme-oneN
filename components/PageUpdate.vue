<template>
  <div class="last-updated" v-if="lastUpdated">
    <span class="prefix">{{ lastUpdatedText }}:</span>
    <span class="time">{{ lastUpdated }}</span>
  </div>
</template>
<script>
import isNil from 'lodash/isNil'
import { endingSlashRE, outboundRE } from '../util'
export default {
  name: 'PageUpdate',
  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },
  }
}
</script>
<style lang="stylus">
@require '../styles/wrapper.styl'

.last-updated 
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  float right
  font-size 0.9em
  .prefix 
    font-weight 500
    color lighten($textColor, 25%)
  
  .time 
    font-weight 400
    color #aaa

@media (max-width 992px)
  .last-updated 
    font-size 0.8em
    float none
    text-align left
</style>