import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: ()=>import('@/views/home/index.vue')},
  {
    path: '/doc', 
    component: ()=>import('@/views/doc/index.vue'),
    children:[
      { path: 'button', component: ()=>import('@/views/doc/button/buttonDoc.vue')},
      { path: 'switch', component: ()=>import('@/views/doc/switch/switchDoc.vue')}
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

