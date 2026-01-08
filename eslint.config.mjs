import nuxtConfig from "@nuxtjs/eslint-config";

export default [
  nuxtConfig, // 直接包含继承的配置对象
  {
    languageOptions: {
      globals: {
        defineNuxtConfig: "readonly",
      },
    },
  },
];
