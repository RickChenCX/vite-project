import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";
import "./assets/main.css";
import "./index.css";

console.log(import.meta.env);

const app = createApp(App);
// use pinia
setupStore(app);

app.use(router);

app.mount("#app");
