<script lang="ts">
if (import.meta.server) {
  useSeoMeta({
    title: "Devlos Shop",
    ogTitle: "Devlos Shop",
    description: "Shop unique and interesting tech at Devlos Shop",
    ogDescription: "Shop unique and interesting tech at Devlos Shop",
    ogImage: "/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Devlos Shop",
    twitterDescription: "Shop unique and interesting tech at Devlos Shop",
  });
}
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
