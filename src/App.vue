<template>
  <div id="app">
    <NavPage />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<script>

import NavPage from './components/NavPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    NavPage,
    FooterPage,
  }
}
</script>

<style lang="scss">

</style>
