// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'jquery'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false

const vuetifyOptions = { }

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify: new Vuetify(vuetifyOptions),
  template: '<App/>',
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
})
