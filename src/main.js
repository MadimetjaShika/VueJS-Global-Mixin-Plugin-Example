// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import plugins from '@/plugins/index';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(plugins);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
