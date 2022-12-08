import { fileURLToPath, URL } from "node:url";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入 global.scss 这样就可以在全局中使用 global.scss中预定义的变量了
          // 给导入的路径最后加上 ;
          additionalData: `@use "@/assets/styles/global.scss" as *;`,
        },
      },
    },
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
