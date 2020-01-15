import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import LeoButton from "@/components/LeoButton.vue";
Vue.component("leo-button", LeoButton);

Vue.config.productionTip = false;
Vue.prototype.xxx = (v: any) => console.log(v);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
