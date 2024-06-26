import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import Zmelement from "zm-element";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import "zm-element/dist/index.css";
import '@vitepress-demo-preview/component/dist/style.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(Zmelement);
  },
};
