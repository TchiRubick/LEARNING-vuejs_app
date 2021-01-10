<template>
  <v-app class="app">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    // no data
  }),
};
</script>

<style>
  .app {
    background: linear-gradient(90deg, #138496 , #0069D9) !important;
  }
</style>
