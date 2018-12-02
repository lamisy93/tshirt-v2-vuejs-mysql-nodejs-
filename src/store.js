import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(Vuex)
Vue.use(VueAxios, axios);

export default new Vuex.Store({

  state: {
    produits: [],
    // name: "Tshirt 2018", 
    // price: 32,  
    // id_brand: 2, 
  },

  mutations: {

    getTshirts(state, produits) {
      state.produits = produits;
    },

    // addProduit(state, name, price, id_brand) {
    //   state.name = name;
    //   state.price = price;
    //   state.id_brand = id_brand;
    // }

  },
  
  actions: {
      AfficheTshirts ({ commit }) {
        axios.get('http://localhost:5000/api/tshirts/displayTshirts',{
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },}) 
          .then(res => res.data)
          .then(produits => {
          commit('getTshirts', produits)
          // console.log(produits)
          })
         .catch(function (error) {
          // handle error
          console.log(error);
        })
      },
      
      }
})
