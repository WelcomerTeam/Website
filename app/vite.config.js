import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import analyze from 'rollup-plugin-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     plugins: [analyze()],
  //   },
  // },
  plugins: [vue()],
});
