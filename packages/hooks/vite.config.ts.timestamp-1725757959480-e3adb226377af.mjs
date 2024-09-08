// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///E:/xuexi/zm-element/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.2/node_modules/vite/dist/node/index.js";
import { last, split, first, includes } from "file:///E:/xuexi/zm-element/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import { hooksPlugin as hooks } from "file:///E:/xuexi/zm-element/libs/vite-plugins/.dist/index.js";
import dts from "file:///E:/xuexi/zm-element/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.2_typescript@5.4.5_vite@5.3.1/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\xuexi\\zm-element\\packages\\hooks";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      include: ["./**/*.ts"],
      exclude: ["./vite.config.ts"]
    }),
    hooks({
      rmFiles: ["./dist"]
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "hooks",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue", "lodash-es", "vue3-i18n"],
      output: {
        manualChunks(id) {
          if (includes(id, "/packages/hooks/use"))
            return first(split(last(split(id, "/")), "."));
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx4dWV4aVxcXFx6bS1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGhvb2tzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx4dWV4aVxcXFx6bS1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGhvb2tzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi94dWV4aS96bS1lbGVtZW50L3BhY2thZ2VzL2hvb2tzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgbGFzdCwgc3BsaXQsIGZpcnN0LCBpbmNsdWRlcyB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7IGhvb2tzUGx1Z2luIGFzIGhvb2tzIH0gZnJvbSBcIkB6bS1lbGVtZW50L3ZpdGUtcGx1Z2luc1wiO1xuXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbXCIuLyoqLyoudHNcIl0sXG4gICAgICBleGNsdWRlOiBbXCIuL3ZpdGUuY29uZmlnLnRzXCJdLFxuICAgIH0pLFxuICAgIGhvb2tzKHtcbiAgICAgIHJtRmlsZXM6IFtcIi4vZGlzdFwiXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcImhvb2tzXCIsXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1widnVlXCIsIFwibG9kYXNoLWVzXCIsIFwidnVlMy1pMThuXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmIChpbmNsdWRlcyhpZCwgXCIvcGFja2FnZXMvaG9va3MvdXNlXCIpKVxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0KHNwbGl0KGxhc3Qoc3BsaXQoaWQsIFwiL1wiKSksIFwiLlwiKSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxlQUFlO0FBQzFULFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsTUFBTSxPQUFPLE9BQU8sZ0JBQWdCO0FBQzdDLFNBQVMsZUFBZSxhQUFhO0FBRXJDLE9BQU8sU0FBUztBQUxoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsV0FBVztBQUFBLE1BQ3JCLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxJQUM5QixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixTQUFTLENBQUMsUUFBUTtBQUFBLElBQ3BCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxPQUFPLGFBQWEsV0FBVztBQUFBLE1BQzFDLFFBQVE7QUFBQSxRQUNOLGFBQWEsSUFBSTtBQUNmLGNBQUksU0FBUyxJQUFJLHFCQUFxQjtBQUNwQyxtQkFBTyxNQUFNLE1BQU0sS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQUEsUUFDakQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
