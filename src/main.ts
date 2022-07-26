import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import mitt from "mitt";
import Card from "./components/Card/index.vue";

const Mitt = mitt(); // instantiate

const app = createApp(App);

declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt;
  }
}

app.config.globalProperties.$Bus = Mitt;

app.component("Card", Card).mount("#app");

// createApp(App).mount("#app");
