import { createApp } from "vue";
import "./assets/main.css";
import "./index.css";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";

console.log(import.meta.env);

const app = createApp(App);
// use pinia
setupStore(app);

app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(router);

app.mount("#app");
