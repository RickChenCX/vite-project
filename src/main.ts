import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
console.log(import.meta.env);

const app = createApp(App);

app.use(router);

app.mount("#app");
