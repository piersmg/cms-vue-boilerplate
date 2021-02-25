<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <h2 class="h3">{{ id | splitCapitals }}</h2>
    <div v-if="category" class="content"></div>
  </div>
</template>
<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'category',
  props: ['id'],
  data() {
    return {
      loading: false,
      category: null,
      error: null,
    };
  },
  filters: {
    splitCapitals: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.match(/[A-Z][a-z]+/g).join(' ');
    },
  },
  created: function() {
    this.loading = true;
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
        let integrations = res.data.IntegrationData;
        for (i = 0, l = integrations.length; i < l; i++) {
          let item = integrations[i];
          if (item.Classification === this.id) {
            // this.category = item;
          }
        }
      });
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  },
  components: {},
};
</script>
