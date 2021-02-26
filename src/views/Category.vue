<template>
  <section class="pt-0" style="width: 100%;">
    <div class="flex-container justify-center">
      <div class="column small-12 medium-4 large-3" id="filter-slide">
        <CategoriesList :cat="titleId" />
      </div>
      <div class="column small-12 medium-8 large-8 large-offset-1">
        <!-- <div v-if="loading" class="loading">
          Loading...
        </div>
        <div v-if="error" class="error">
          {{ error }}
        </div>-->
        <div>
          <h2 class="h4">{{ titleId | splitCapitals }}</h2>
          <IntegrationsList :category="titleId" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios';
import router from '@/router';
import IntegrationsList from '@/components/IntegrationsList';
import CategoriesList from '@/components/CategoriesList';

export default {
  name: 'category',
  props: {
    titleId: String,
  },
  data() {
    return {};
  },
  filters: {
    splitCapitals: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.match(/[A-Z][a-z]+/g).join(' ');
    },
  },
  components: {
    IntegrationsList,
    CategoriesList,
  },
};
</script>
