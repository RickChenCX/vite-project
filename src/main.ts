import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";
import "./assets/main.css";
import "./index.css";
import '@/assets/icon/index.js'
import SvgIcon from '@/components/SvgIcon/index.vue'

console.log(import.meta.env);

const app = createApp(App);
// use pinia
setupStore(app);

app.use(router);
app.component('SvgIcon', SvgIcon)

app.mount("#app");
