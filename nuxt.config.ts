// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  dir: {
    pages: "02-pages",
    layouts: "01-app/layouts"
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
    url: "http://127.0.0.1:3000"
  }
})