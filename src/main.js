import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/index.scss';

// import ErrorBoundary from './components/ErrorBoundary';

Vue.config.productionTip = false;

const targetModulesData = document.querySelectorAll(
  '.cms-vue-boilerplate > script[type="application/json"]',
);

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

targetModulesData.forEach(({ dataset, textContent }) => {
  return new Vue({
    router,
    store,
    data: {
      integrationsList: [
        {
          name: 'foo',
          id: 1,
        },
        {
          name: 'bar',
          id: 2,
        },
        {
          name: 'yut',
          id: 3,
        },
      ],
    },
    methods: {
      // getDynamicRoutes(url) {
      //   postData('https://www.mews.li/api/general/v1/integrationData/getAll', {
      //     Client: 'MewsWebsite',
      //   })
      //     .then(data => {
      //       var objArr = data.IntegrationData;
      //       objArr.forEach(this.createAndAppendRoute);
      //     })
      //     .catch(err => console.log(err));
      // },
      // createAndAppendRoute: data => {
      //   let path = data.Name.replace(/\W+/g, '-').toLowerCase();
      //   let external = false;
      //   data.Kind === 'External' ? (external = true) : false;
      //   if (external === true) {
      //     let newRoute = {
      //       uuid: data.Id,
      //       name: `${data.Name}`,
      //       path: `/${path}`,
      //       component: Integration,
      //     };
      //     router.addRoute(newRoute);
      //   }
      // },
    },
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
    // created() {
    //   this.getDynamicRoutes(
    //     'https://www.mews.li/api/general/v1/integrationData/getAll',
    //   );
    // },
  }).$mount(`#App--${dataset.moduleInstance}`);
});
