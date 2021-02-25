<template>
  <div class="container">
    <h2 class="h4">Categories</h2>
    <div class="categories-wrapper flex-container flex-dir-column">
      <ul class="marketplace-categories">
        <li v-for="(category, index) in categories" :key="index">
          <a @click="goToCategory(category)">
            {{ category | splitCapitals }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'CategoriesList',
  data() {
    return {
      categories: null,
    };
  },
  filters: {
    splitCapitals: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.match(/[A-Z][a-z]+/g).join(' ');
    },
  },
  methods: {
    goToCategory(name) {
      let url = name
        .match(/[A-Z][a-z]+/g)
        .join('-')
        .toLowerCase();
      router.push({
        name: 'category',
        params: { slug: url, id: name },
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
        let integrations = res.data.IntegrationData;
        let catArr = [];
        for (i = 0, l = integrations.length; i < l; i++) {
          let cat = integrations[i].Classification;
          if (catArr.indexOf(cat) === -1) {
            catArr.push(cat);
          }
        }
        this.categories = catArr;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
.marketplace-categories li a {
  text-decoration: none;
}
</style>
