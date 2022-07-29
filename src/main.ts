import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import mitt from "mitt";
import Card from "./components/Card/index.vue";
import Loading from "@/components/Loading";
const Mitt = mitt(); // instantiate

const app = createApp(App);

type Filter = {
  format: <T>(str: T) => string;
};
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt;
    $Filters: Filter;
    $loading: {
      show: () => void;
      hide: () => void;
    };
  }
}

app.config.globalProperties.$Bus = Mitt;

app.config.globalProperties.$Filters = {
  copyright<T>(str: T): string {
    return `FlynnChao @ ${str}`;
  },
};

app.use(Loading);

app.component("Card", Card).mount("#app");

// createApp(App).mount("#app");
