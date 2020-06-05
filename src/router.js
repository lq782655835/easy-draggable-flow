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
    // {
    //   path: '/drag-to-workplace',
    //   name: 'DragToWorkplace',
    //   component: DragToWorkplace
    // },
    // {
    //   path: '/demo-chart',
    //   name: 'DemoChart',
    //   component: DemoChart
    // }
  ]
})
