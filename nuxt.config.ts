import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  icon: {
    customCollections: [
      {
        prefix: 'svgs',
        dir: './assets/svgs',
      },
    ],
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/tplos',
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});