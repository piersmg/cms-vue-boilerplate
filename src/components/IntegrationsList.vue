<template>
  <div class="container">
    <h2 class="h4">All integrations</h2>
    <div class="integrations-wrapper flex-container">
      <div
        class="content-item"
        v-for="integration in integrations"
        :key="integration.Id"
      >
        <a @click="goToIntegration(integration.Name, integration.Id)">
          <div class="img-wrapper mb-10">
            <div class="img-background">
              <img
                src="https://www.mews.com/hubfs/Mews_Systems_July2019/Images/Atomize-new.png"
                alt="logo"
              />
            </div>
          </div>
          <h3 class="h5 mb-0">{{ integration.Name }}</h3>

          <p class="caption">
            {{ integration.Classification }}
          </p>
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
  data() {
    return {
      integrations: null,
    };
  },
  filters: {
    // capitalize: function (value) {
    //   if (!value) return ''
    //   value = value.toString()
    //   return value.charAt(0).toUpperCase() + value.slice(1)
    // }
  },
  methods: {
    goToIntegration(name, id) {
      name = name.replace(/\W+/g, '-').toLowerCase();
      router.push({
        name: 'integration',
        params: { slug: name, id: id },
      });
    },
  },
  created: function() {
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
        let integrations = res.data.IntegrationData.slice(0, 20);
        let intArr = [];
        for (i = 0, l = integrations.length; i < l; i++) {
          let item = integrations[i];
          if (item.Kind === 'External') {
            intArr.push(item);
          }
        }
        this.integrations = intArr;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
.integrations-wrapper {
  flex-flow: row wrap;
}
</style>
