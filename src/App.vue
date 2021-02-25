<template>
  <section>
    <div class="row small=row">
      <p>
        <router-link :to="{ name: 'category', params: { slug: 'accounting' } }"
          >Accounting</router-link
        >
        <router-link :to="{ name: 'home' }">Home</router-link>
      </p>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import router from '@/router';
export default {
  name: 'App',
  props: ['moduleData'],
  data: function() {
    return {
      transitionName: 'slide-left',
    };
  },
  created: function() {
    // eslint-disable-next-line no-console
    console.log(
      'all of your data typically accessed via the "module" keyword in HubL is available as JSON here!',
      this.moduleData,
    );
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
  components: {},
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
