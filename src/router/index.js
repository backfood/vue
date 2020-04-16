import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rotate from "../views/rotate/rotate.vue"
import Notes from "@/views/notes/index.vue"
import Http from "@/views/notes/http.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: "/child1",
        name: "child",
        component: () => import('@/views/router/childrenfirst.vue')
      },
      {
        path: "/child2",
        name: "child",
        component: () => import('@/views/router/childrensen.vue')
      },

    ]
  },
  {
    path: "/scroll",
    name: "scroll",
    component: () => import('@/views/better-scroll/scroll.vue'),
    children: [
      {
        path: "/rotate",
        name: "rotate",
        component: Rotate
      }
    ]
  },
  {
    path: "/notes",
    name: "notes",
    component: Notes,
    children:[
      {path:"/http",
    component:Http}
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
