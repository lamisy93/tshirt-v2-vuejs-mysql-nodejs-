<template>
<div>
    <h1>Mes produits</h1>
        <div class="card" v-for="(val, prop) in produits" :key="prop" @click="selectProduit(val)"> 
        <span>{{val.name}}</span>
        <img :src="getImgSrc(val.url_img)">
        <span>{{val.price}}€</span>
    </div>
    <h1>Ajouter une marque</h1>
    <label for="nomMarque">Name: </label>
    <input v-model="nameM" name="nomMarque" type="text" placeholder="name">
    <button v-on:click="postMarque">Valider</button>
    <br>
    <h1>Ajouter un produit</h1>
    <label for="nomProduit">Name: </label>
    <input v-model="name" name="nomProduit" type="text" placeholder="name">
    <label for="price">Price: </label>
    <input v-model="price" name="price" type="number" placeholder="price">
    <label for="id">Id_marque: </label>
    <input v-model="id_brand" name="id" type="number" placeholder="id">
    <!-- <uploader :mimes="['image/jpeg', 'image/jpg', 'image/png', 'image/svg']" :multiple="true"></uploader> -->
    <button v-on:click="postProduits">Valider</button>
    <button @click="updateProduit">Update</button>
    <h1>Supprimer un produit</h1>
    <button @click="deleteProduit">Supprimer</button>
</div>
    
</template>

<script>
import axios from "axios";
// import uploader from "@/components/uploader.vue"
// import Products from "@/components/Products.vue"
import { mapState } from 'vuex'

export default {
  name: 'admin',
  components: {
    // uploader,
    // Products
  },
       data() {
        return {
            nameM: "",
            name: "",
            price: "",
            id_brand: "",
            val: "",
            id: "",
            // name: this.$store.state.name, 
            // price: this.$store.state.price,  
            // id_brand: this.$store.state.id_brand, 
        }
    },

    computed: mapState([
        'produits'
        ]),

    created() {
        this.$ebus.$on("val", payload =>
        {
            this.val = payload;
            console.log(("id", this.val));
        })
    },

    mounted() {
      this.$store.dispatch('AfficheTshirts')
    //   console.log(this.name);
    //   console.log(this.price);
    //   console.log(this.id_brand);
    },

    methods: {
        getImgSrc (url) {
           if (url) return require("../assets/" + url);
        },
             
     selectProduit(val) {
       console.log("produit cliqué ", val);
       window.alert(val.name + " selectionné")
       this.$ebus.$emit("val", val);
     },
        
        postProduits() {
              console.log("ça post");
              var objet = {};
              objet.name= this.name;
              objet.price= this.price;
              objet.id_brand= this.id_brand;
              console.log(objet);
              if (this.val == "") 
              {alert("Produit non ajouté : veuillez renseigner les champs manquants.")}
              else {
              axios.post("http://localhost:5000/api/tshirts/admin/products/add", objet)
              .then( function(res) {
                  console.log(res)
              })
              .then(document.location.reload(true))
              }
          },

          postMarque() {
              console.log("ça post");
              let nameM = this.nameM;
              console.log(nameM);
              if (this.val == "") 
              {alert("Marque non ajoutée : veuillez renseigner les champs manquants.")}
              else {
              axios.post("http://localhost:5000/api/tshirts/addBrand", {value: nameM})
              .then( function(res) {
                  console.log(res)
              })
              .then(document.location.reload(true))
              }
           },


          deleteProduit(){
              if(this.val==""){
                  alert("veuillez selectionner un produit")
              }
              else if (window.confirm("supprimer le produit " + this.val.name)) {
                  axios.delete("http://localhost:5000/api/tshirts/displayTshirts", {
                      data: {idproduit: this.val.id}
                  })
                  .then(response => {
                      console.log("id:", response.data);
                  })
                  .then(function(){
                      window.alert("Produit supprimé")
                  })
                  .then(function(){
                      document.location.reload(true);
                  })
              }
          },

          
          updateProduit(){
              console.log(objet);
              var objet = {};
              objet.name= this.name;
              objet.price= this.price;
              objet.id_brand= this.id_brand;
              objet.id= this.val.id;
              if(this.val==""){
                  alert("veuillez selectionner un produit")
              }
              else if (window.confirm("modifier le produit " + this.val.name)) {
                  console.log("on y est")
                  axios.patch("http://localhost:5000/api/admin/products/edit", {
                      data: {objet}
                  })
                  .then(response => {
                      console.log("id:", response.data);
                  })
                  .then(function(){
                      window.alert("Produit modifié")
                  })
                  .then(function(){
                      document.location.reload(true);
                  })
              }
          }

        // postProduits() {
        //     this.$store.dispatch('PostTshirts')
        // }
    },

}
</script>


<style scoped>
  
  div.card{
    border: 1px solid black;
    width: 200px;
    height: 200px;
    display: inline-block;
    margin: 5px;
    padding-top: 15px
  }

  img{
      width: 150px;
      height: 150px;
  }

</style>