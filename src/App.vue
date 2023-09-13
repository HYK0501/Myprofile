<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './views/nav.vue'
export default {
  name: 'App',
  components: {
    Nav,
  },
  methods: {
  },
}
</script>

<style>

</style>
