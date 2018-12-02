<template>
  <div class="home">
    <header>
      <HelloWorld msg="T-shirts Challenge"/>
    </header>
    <!-- <aside>
      <Filtre></Filtre>
    </aside> -->
    <main>
      <h1>Accedez aux fiches des produits</h1>
      <Products>
      </Products>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Filtre from '@/components/Filtre.vue'
import Products from '@/components/Products.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    // Filtre,
    Products
  },
       data() {
        return {
            search: [], 
            color: [],
            marque: [],
            // limit: 40,
        }
    },

    // created(){
    //   this.$ebus.$on("ranger", payload => {
    //       this.limit = payload
    //       console.log(this.limit);
    //   });
      //  this.$ebus.$on("colori", payload => {
      //     this.produits = this.produits.filter((val) => {
      //     return val.color.match(payload)
      //     console.log(payload)
      // });
      // console.log(this.color)
      // });
    //    this.$ebus.$on("brand", payload => {
    //       this.produits = this.produits.filter((val) => {
    //       return val.brand.match(payload)
    //       console.log(payload)
    //   });
    // });
// },

computed: mapState([
        'produits'
        ]),

}
</script>

<style lang="scss">
  header{
    position: fixed;
    width: 100%;
    height: 12%;
    top: 0;
    left: 0;
    background: rgb(228, 224, 224)
  }
  aside{
    float: left;
    border: 1px solid black;
    width: 28%;
    height: auto;
    margin-top: 10%;
    margin-left: 7%
  }
  main{
    float: right;
    width: 100%;
    height: auto;
    margin: auto;
    margin-top: 10%;
    // margin-right: 10%
  }
  footer{
    width: 100%;
    height: 10%;
  }
   
</style>

