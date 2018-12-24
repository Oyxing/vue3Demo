import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data:{
    newvue : new Vue(),
  },
  render: h => h(App)
}).$mount('#app')
