import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: null,
    integration: null,
  },
  mutations: {
    clearIntegration(state) {
      state.integration = null;
    },
    setIntegration(state, id) {
      state.integration = id;
      console.log(id);
    },
  },
  actions: {
    getIntegration({ commit }, integrationId) {
      commit('clearIntegration');
      axios({
        method: 'post',
        url: 'https://www.mews.li/api/general/v1/integrationData/getAll',
        data: {
          Client: 'MewsWebsite',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          console.log(res, integrationId);
          if (res.data.Id === integrationId) {
            commit('setIntegration', res.data.Id);
          }
        })
        .catch(error => console.log(error));
    },
  },
  getters: {},
});
