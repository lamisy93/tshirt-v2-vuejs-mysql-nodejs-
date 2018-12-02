import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$ebus = new Vue();
Vue.prototype.$backEndURL = "http://localhost:5000/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
