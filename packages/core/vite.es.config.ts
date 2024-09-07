import { defineConfig } from 'vite'

import { resolve } from 'path'
import { readdirSync, readdir } from 'fs';
import { filter, map, includes, delay, defer } from "lodash-es";
import shell from 'shelljs'

import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import terser from '@rollup/plugin-terser' // minify js

import hooks from './hooksPlugin'


const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

console.log(getDirectoriesSync('../components'));

const TRY_MOVE_STYLES_DELAY = 750 as const;

function moveStyles() {
  readdir('./dist/es/theme', err => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY)
    defer(() => shell.mv('./dist/es/theme', './dist'))
  })
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types'
    }),

    hooks({
      rmFiles: ['./dist/es', './dist/types', './dist/theme'],
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
          "@TEST": JSON.stringify(isTest),
        },
      },
      format: {
        semicolons: false, // 是否保留分号
        shorthand: isProd, // 是否简写Boolean属性
        braces: !isProd, // 是否保留大括号
        beautify: !isProd, // 是否格式化代码
        comments: !isProd, // 是否保留注释
      },
      // 
      mangle: {
        toplevel: isProd, // 是否混淆顶级变量
        eval: isProd, // 是否混淆eval
        keep_classnames: isDev,
        keep_fnames: isDev,
      },
    }),
  ],
  build: {
    outDir: 'dist/es',
    cssCodeSplit: true,
    minify: false, //混淆
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'Zmelement',
      fileName: 'index',
      formats: ['es'],

    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "async-validator",
        "@popperjs/core"
      ],
      output: {
        assetFileNames(chunkInfo) {
          console.log(chunkInfo.name, chunkInfo.type)
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          if (chunkInfo.type === 'asset' && (chunkInfo.name as string).endsWith('.css')) {
            return 'theme/[name].[ext]'
          }
          return chunkInfo.name as string
        },
        // 手动分包
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (id.includes('/packages/utils') || 
          // 修复icon style scope打包报错的问题
          id.includes('plugin-vue:export-helper')) {
            return 'utils'
          }
          console.log(id);
          // incorrect 
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) {
              return item;
            }
          }
        }
      }
    }
  }
})

