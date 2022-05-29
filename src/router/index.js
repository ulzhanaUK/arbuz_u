import Vue from 'vue'
import Router from 'vue-router'
const Main = resolve => require(['@/pages/Main.vue'], resolve)
const Register = resolve => require(['@/pages/Register.vue'], resolve)
const Login = resolve => require(['@/pages/Login.vue'], resolve)
const Orders = resolve => require(['@/pages/Orders.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    }
  ]
})