import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/fonts',
    '@tresjs/nuxt',
  ],
  colorMode: {
    fallback: 'dark',
  },
  fonts: {
    families: [{ name: 'DM Sans', provider: 'google', weights: [400, 500, 600, 700] }],
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: ['/account(/*)?'],
      exclude: [],
      saveRedirectToCookie: true,
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'svgs',
        dir: './app/assets/svgs',
      },
    ],
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/tplos',
    },
  },
});
