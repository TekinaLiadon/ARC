// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
  ],
  imports: {
    dirs: ["01-app/global-composables"],
  },
  css: ["@/06-shared/assets/css/main.css"],
  dir: {
    pages: "02-pages",
    layouts: "01-app/layouts",
    assets: "06-shared/assets",
  },
  runtimeConfig: {
    public: {
      castUrl: process.env.NUXT_PUBLIC_CAST_URL,
    },
  },
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "127.0.0.1",
        clientPort: 3000,
        port: 3000,
      },
    },
  },
  devServer: {
    host: "127.0.0.1",
    url: "http://127.0.0.1:3000",
  },
  icon: {
    mode: "svg",
    customCollections: [
      {
        prefix: "rpg",
        dir: "./app/06-shared/assets/icons",
      },
    ],
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
        file: "../../app/01-app/locales/en.json",
      },
      {
        code: "ru",
        name: "Russian",
        file: "../../app/01-app/locales/ru.json",
      },
    ],
  },
  fonts: {
    families: [
      {
        name: "Montserrat Alternates",
        provider: "google",
        fallbacks: ["system-ui"],
      },
    ],
  },
  ui: {
    colorMode: {
      preference: "dark",
      fallback: "dark",
    },
  },
});
