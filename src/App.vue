<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from "../src/components/m-header/m-header";
import Tab from "../src/components/tab/tab";

export default {
  name: "App",
  components: {
    MHeader,
    Tab
  }
};
</script>

<style res="stylesheet/stylus" lang="stylus" scoped>
@import './common/stylus/variable';

#app {
  color: $color-theme;
}
</style>
