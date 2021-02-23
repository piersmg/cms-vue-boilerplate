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
  <div class="user">
    <h1>The Integration Component</h1>
    <p>{{ $route.params.id | capitalize }}</p>
    <p>{{ integration }}</p>
    <hr />
    <div class="row">
      <!--       <div>
        <app-user-edit></app-user-edit>
      </div>
      <div>
        <app-user-detail></app-user-detail>
      </div> -->
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
  data: function() {
    return {
      //  reasonsCount: this.initialClickCount,
    };
  },
  // computed: {
  //   integration() {
  //     return `There are ${
  //       this.reasonsCount > 0
  //         ? pluralize(this.reasonsCount, 'reason', 's')
  //         : 'so many reasons'
  //     } to use HubSpot CMS + Vue!`;
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
