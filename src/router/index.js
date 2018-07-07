import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Edit from '../components/pages/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: HelloWorld
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
