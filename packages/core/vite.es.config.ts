import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'zm-element',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        // "async-validator"
        // "@popperjs/core"
      ],
      output: {
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

