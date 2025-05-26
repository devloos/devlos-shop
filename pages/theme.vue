<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const page = ref(5);
const items1 = ref([
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
  'neutral',
]);

const items2 = ref<BreadcrumbItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-house',
  },
  {
    label: 'Components',
    icon: 'i-lucide-box',
    to: '/',
  },
]);

const color = ref<
  'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
>('primary');
</script>

<template>
  <div class="container mx-auto p-2">
    <div
      class="mb-5 grid grid-cols-1 items-center justify-center justify-items-center gap-4 border p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <UAlert
        title="Heads up!"
        description="You can change the primary color in your app config."
        icon="svgs:moon"
        :color="color"
      />
      <UButton :color="color">Button</UButton>
      <UCalendar :color="color" />
      <UCheckbox :color="color" />
      <AppForm :color="color" />
      <UPagination v-model:page="page" :total="100" :color="color" />
      <USelect v-model="color" :items="items1" class="w-48" :color="color" />
      <USwitch :color="color" />
      <UBreadcrumb :items="items2" :color="color" />
    </div>
    <AppTable :color="color" />
    <NuxtImg src="/devlos-shop/luffy-0.png" alt="image" width="1800" placeholder />
  </div>
</template>

<style></style>
