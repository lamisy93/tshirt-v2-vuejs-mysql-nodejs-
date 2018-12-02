<template>
  <div> 
    <div class="card" v-for="(val, prop) in produits" :key="prop"> 
            <router-link :to="{
                    path: '/tshirt/:id',
                    name: 'tshirt',
                    params: {
                      id: val.id,
                      name: val.name,
                      price: val.price,
                      img: val.url_img,
                    }
                  }"
 >
        <span>{{val.name}}</span>
        <img :src="getImgSrc(val.url_img)">
        <span>{{val.price}}€</span>
        </router-link>
    </div>
  </div>
    
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
  },
       data() {
        return {
        // limit: 40,
        }
    },

    computed: mapState([
        'produits'
        ]),

    mounted () {
    this.$store.dispatch('AfficheTshirts')
  },

  methods: {
        getImgSrc (url) {
          if (url) return require("../assets/" + url);
    },
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

