import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import analyze from "rollup-plugin-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     plugins: [analyze()],
  //   },
  // },
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:1000/api",
        rewrite: (path) => path.replace(/^\/api/, ""),
        changeOrigin: true,
      },
      "/(login|logout|callback)": {
        target: "http://localhost:1000",
        changeOrigin: true,
      },
    },
  },
});
