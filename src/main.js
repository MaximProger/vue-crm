import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyAs3ywA3EYJ7KN4aD_LYNJCg6TaHJjMWx4',
  authDomain: 'vue-crm-a1159.firebaseapp.com',
  databaseURL: 'https://vue-crm-a1159.firebaseio.com',
  projectId: 'vue-crm-a1159',
  storageBucket: 'vue-crm-a1159.appspot.com',
  messagingSenderId: '538181649179',
  appId: '1:538181649179:web:2296c98c69cbf8c08509be'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
