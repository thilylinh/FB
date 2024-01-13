import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createHead } from '@vueuse/head'
const head = createHead()

createApp(App)
  .use(head)
  .use(router)
  .mount("#app");
