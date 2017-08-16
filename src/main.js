import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'
import Castlist from './Castlist.vue'
import Booking from './Booking.vue'
import Events from './Events.vue'
import Policies from './Policies.vue'
import Contact from './Contact.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = { template: '<h1>foo</h1>' }
const Bar = { template: '<div>bar</div>' }
const Test = { template: '<h2>Test</h2>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/castlist', component: Castlist },
  { path: '/booking', component: Booking },
  { path: '/yearplanner', component: Events },
  { path: '/policies', component: Policies },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router
})



