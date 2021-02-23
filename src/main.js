import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import '@/index.scss';
import Integration from '@/components/Integration.vue';

// import ErrorBoundary from './components/ErrorBoundary';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const targetModulesData = document.querySelectorAll(
  '.cms-vue-boilerplate > script[type="application/json"]',
);

const Home = {
  template: `<div>Home</div>`,
};

// Define some routes
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  // {
  //   name: 'category',
  //   path: '/:id',
  //   component: Category
  // },
  {
    name: 'integration',
    path: '/:id',
    component: Integration,
  },
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  base: window.base_href,
  mode: 'history',
  routes,
});

targetModulesData.forEach(({ dataset, textContent }) => {
  return new Vue({
    router,
    render: h =>
      h(App, {
        props: {
          portalId: dataset.portalId,
          moduleData: JSON.parse(textContent),
          moduleInstance: dataset.moduleInstance,
        },
      }),
    data: {
      portalId: dataset.portalId,
      moduleData: JSON.parse(textContent),
      moduleInstance: dataset.moduleInstance,
    },
  }).$mount(`#App--${dataset.moduleInstance}`);
});
