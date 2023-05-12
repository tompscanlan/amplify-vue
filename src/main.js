import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import Home from './HomeSection.vue'
import PageNotFound from './PageNotFound.vue'
import About from './components/AboutThis.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },

    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes, // short for `routes: routes`
})

const app = createApp(App)
app.config.globalProperties.console = console
app.use(router)
app.mount('#app')