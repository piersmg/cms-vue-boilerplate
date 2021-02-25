import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Integration from './views/Integration.vue';
import Category from './views/Category.vue';

Vue.use(Router);

// Define some routes
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'category',
    path: '/category/:slug',
    component: Category,
    props: true,
  },
  {
    name: 'integration',
    path: '/integration/:slug',
    component: Integration,
    props: true,
  },
];

export default new Router({
  mode: 'history',
  base: window.base_href,
  routes,
});
