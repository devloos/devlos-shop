<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: 'Devlos Shop',
  description: 'Shop unique and interesting tech at Devlos Shop',
  ogTitle: 'Devlos Shop',
  ogDescription: 'Shop unique and interesting tech at Devlos Shop',
  ogImage: '/assets/logo-512.png',
  ogType: 'website',
  ogUrl: runtimeConfig.public.host,
  ogLocale: 'en_US',
  twitterTitle: 'Devlos Shop',
  twitterDescription: 'Shop unique and interesting tech at Devlos Shop',
  twitterImage: '/assets/logo-512.png',
  twitterCard: 'summary',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: runtimeConfig.public.host },
    { rel: 'apple-touch-icon', href: '/assets/logo-512.png' },
  ],
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
