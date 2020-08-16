import Vue from 'vue'
import App from './App.vue'
// register component globally, everywhere can use this component

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
