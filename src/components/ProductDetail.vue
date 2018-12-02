<template>

<div>
    <p>{{ this.$route.params.name }}</p>
    <p>{{ this.$route.params.price }}€</p>
    <img :src="getImgSrc(this.$route.params.img)">
    <!-- <button @click="del()">Supprimer le produit</button> -->
</div>
    
</template>

<script>
import axios from 'axios'
export default {  

  methods: {
    getImgSrc (url) {
          return url ? require("../assets/" + url) : "";
    },

    // del() {
    //   let params = this.$route.params;
    //   console.log(this.$route.params.id);
    //   axios.delete("http://localhost:5000/api/tshirts/displayTshirts", {
    //     method: 'DELETE',
    //       mode: 'no-cors',
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //       },
    //       data: {productid: params.id}
    //   })
    //   .then(response => {
    //       console.log("id:", response.data);
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //     } else if (error.request) {
    //     console.log(error.request);
    //     } else {
    //     console.log('Error', error.message);
    //     }
    //     console.log(error.config);
    //   });
    // }
}

}

</script>


<style>

</style>

