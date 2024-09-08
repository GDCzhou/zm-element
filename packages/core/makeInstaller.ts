import type { App, Plugin } from "vue";
import { each } from "lodash-es";
import {
  provideGlobalConfig,
  type ConfigProviderProps,
} from "@zm-element/components";

export default function makeInstaller(components: Plugin[]) {
  const install = (app: App, options?: ConfigProviderProps) => {

    each(components, (c) => {
      app.use(c);
    });

    if (options) provideGlobalConfig(options, app, true);
  };

  return install;
}
