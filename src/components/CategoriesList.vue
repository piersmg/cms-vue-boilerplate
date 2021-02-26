<template>
  <div class="container">
    <h2 class="h4">Categories</h2>
    <div class="categories-wrapper flex-container flex-dir-column" :load="log(cat)">
      <ul class="marketplace-categories">
        <a>
          <li @click="goToHome()" :class="{ 'cat-active' : cat === undefined }">All integrations</li>
        </a>
        <a v-for="(category, index) in categories" :key="index">
          <li
            @click="goToCategory(category)"
            :class="{ 'cat-active' : category == cat }"
          >{{ category | splitCapitals }}</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: 'CategoriesList',
  props: {
    cat: String,
  },
  data() {
    return {
      categories: null,
      currentCategory: null,
    };
  },
  watch: {
    $route(to, from) {
      this.currentCategory = to.params.titleId;
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
    goToCategory(name) {
      let url = name
        .match(/[A-Z][a-z]+/g)
        .join('-')
        .toLowerCase();
      router.push({
        name: 'category',
        params: { slug: url, titleId: name },
      });
    },
    goToHome() {
      router.push({
        name: 'home',
      });
    },
    log(item) {
      console.log('Categories List: ' + item);
    },
  },
  created: function() {
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
        let catArr = [];
        for (i = 0, l = integrations.length; i < l; i++) {
          let cat = integrations[i].Classification;
          if (catArr.indexOf(cat) === -1) {
            catArr.push(cat);
          }
        }
        catArr.sort();
        this.categories = catArr;
      });
    } catch (err) {
      console.log(err);
      this.error = err;
    }
  },
};
</script>

<style lang="scss" scoped>
.marketplace-categories li a {
  text-decoration: none;
}
</style>
