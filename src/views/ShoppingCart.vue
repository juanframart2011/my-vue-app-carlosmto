<script setup>
import { ref } from 'vue';
import axios from "axios";
defineProps({
    proucts: [],
})
function _getProducts(){
            
    axios.get("products")
    .then((response) => {
        //this.proucts = response.data;
    })
    .catch((error) => {
        console.warn(error);
    });
}
</script>
<template>
    
</template>
  
 <style scoped>
</style>