import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from '../node_modules/moment'
import './assets/style/reset.css'


moment.locale('zh-cn');         // zh-cn

Vue.config.productionTip = false
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
