import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import GetStarted from '@/components/GetStarted'
import GetStartedFr from '@/components/GetStartedFr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/get-started',
      name: 'GetStarted',
      component: GetStarted
    },
    {
      path: '/fr/get-started',
      name: 'GetStartedFr',
      component: GetStartedFr
    },
    {
      path: '**',
      redirect: '/'
    }
  ],
  mode: 'history'
})
