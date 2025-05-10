<script setup lang="ts">
useSeoMeta({
  title: 'Devlos Shop',
  description: 'Shop unique and interesting tech at Devlos Shop',
  ogTitle: 'Devlos Shop',
  ogDescription: 'Shop unique and interesting tech at Devlos Shop',
  ogImage: '/assets/logo.png',
  ogType: 'website',
  ogUrl: 'https://devlos-shop.vercel.app',
  twitterTitle: 'Devlos Shop',
  twitterDescription: 'Shop unique and interesting tech at Devlos Shop',
  twitterImage: '/assets/logo.png',
  twitterCard: 'summary',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
