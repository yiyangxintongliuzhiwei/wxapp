import Vue from 'vue'
import store from './store/store.js'
import App from './app.vue'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
const app = new Vue(App)
app.$mount()