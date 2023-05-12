import { createApp } from 'vue'
// import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
// import Home from './HomeSection.vue'
// import PageNotFound from './PageNotFound.vue'
// import About from './components/AboutThis.vue'

// Amplify setup boilerplate
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },

//     { path: '/:pathMatch(.*)', name: 'bad-not-found', component: PageNotFound },
// ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes: routes, // short for `routes: routes`
// })

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

createApp(App).mount('#app')
// app.use(router)
// app.mount('#app')
