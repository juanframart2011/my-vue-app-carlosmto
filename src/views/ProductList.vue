<template>
    
  </template>

<script>
    
  import axios from "axios";
  export default {
    name: "ProductListView",
    props: ['dato'],
    components: {},
    data() {
      return {
        proucts: []
      };
    },
    methods: {
        _getProducts(){
            
            axios.get("products")
            .then((response) => {
              //this.proucts = response.data;
            })
            .catch((error) => {
              console.warn(error);
            });
        }
    },
    mounted(){
        this._getProducts();
    }
  };
</script>
  
 <style scoped>
</style>