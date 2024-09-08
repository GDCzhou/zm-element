import { vLoading } from "./directive";
import { Loading } from "./service";

import type { App } from "vue";

export const ZLoading = {
  name:'ZLoading',
  install(app: App) {
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default ZLoading;

export {
  vLoading,
  vLoading as ZLoadingDirective,
  Loading as ZLoadingService,
};

export * from "./types";
