import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { compression } from 'vite-plugin-compression2'
import {readFileSync} from 'fs'
import shell from 'shelljs'
import { delay } from 'lodash-es'

import hooks from './hooksPlugin'


const TRY_MOVE_STYLES_DELAY = 800

function moveStyles() {
  try {
    readFileSync('./dist/umd/index.css.gz')
    shell.cp('./dist/umd/index.css', './dist/index.css')
  } catch (error) {
    delay(moveStyles, TRY_MOVE_STYLES_DELAY)
  }
}
export default defineConfig({
  plugins: [
    vue(),
    compression({
      include: /.(cjs|css)$/i
    }),
    hooks({
      rmFiles: ['./dist/umd','./dist/index.css'],
      afterBuild: moveStyles
    })
  ],
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'Zmelement',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        exports: 'named',
        assetFileNames(chunkInfo) {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        },
      }
    }
  }
})

