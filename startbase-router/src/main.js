import Vue from 'vue'
import VueRoutes from 'vue-router'
Vue.use(VueRoutes)
import App from './App.vue'

const routes = [
    {path: './data/:type'}
]

new Vue({
    el: '#app',
    render: h => h(App)
})