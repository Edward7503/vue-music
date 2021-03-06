import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/rank.vue'
import Recommend from '../components/recommend/recommend.vue'
import Search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'

Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer
  }
]
export default new Router({
  routes: routes
})
