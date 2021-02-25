<template>
  <h1>{{ slug }}</h1>
</template>
<script>
import router from '@/router';

export default {
  name: 'category',
  props: ['slug'],
  data() {
    return {
      loading: false,
      category: null,
      error: null,
    };
  },
  components: {},
};
</script>
