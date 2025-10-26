import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  base:'/frameworks/keyed/vue-v2-7-composition/dist/',
  plugins: [vue()],
})
