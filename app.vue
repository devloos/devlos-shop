<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: 'Devlos Shop',
  description: 'Shop unique and interesting tech at Devlos Shop',
  ogUrl: runtimeConfig.public.baseUrl,
  ogType: 'website',
  ogTitle: 'Devlos Shop',
  ogDescription: 'Shop unique and interesting tech at Devlos Shop',
  ogImage: '/assets/meta-logo.png',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterSite: runtimeConfig.public.baseUrl,
  twitterTitle: 'Devlos Shop',
  twitterDescription: 'Shop unique and interesting tech at Devlos Shop',
  twitterImage: '/assets/meta-logo.png',
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: runtimeConfig.public.baseUrl },
    { rel: 'apple-touch-icon', href: '/assets/logo-512.png' },
  ],
  script: [
    {
      src: 'https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js',
      type: 'module',
    },
  ],
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage
        class="page py-[var(--header-height)]"
        :transition="{
          name: 'slide-up',
          mode: 'out-in',
        }"
      />
    </NuxtLayout>
  </UApp>
</template>

<style>
.page {
  min-height: calc(100svh - var(--footer-height));
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
