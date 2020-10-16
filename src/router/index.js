import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Device from '../views/Device.vue'
import Problem from '../views/Problem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/device',
    name: 'Devices',
    component: Device
  },
  {
    path: '/problem',
    name: 'Problems',
    component: Problem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
