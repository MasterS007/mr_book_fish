import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require("@/assets/css/main.scss");

library.add(fas, far);
createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(FontAwesomeIcon)
  .mount("#app");
