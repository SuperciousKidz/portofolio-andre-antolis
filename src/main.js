import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Home from "./components/Home"
import About from "./components/About"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

Vue.use(VueScrollFixedNavbar);
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: Home },
  {path: '/home', component: Home},
  {path: '/about', component: About}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
