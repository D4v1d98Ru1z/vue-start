import Vue from 'vue'
import VueRoutes from 'vue-router'
Vue.use(VueRoutes)
import App from './App.vue'
import Data from './components/Data.vue'

const routes = [
    {path: '/data/:type', component: Data}
]

const router = new VueRoutes({routes})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})