<template>
<div class="contador">
  <span> {{contador}} </span>
  <button @click="add"> + </button>
  <button @click="remove"> - </button>
</div>
  
</template>
<script>
export default {
  data() {
    return{
      contador: 0
    }
  },

  methods: {
    add(){
      this.contador++
    },
    remove(){
      this.contador--
    },
  }
}
</script>


<style scoped>
  .contador span {
    border-bottom: 1px solid black;
  }

  .contador button {
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-color: coral;
    outline: none;
  }
</style>