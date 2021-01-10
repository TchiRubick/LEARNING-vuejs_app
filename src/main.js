import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import SideMenuLayout from "./layouts/SideMenuLayout";
import Spinner from "./common/components/common.spinner";
import Snackbar from "./common/components/common.snackbar";

Vue.config.productionTip = false;

Vue.component('SideMenuLayout', SideMenuLayout);
Vue.component('Spinner', Spinner);
Vue.component('Snackbar', Snackbar);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
