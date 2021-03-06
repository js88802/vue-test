import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios安装
import axios from 'axios';
Vue.prototype.$http=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
