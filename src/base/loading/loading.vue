<template>
  <div id='loading'>
      <img width="24" height="24" src="../loading/loading.gif" alt="">
      <span class="text">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    title: {
      type: String,
      default: "loading"
    }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang='stylus' scoped>
@import '../../common/stylus/variable.styl';

#loading {
    width: 100%;
    text-align: center;

    .text {
        font-size: $font-size-small;
        color: $color-text-l;
        line-height: 20px;
    }
}
</style>