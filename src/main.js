import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false
Vue.use(VueFire)

// Firebase Config
firebase.initializeApp({
  apiKey: "AIzaSyCbhJUP15DcQLoE9E_ekFgQjJT9RLwSCzM",
    authDomain: "laxislist.firebaseapp.com",
    databaseURL: "https://laxislist.firebaseio.com",
    projectId: "laxislist",
    storageBucket: "laxislist.appspot.com",
    messagingSenderId: "339938237754"
})
export const db = firebase.firestore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
