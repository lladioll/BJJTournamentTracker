import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {},
	router
 })

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
