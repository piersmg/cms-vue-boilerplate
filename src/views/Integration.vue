<template>
  <div>
    <h1>Integration</h1>
    <p>{{ integration }}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'integration',
  components: {},
  data() {
    return {
      id: '',
    };
  },
  computed: {
    ...mapState(['integration']),
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch('getIntegration', this.$route.params.uuid);
    });
  },
  methods: {
    getIntegration(id) {
      this.$store.dispatch('getIntegration', id);
    },
    // ...mapActions([
    //   // 'increment' = map `this.increment()` to `this.$store.dispatch('increment')`
    //   // `mapActions` also supports payloads:
    //   'mapGetIntegration', // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    // ]),
  },
};
</script>
