import App from './app.vue'
import Home from './index.vue'
import Login from './login.vue'
import Register from './register.vue'
import Center from './center.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/center', component: Center}
]
const router = new VueRouter({
  routes: routes
})
router.push('/')

new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
