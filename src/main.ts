import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import './plugins/VueJsonp.js'

Vue.config.productionTip = false
// 引入组件
import PackTable from "./components/Table.vue"

// 定义 Loading 对象
const PackTables={
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install:function(Vue:any){
        Vue.component('PackTables',PackTable)
    }
}

Vue.use(PackTables)

new Vue({
  router,
  store,
  // data:{
  //   newvue : new Vue(),
  // },
  render: h => h(App)
}).$mount('#app')
