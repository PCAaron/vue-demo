// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入公共样式
import './assets/common/flexible'
import './assets/common/reset.css'
import './assets/iconfont/iconfont.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

//将axios挂载到vue对象的原型下
Vue.prototype.axios=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
