<template>
  <div class="m-header">
      <div class="icon"></div>
      <h1 class="header-title">{{headerTitle}}</h1>
  </div>
</template>
<script>
export default {
  name: 'MHeader',
  data () {
      return {
          headerTitle: "Vue Music"
      }
  }
}
</script>
<style lang="stylus" res="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixin"
    @import "../../common/stylus/variable"
    
    .m-header
        height: 44px;
        text-align: center
        color: $color-theme
        .icon
            display: inline-block
            width: 30px
            height: 32px
            bg-image("logo")
            margin: 6px 9px 0 0
            background-repeat: no-repeat
            background-size: 30px 32px
            vertical-align: top
        .header-title
            display: inline-block
            line-height: 44px
            font-size: $font-size-large
            vertical-align: top
</style>


