import Vue from "vue";
import App from "./App.vue";
// vue router
import router from "./router";
// vue store
import store from "./store";
// bootstrap
import "bootstrap";
// font awesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThLarge,
  faThList,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faThLarge, faThList, faSearch);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
