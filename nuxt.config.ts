// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: true,
  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "vuetify-nuxt-module",
    "nuxt-headlessui",
    "@nuxtjs/leaflet",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  vuetify: {},
  headlessui: {
    prefix: "Headless",
  },
  // axios: {
  //   baseURL: 'https://api.example.com',

  // },
});
