import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import store from "@/store/index";

import "element-plus/dist/index.css";

const app = createApp(App);
setupRouter(app);
app.use(store).mount("#app");
