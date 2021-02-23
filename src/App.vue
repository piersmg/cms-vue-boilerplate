<template>
  <div>
    <h1>Mews Marketplace</h1>
    <p>
      <router-link :to="{ name: 'integration', params: { id: 'foo' } }"
        >Foo</router-link
      >
      <router-link :to="{ name: 'integration', params: { id: '123' } }"
        >123</router-link
      >
      <router-link :to="{ name: 'home' }">Home</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Integration from '@/components/Integration.vue';

export default {
  name: 'App',
  props: ['moduleData'],
  data: function() {
    return {
      // sprocketLogo,
      // vueLogo,
    };
  },
  created: function() {
    // eslint-disable-next-line no-console
    console.log(
      'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
      this.moduleData,
    );
  },
  components: {
    Integration,
  },
};
</script>

<style lang="scss">
// .cms-vue-boilerplate-container {
//   text-align: center;
//   background-color: #282c34;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
//   padding: 1rem 0 1rem 0;
// }

// .spinning-logo__container {
//   flex-direction: row;
// }
</style>
