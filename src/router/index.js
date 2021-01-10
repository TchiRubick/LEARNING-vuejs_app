import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from "axios";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../views/Add.vue'),
  },
  {
    path: '*',
    redirect: '/'
  }
];


const router = new VueRouter({
  routes
})

export default router
