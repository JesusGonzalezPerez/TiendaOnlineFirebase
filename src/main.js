import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import Notifications from 'vue-notification'
Vue.use(Notifications)

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Inicio from './components/Inicio/Inicio.vue'
Vue.component(Inicio)

import Login from './components/Login/Login.vue'
Vue.component(Login)

import Registrar from './components/Registrar/Registrar.vue'
Vue.component(Registrar)

import Carrito from './components/Carrito/Carrito.vue'
Vue.component(Carrito)

import Root from './components/Root/Root.vue'
Vue.component(Root)


const routes = [
  { path: '/', component: Inicio, name: 'Inicio' },
  { path: '/Login', component: Login, name:'Login' },
  { path: '/Registrar', component: Registrar, name:'Registrar' },
  { path: '/Carrito', component: Carrito, name:'Carrito' },
  { path: '/Root', component: Root, name:'Root'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

