<script setup>
import { ref } from 'vue';
import axios from "axios";

let products = ref({});

axios.get("products")
    .then((response) => {
        debugger;
        //this.products = response.data;
    })
    .catch((error) => {
        console.warn(error);
    });
</script>
<template>
    
</template>
  
 <style scoped>
</style>