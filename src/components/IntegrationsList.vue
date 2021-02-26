<template>
  <div class="container">
    <h2 v-if="!category" class="h4" :load="log(this.currentCategory)">All integrations</h2>
    <div v-if="loading" class="loading" :load="log(this.loading)">
      <p>Loading...</p>
    </div>
    <div v-if="integrations" class="integrations-wrapper flex-container">
      <div class="content-item" v-for="integration in integrations" :key="integration.Id">
        <a @click="goToIntegration(integration.Name, integration.Id)">
          <div class="img-wrapper mb-10">
            <div class="img-background">
              <img
                src="https://www.mews.com/hubfs/Mews_Systems_July2019/Images/Atomize-new.png"
                alt="logo"
              />
            </div>
          </div>
          <h3 class="h4 mb-0">{{ integration.Name }}</h3>
          <p class="caption">{{ integration.Classification | splitCapitals }}</p>
          <p></p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'IntegrationsList',
  props: {
    category: String,
  },
  data() {
    return {
      loading: false,
      integrations: null,
      currentCategory: null,
    };
  },
  watch: {
    $route(to, from) {
      this.getIntegrations(to.params.titleId);
    },
  },
  filters: {
    splitCapitals: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.match(/[A-Z][a-z]+/g).join(' ');
    },
  },
  methods: {
    goToIntegration(name, id) {
      name = name.replace(/\W+/g, '-').toLowerCase();
      router.push({
        name: 'integration',
        params: { slug: name, id: id },
      });
    },
    log(item) {
      console.log('Integrations List: ' + item);
    },
    getIntegrations(category) {
      this.loading = true;
      this.integrations = null;
      try {
        axios({
          method: 'post',
          url: 'https://www.mews.li/api/general/v1/integrationData/getAll',
          data: {
            Client: 'MewsWebsite',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => {
          let integrations = res.data.IntegrationData.slice(0, 100);
          let intArr = [];
          for (i = 0, l = integrations.length; i < l; i++) {
            let item = integrations[i];
            if (item.Kind === 'External') {
              if (category) {
                if (item.Classification === category) {
                  intArr.push(item);
                }
              } else {
                intArr.push(item);
              }
            }
          }
          intArr.sort((a, b) => (a.Name > b.Name ? 1 : -1));
          this.integrations = intArr;
        });
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
  created: function() {
    // console.log('IntegrationsList category: ' + this.category);
    this.getIntegrations();
  },
};
</script>

<style lang="scss" scoped>
.integrations-wrapper {
  flex-flow: row wrap;
}
</style>
