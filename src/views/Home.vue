<template>
  <section class="pt-0">
    <div class="flex-container justify-center">
      <div class="column small-12 medium-4 large-3" id="filter-slide">
        <CategoriesList />
      </div>
      <div class="column small-12 medium-8 large-8 large-offset-1">
        <IntegrationsList />
      </div>
    </div>
  </section>
</template>
<script>
import IntegrationsList from '@/components/IntegrationsList';
import CategoriesList from '@/components/CategoriesList';
export default {
  name: 'home',
  components: {
    IntegrationsList,
    CategoriesList,
  },
};
</script>
