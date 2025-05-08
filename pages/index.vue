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
    to: '/components',
  },
  {
    label: 'Breadcrumb',
    icon: 'i-lucide-link',
    to: '/components/breadcrumb',
  },
]);

const color = ref<
  'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
>('primary');
</script>

<template>
  <div class="p-10">
    <ThemeButton />
    <AppAlert>This is an auto-imported component</AppAlert>
    <div
      class="grid grid-cols-4 gap-4 justify-center items-center justify-items-center p-8 border mb-5"
    >
      <UAlert
        title="Heads up!"
        description="You can change the primary color in your app config."
        icon="i-lucide-terminal"
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
  </div>
</template>
