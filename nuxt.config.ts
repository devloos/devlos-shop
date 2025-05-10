import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Devlos Shop',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/icon', '@nuxt/image'],
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
