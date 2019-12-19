import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
const Login = () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue');
const Register = () => import ('../views/reg/Register.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      requireLogin:true,
      requireCache:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      requireLogin:false,
      requireCache:false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      requireLogin:false,
      requireCache:false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
