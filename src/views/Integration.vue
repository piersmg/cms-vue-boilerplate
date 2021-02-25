<template>
  <div>
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="integration" class="content">
      <h2 class="h3">{{ integration.Name }}</h2>
      <p>{{ integration.Description }}</p>
      <p>{{ integration.Classification }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'integration',
  props: ['id'],
  components: {},
  data() {
    return {
      loading: false,
      integration: null,
      error: null,
    };
  },
  computed: {},
  methods: {},
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
          if (item.Id === this.id) {
            this.integration = item;
          }
        }
      });
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  },
};
</script>
