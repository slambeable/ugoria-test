import Vue from 'vue';
import App from './App.vue';
import XlsxPlugin from './plugins/xlsx';

Vue.config.productionTip = false;

Vue.use(XlsxPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
