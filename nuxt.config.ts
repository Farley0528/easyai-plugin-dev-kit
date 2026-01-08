// https://nuxt.com/docs/api/configuration/nuxt-config
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";
import { join } from "path";
import { promises as fs } from "fs";
import { createInjectClassPlugin } from "./build/vite-plugins/injectClassPlugin";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  app:{
    baseURL: "/plugins/"
  },
  imports: {
    dirs: ["composables", "composables/**"],
  },
  modules: [
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "~/modules/generate-manifest",
    '@ant-design-vue/nuxt',
  ],
  ssr: false,
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      "postcss-prefix-selector": {
        prefix: ".remote-ui", // 远程组件根 class
        transform(prefix: string, selector: string, prefixedSelector: string) {
          // 保留全局基础样式
          if (selector.startsWith("html") || selector.startsWith("body")) {
            return selector;
          }
          // 生产环境去掉 theme-* 类
          if (process.env.NODE_ENV === "production") {
            if (
              selector.startsWith(".bg-theme-") ||
              selector.startsWith(".text-theme-") ||
              selector.startsWith(".border-theme-")
            ) {
              return ""; // 删除该选择器
            }
          }

          //reset，不要加前缀
          const resetTags = [
            "button",
            "input",
            "select",
            "textarea",
            "fieldset",
            "legend",
            "progress",
            "optgroup",
            "option",
            "label",
            "output",
            "meter"
          ];
          if (resetTags.some(tag => selector.includes(tag))) {
            return selector
          }

          return prefixedSelector;
        },
      },
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  vite: {
    $client: {
      base: process.env.NODE_ENV === "production" ? "/" : undefined,
    },
    plugins: [
      topLevelAwait({
        promiseExportName: "__tla",
        promiseImportName: (i) => `__tla_${i}`,
      }),
      createInjectClassPlugin("remote-ui"),
    ],
    build: {
      lib: {
        entry: "",
        name: "RemoteUI",
        fileName: "remote-ui-kit",
        formats: ["es"],
      },
    },
  },

  hooks: {
    "vite:extendConfig": async (config, { isClient }) => {
      if (!isClient) return;

      // 动态导入 manifest，dev/build 都安全
      let manifest;
      try {
        // Nuxt buildDir 是 .nuxt
        const manifestPath = join(process.cwd(), "public/generated/manifest.js");

        // 检查文件是否存在
        await fs.access(manifestPath);

        // 动态导入
        manifest = await import(manifestPath);
      } catch (err) {
        console.warn("manifest not found yet, using empty fallback.");
        manifest = {
          manifestInfo: { remoteEntry: "remoteEntry.js" },
          exposes: {},
        };
      }

      const components = manifest.manifestInfo?.components || [];

      const exposes = components.map((c: { name: string; path: string }) => {
        return { [c.name]: c.path } as const;
      });

      config.plugins = config.plugins || [];
      config.plugins.push(
        federation({
          name: "dynamic-remote",
          filename: manifest.manifestInfo?.remoteEntry || "remoteEntry.js",
          exposes: exposes || {},
          shared: { vue: { generate: false } },
        }),
      );
    },
  },

  routeRules: {
    "/_nuxt/**": {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    },
  },
  icon: {
    serverBundle: {
      collections: [
        "ant-design",
        "carbon",
        "duo-icons",
        "fluent",
        "healthicons",
        "hugeicons",
        "icon-park",
        "line-md",
        "lsicon",
        "lucide",
        "material-symbols",
        "material-symbols-light",
        "mdi",
        "mingcute",
        "ph",
        "ri",
        "si",
        "solar",
        "stash",
        "streamline-plump",
        "tabler",
        "uil",
        "ic",
        "akar-icons",
      ], // 本地打包的内容
      // remote: 'jsdelivr' // 'unpkg' or 'github-raw', or a custom function
    },
    localApiEndpoint: "/icon/_nuxt_icon",
  },
});
