import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import FlowPanel from '@/views/FlowPanel'

export default new Router({
  routes: [
    {
      path: '/',
      component: FlowPanel
    },
    // demos
    {
      path: '/example1',
      component: () => import('./views/Example1.vue')
    },
  ]
})
