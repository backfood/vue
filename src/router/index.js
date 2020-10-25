import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Rotate from "../views/rotate/rotate.vue"
import Swiper from "../views/rotate/swiper/swiper.vue"
import Notes from "@/views/notes/index.vue"
import Http from "@/views/notes/http.vue"
import Echarts from "@/views/notes/echarts.vue"
import Qimen  from "@/views/notes/qimen.vue"
import orderDetails from "@/views/w-order-recode-m"
import withdrawManger from "@/views/w-withdraw-manger"
import classification from "@/views/w-classification"
import goodsList from "@/views/w-goods-list"
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    name: 'home',
    component: classification,

  },
  {
    path:"/goods-list/:id",
    name:"goods-list",
    component:()=>import("@/views/w-goods-list/edit-and-reset.vue")
  },
  {
    path:"/order-details/:id",
    name:"order-details",
    component:()=>import("@/views/w-order-recode-m/order-details.vue")
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
      },{
        path: "/swiper",
        name: "swiper",
        component: Swiper
      }
    ]
  },
  {
    path: "/notes",
    name: "notes",
    component: Notes,
    children: [
      {
        path: "/http",
        component: Http
      },
      {
        path: "/echarts",
        component: Echarts
      },{
        path:"/qimen",
        component:Qimen
      }
    ]
  },{
    path:"/video",
    name:"video",
    component:()=>import("@/views/video")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
