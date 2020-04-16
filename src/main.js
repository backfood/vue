import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component("vue-button",{
  data:()=>{
  return {}
  },
  template:"<button>按钮</button>"
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
