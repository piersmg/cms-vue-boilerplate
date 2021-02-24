<!-- <template>
//   <div class="cms-vue-boilerplate-card">
//     <p>
//       {{ reasonsText }}
//     </p>
//     <button class="btn" v-on:click="increaseClickCount">
//       Click me!
//     </button>
//   </div>
// </template> -->
<template>
  <div class="integration">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="integration" class="content">
      <h2 class="h3">{{ integration.Name }}</h2>
      <p>{{ integration.Description }}</p>
    </div>
  </div>
</template>
<script>
const capitalize = value => {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export default {
  name: 'Integration',
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      const fetchedId = this.$route.params.uuid;
      // replace `getPost` with your data fetching util / API wrapper
      getIntegration(fetchedId, (err, integration) => {
        // make sure this request is the last one we did, discard otherwise
        if (this.$route.params.uuid !== fetchedId) return;
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.integration = integration;
        }
      });
    },
  },
  // data: function() {
  //   return {
  //     //  reasonsCount: this.initialClickCount,
  //   };
  // },
  // computed: {
  //   integration() {
  //     return `${route.params.id | capitalize }`;
  //   },
  // },
  // methods: {
  //   increaseClickCount() {
  //     this.reasonsCount += 1;
  //   },
  // },
};
</script>

<style lang="scss">
// .cms-vue-boilerplate-card {
//   max-width: 500px;
//   margin-bottom: 40px;
//   padding: 0.5em 1em;
//   background-color: rgba(255, 255, 255, 0.1);
//   border-radius: 6px;
//   .btn {
//     border: 1px solid #ff7a59;
//     background-color: #ff7a59;
//     border-radius: 3px;
//     color: #ffffff;
//     font-size: 1rem;
//     padding: 11px 24px;
//     text-align: center;
//     user-select: none;
//     transition: all 0.15s ease-out;
//     display: inline-block;
//     max-width: 100%;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     vertical-align: middle;
//     white-space: nowrap;
//     &:hover {
//       background-color: #ff8f73;
//       border-color: #ff8f73;
//       color: #ffffff;
//       cursor: pointer;
//     }
//   }
// }
</style>
