<template>
   <div>
    <h2 class="title">{{message}}</h2>
    <button @click="buttonClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>  
</template>

<script> 
import Cpn from './Cpn.vue'
export default {
  name: "App",  
  components: {
    Cpn
  },  
  data() {
    return{
      message : 'hello webpack !',
      name: 'spring cloud alibaba'
    }
   
  },
  methods: {
    buttonClick(){

    }
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>