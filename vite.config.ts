import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
type ViteProps = {
  mode: string;
};
export default ({ mode }: ViteProps) => {
  console.log(
    `当前环境为：${mode}, api地址为: ${
      loadEnv(mode, process.cwd()).VITE_BASE_API_URL
    }`
  );
  return defineConfig({
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      // 忽略后缀名的配置选项,vue不建议这样做，因为会影响IDE和类型支持
      //extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    plugins: [vue(), vueJsx()],
    server: {
      proxy: {
        "/api": {
          target: loadEnv(mode, process.cwd()).VITE_BASE_API_URL,
          ws: true,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  });
};
