/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard').default },
    { path: '/users', component: require('./components/Users').default },
    { path: '/profile', component: require('./components/Profile').default }
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history"
})





Vue.component('example-component', require('./components/ExampleComponent'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});