<template>
  <div>
      <button @click="reset">Reset filters</button>
      <hr>
      <h2>Prix max</h2>
      <input type="range" min="10" max="40" v-model="limit" @change="ranger">
      <p>{{limit}}€</p>
      <hr>
      <h2>Brands</h2>
      <input class="inputcheck" type="checkbox" v-model="brand" name="label" value="obey" @click="brands($event)">
      <label for="obey">Obey</label>
      <input class="inputcheck" type="checkbox" v-model="brand" name="label" value="lacoste" @click="brands($event)">
      <label for="lacoste">Lacoste</label>
      <input class="inputcheck" type="checkbox" v-model="brand" name="label" value="fila" @click="brands($event)">
      <label for="fils">Fila</label>
      <input class="inputcheck" type="checkbox" v-model="brand" name="label" value="puma" @click="brands($event)">
      <label for="puma">Puma</label>
      <input class="inputcheck" type="checkbox" v-model="brand" name="label" value="vans" @click="brands($event)">
      <label for="vans">Vans</label>
      <hr>
      <h2>backgrounds</h2>
      <input type="button" class="backgrounds" id="violet" v-bind:value="color"  @click="colori($event)">
      <input type="button" class="backgrounds" id="black" v-bind:value="color" @click="colori($event)">
      <input type="button" class="backgrounds" id="white" v-bind:value="color" @click="colori($event)">
      <input type="button" class="backgrounds" id="red" v-bind:value="color" @click="colori($event)">
      <input type="button" class="backgrounds" id="blue" v-bind:value="color" @click="colori($event)">
  </div>
    
</template>

<script>

// Vue.filter('filtre', function (objects, key) {
//         return objects.map(function(object) { 
//         return object[key];
//     });
// });

export default {  
    // ebus: ['produits'],
    props: ['produits'],


    data() {
            return {
                limit: 40,
                search: [], 
                brand: [],
                color: []
            }
    },

      methods: {
        reset() {
         document.location.reload(true)
        },

        // filters() {
        // return 
        //    this.$emit('liaison', {
        //       prix: this.limit,
        //       marque: this.marque,
        //       color: this.color,
        //     });
        //     console.log(prix);
        // },

        ranger(){
            this.$ebus.$emit("ranger", this.limit)
        },

        colori(evt){
            console.log(evt.target.id);
            this.$ebus.$emit("colori", evt.target.id)
        },
        brands(evt){
            console.log(evt.target.value);
            this.$ebus.$emit("brand", evt.target.value)
        }
    }
}
</script>

<style scoped>

  button{
    margin-top: 10px;
    background: white;
    outline: none
  }

  input.backgrounds{
      width: 30px;
      height: 30px;
      border: 1px solid black;
      display: inline-block;
      margin-right: 5px;
      outline: none
  }

  input#violet{
      background:rgb(110, 9, 48)
  }
  input#black{
      background: black
  }
  input#white{
      background:white
  }
  input#red{
      background: red
  }
  input#blue{
      background: blue
  }

</style>

