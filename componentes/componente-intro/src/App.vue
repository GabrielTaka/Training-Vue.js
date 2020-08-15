<template>
  <div id="app">
    <contadores/>
  </div>
</template>

<script>
  import contadores from './contadores.vue'
  export default {
    data() {
      return{
        copa: 0
      }
    },
    components: { contadores }
  }
</script>

<style scoped>
</style>