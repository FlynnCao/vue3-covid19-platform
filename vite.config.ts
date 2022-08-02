import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueJSX from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Unocss from "unocss/vite";
import { presetIcons, presetAttributify, presetUno } from "unocss";
const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueJSX(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
    }),
    Unocss({
      presets: [presetIcons(), presetAttributify(), presetUno()],
      rules: [
        ["flex", { display: "flex" }],
        ["red", { color: "red" }],
        ["bgblue", { background: "blue" }],
        ["bo1", { border: "1px solid black" }],
        ["wr200", { width: "200px" }],
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
      ],
      shortcuts: {
        pbtn: "bgblue red bo1 wr200",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": pathResolve("./src"),
    },
  },
});
