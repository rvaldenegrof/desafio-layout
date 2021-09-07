import Vue from 'vue'
import App from './App.vue'
//import Vuetify from 'vuetify' 
//import 'vuetify/dist/vuetify.min.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
//Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
