import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(`./components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    {
      path: '/addevent',
      component: load('AddEvent')
    },
    {
      path: '/home',
      component: load('Home')
    },
    {
      path: '/eventrequests',
      component: load('EventMonitor')
    }
  ]
})