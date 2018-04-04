import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import lazyLoadImage from 'vue-lazyload'
import '../src/common/stylus/index.styl'

fastclick.attach(document.body)
/* eslint-disable no-new */

Vue.use(lazyLoadImage, {
  loading: require('./common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
