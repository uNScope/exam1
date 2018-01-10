import Vue from 'vue'
import Router from 'vue-router'

import HomePage from 'pages/HomePage.vue'
import AboutPage from 'pages/AboutPage.vue'
import EverPage from 'pages/EverPage.vue'
import TileDetail from 'pages/TileDetail.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    }, {
      path: '/about',
      name: 'About',
      component: AboutPage
    }, {
      path: '/ever',
      name: 'Ever',
      component: EverPage
    }, {
      path: '/tile/:id',
      name: 'TileDetail',
      component: TileDetail

    }
  ]
})