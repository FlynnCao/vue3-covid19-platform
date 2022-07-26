import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueJSX from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueJSX()],
  resolve: {
    alias: {
      "@": pathResolve("./src"),
    },
  },
});
