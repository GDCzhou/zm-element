// vite.es.config.ts
import { defineConfig } from "file:///E:/xuexi/zm-element/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.2/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import { readdirSync, readdir } from "fs";
import { filter, map, includes, delay, defer } from "file:///E:/xuexi/zm-element/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import shell2 from "file:///E:/xuexi/zm-element/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
import dts from "file:///E:/xuexi/zm-element/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.2_typescript@5.4.5_vite@5.3.1/node_modules/vite-plugin-dts/dist/index.mjs";
import vue from "file:///E:/xuexi/zm-element/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_vue@3.4.28/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import terser from "file:///E:/xuexi/zm-element/node_modules/.pnpm/@rollup+plugin-terser@0.4.4/node_modules/@rollup/plugin-terser/dist/es/index.js";

// hooksPlugin.ts
import { each, isFunction } from "file:///E:/xuexi/zm-element/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import shell from "file:///E:/xuexi/zm-element/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
function customHooksPlugin({
  rmFiles = [],
  afterBuild,
  beforeBuild
}) {
  return {
    name: "customHooksPlugin",
    buildStart() {
      each(rmFiles, (fname) => shell.rm("-rf", fname));
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err) {
      !err && isFunction(afterBuild) && afterBuild();
    }
  };
}

// vite.es.config.ts
var __vite_injected_original_dirname = "E:\\xuexi\\zm-element\\packages\\core";
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var isTest = process.env.NODE_ENV === "test";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
console.log(getDirectoriesSync("../components"));
var TRY_MOVE_STYLES_DELAY = 750;
function moveStyles() {
  readdir("./dist/es/theme", (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell2.mv("./dist/es/theme", "./dist"));
  });
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }),
    customHooksPlugin({
      rmFiles: ["./dist/es", "./dist/types", "./dist/theme"],
      afterBuild: moveStyles
    }),
    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ["log"],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest)
        }
      },
      format: {
        semicolons: false,
        // 是否保留分号
        shorthand: isProd,
        // 是否简写Boolean属性
        braces: !isProd,
        // 是否保留大括号
        beautify: !isProd,
        // 是否格式化代码
        comments: !isProd
        // 是否保留注释
      },
      // 
      mangle: {
        toplevel: isProd,
        // 是否混淆顶级变量
        eval: isProd,
        // 是否混淆eval
        keep_classnames: isDev,
        keep_fnames: isDev
      }
    })
  ],
  build: {
    outDir: "dist/es",
    cssCodeSplit: true,
    minify: false,
    //混淆
    lib: {
      entry: resolve(__vite_injected_original_dirname, "index.ts"),
      name: "Zmelement",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "async-validator",
        "@popperjs/core"
      ],
      output: {
        assetFileNames(chunkInfo) {
          console.log(chunkInfo.name, chunkInfo.type);
          if (chunkInfo.name === "style.css") {
            return "index.css";
          }
          if (chunkInfo.type === "asset" && chunkInfo.name.endsWith(".css")) {
            return "theme/[name].[ext]";
          }
          return chunkInfo.name;
        },
        // 手动分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils") || // 修复icon style scope打包报错的问题
          id.includes("plugin-vue:export-helper")) {
            return "utils";
          }
          console.log(id);
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) {
              return item;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiLCAiaG9va3NQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx4dWV4aVxcXFx6bS1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHh1ZXhpXFxcXHptLWVsZW1lbnRcXFxccGFja2FnZXNcXFxcY29yZVxcXFx2aXRlLmVzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRToveHVleGkvem0tZWxlbWVudC9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcblxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyByZWFkZGlyU3luYywgcmVhZGRpciB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBpbmNsdWRlcywgZGVsYXksIGRlZmVyIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHNoZWxsIGZyb20gJ3NoZWxsanMnXG5cbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdGVyc2VyIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXRlcnNlcicgLy8gbWluaWZ5IGpzXG5cbmltcG9ydCBob29rcyBmcm9tICcuL2hvb2tzUGx1Z2luJ1xuXG5cbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbmNvbnN0IGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCdcblxuZnVuY3Rpb24gZ2V0RGlyZWN0b3JpZXNTeW5jKGJhc2VQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgZW50cmllcyA9IHJlYWRkaXJTeW5jKGJhc2VQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG5cbiAgcmV0dXJuIG1hcChcbiAgICBmaWx0ZXIoZW50cmllcywgKGVudHJ5KSA9PiBlbnRyeS5pc0RpcmVjdG9yeSgpKSxcbiAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcbiAgKTtcbn1cblxuY29uc29sZS5sb2coZ2V0RGlyZWN0b3JpZXNTeW5jKCcuLi9jb21wb25lbnRzJykpO1xuXG5jb25zdCBUUllfTU9WRV9TVFlMRVNfREVMQVkgPSA3NTAgYXMgY29uc3Q7XG5cbmZ1bmN0aW9uIG1vdmVTdHlsZXMoKSB7XG4gIHJlYWRkaXIoJy4vZGlzdC9lcy90aGVtZScsIGVyciA9PiB7XG4gICAgaWYgKGVycikgcmV0dXJuIGRlbGF5KG1vdmVTdHlsZXMsIFRSWV9NT1ZFX1NUWUxFU19ERUxBWSlcbiAgICBkZWZlcigoKSA9PiBzaGVsbC5tdignLi9kaXN0L2VzL3RoZW1lJywgJy4vZGlzdCcpKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZHRzKHtcbiAgICAgIHRzY29uZmlnUGF0aDogJy4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb24nLFxuICAgICAgb3V0RGlyOiAnZGlzdC90eXBlcydcbiAgICB9KSxcblxuICAgIGhvb2tzKHtcbiAgICAgIHJtRmlsZXM6IFsnLi9kaXN0L2VzJywgJy4vZGlzdC90eXBlcycsICcuL2Rpc3QvdGhlbWUnXSxcbiAgICAgIGFmdGVyQnVpbGQ6IG1vdmVTdHlsZXNcbiAgICB9KSxcbiAgICB0ZXJzZXIoe1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgc2VxdWVuY2VzOiBpc1Byb2QsXG4gICAgICAgIGFyZ3VtZW50czogaXNQcm9kLFxuICAgICAgICBkcm9wX2NvbnNvbGU6IGlzUHJvZCAmJiBbXCJsb2dcIl0sXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IGlzUHJvZCxcbiAgICAgICAgcGFzc2VzOiBpc1Byb2QgPyA0IDogMSxcbiAgICAgICAgZ2xvYmFsX2RlZnM6IHtcbiAgICAgICAgICBcIkBERVZcIjogSlNPTi5zdHJpbmdpZnkoaXNEZXYpLFxuICAgICAgICAgIFwiQFBST0RcIjogSlNPTi5zdHJpbmdpZnkoaXNQcm9kKSxcbiAgICAgICAgICBcIkBURVNUXCI6IEpTT04uc3RyaW5naWZ5KGlzVGVzdCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHNlbWljb2xvbnM6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTRGRERcdTc1NTlcdTUyMDZcdTUzRjdcbiAgICAgICAgc2hvcnRoYW5kOiBpc1Byb2QsIC8vIFx1NjYyRlx1NTQyNlx1N0I4MFx1NTE5OUJvb2xlYW5cdTVDNUVcdTYwMjdcbiAgICAgICAgYnJhY2VzOiAhaXNQcm9kLCAvLyBcdTY2MkZcdTU0MjZcdTRGRERcdTc1NTlcdTU5MjdcdTYyRUNcdTUzRjdcbiAgICAgICAgYmVhdXRpZnk6ICFpc1Byb2QsIC8vIFx1NjYyRlx1NTQyNlx1NjgzQ1x1NUYwRlx1NTMxNlx1NEVFM1x1NzgwMVxuICAgICAgICBjb21tZW50czogIWlzUHJvZCwgLy8gXHU2NjJGXHU1NDI2XHU0RkREXHU3NTU5XHU2Q0U4XHU5MUNBXG4gICAgICB9LFxuICAgICAgLy8gXG4gICAgICBtYW5nbGU6IHtcbiAgICAgICAgdG9wbGV2ZWw6IGlzUHJvZCwgLy8gXHU2NjJGXHU1NDI2XHU2REY3XHU2REM2XHU5ODc2XHU3RUE3XHU1M0Q4XHU5MUNGXG4gICAgICAgIGV2YWw6IGlzUHJvZCwgLy8gXHU2NjJGXHU1NDI2XHU2REY3XHU2REM2ZXZhbFxuICAgICAgICBrZWVwX2NsYXNzbmFtZXM6IGlzRGV2LFxuICAgICAgICBrZWVwX2ZuYW1lczogaXNEZXYsXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2Rpc3QvZXMnLFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBtaW5pZnk6IGZhbHNlLCAvL1x1NkRGN1x1NkRDNlxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdabWVsZW1lbnQnLFxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXG5cbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIsXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZVwiLFxuICAgICAgICBcImFzeW5jLXZhbGlkYXRvclwiLFxuICAgICAgICBcIkBwb3BwZXJqcy9jb3JlXCJcbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXMoY2h1bmtJbmZvKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2h1bmtJbmZvLm5hbWUsIGNodW5rSW5mby50eXBlKVxuICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHtcbiAgICAgICAgICAgIHJldHVybiAnaW5kZXguY3NzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2h1bmtJbmZvLnR5cGUgPT09ICdhc3NldCcgJiYgKGNodW5rSW5mby5uYW1lIGFzIHN0cmluZykuZW5kc1dpdGgoJy5jc3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd0aGVtZS9bbmFtZV0uW2V4dF0nXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaHVua0luZm8ubmFtZSBhcyBzdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgLy8gXHU2MjRCXHU1MkE4XHU1MjA2XHU1MzA1XG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy9ob29rcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2hvb2tzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy91dGlscycpIHx8IFxuICAgICAgICAgIC8vIFx1NEZFRVx1NTkwRGljb24gc3R5bGUgc2NvcGVcdTYyNTNcdTUzMDVcdTYyQTVcdTk1MTlcdTc2ODRcdTk1RUVcdTk4OThcbiAgICAgICAgICBpZC5pbmNsdWRlcygncGx1Z2luLXZ1ZTpleHBvcnQtaGVscGVyJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndXRpbHMnXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICBcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZ2V0RGlyZWN0b3JpZXNTeW5jKFwiLi4vY29tcG9uZW50c1wiKSkge1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCBgL3BhY2thZ2VzL2NvbXBvbmVudHMvJHtpdGVtfWApKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcblxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx4dWV4aVxcXFx6bS1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHh1ZXhpXFxcXHptLWVsZW1lbnRcXFxccGFja2FnZXNcXFxcY29yZVxcXFxob29rc1BsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRToveHVleGkvem0tZWxlbWVudC9wYWNrYWdlcy9jb3JlL2hvb2tzUGx1Z2luLnRzXCI7aW1wb3J0IHsgZWFjaCwgaXNGdW5jdGlvbiB9IGZyb20gJ2xvZGFzaC1lcydcbmltcG9ydCBzaGVsbCBmcm9tICdzaGVsbGpzJ1xuaW1wb3J0IHR5cGUgeyBQbHVnaW4gfSBmcm9tICd2aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXN0b21Ib29rc1BsdWdpbih7XG4gICAgcm1GaWxlcyA9IFtdLFxuICAgIGFmdGVyQnVpbGQsXG4gICAgYmVmb3JlQnVpbGQsXG59OntcbiAgYmVmb3JlQnVpbGQ/OiBGdW5jdGlvbjtcbiAgYWZ0ZXJCdWlsZD86IEZ1bmN0aW9uO1xuICBybUZpbGVzPzogc3RyaW5nW107XG59KTogUGx1Z2luIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnY3VzdG9tSG9va3NQbHVnaW4nLFxuICAgIGJ1aWxkU3RhcnQoKSB7XG4gICAgICBlYWNoKHJtRmlsZXMsIChmbmFtZSk9PiBzaGVsbC5ybSgnLXJmJywgZm5hbWUpKTtcbiAgICAgIGlzRnVuY3Rpb24oYmVmb3JlQnVpbGQpICYmIGJlZm9yZUJ1aWxkKCk7XG4gICAgfSxcbiAgICBidWlsZEVuZChlcnIpIHtcbiAgICAgICghZXJyKSAmJiBpc0Z1bmN0aW9uKGFmdGVyQnVpbGQpICYmIGFmdGVy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
