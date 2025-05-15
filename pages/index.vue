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
  {
    label: 'Breadcrumb',
    icon: 'i-lucide-link',
    to: '/',
  },
]);

const color = ref<
  'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
>('primary');

const supabase = useSupabaseClient();
const { data } = await supabase.from('ping').select().limit(1);

const message = ref(data?.[0]?.message || 'oops error');

onMounted(() => {
  // Code here runs after the component is mounted
  console.log('Component is mounted!');
});

const toast = useToast();

const user = useSupabaseUser();

async function handleAuth() {
  if (!user.value) {
    navigateTo('/login');
    return;
  }

  const { error } = await supabase.auth.signOut({ scope: 'local' });

  if (error) {
    toast.add({ description: error.message, color: 'error' });
    return;
  }

  navigateTo('/');
}
</script>

<template>
  <div class="p-10">
    <NuxtLink to="/privacy" class="underline mb-5 inline-block">Privacy Policy</NuxtLink>

    <div class="flex justify-between items-center">
      <Icon class="me-3 text-7xl" name="svgs:logo" />
      <ThemeButton />
      <AppAlert>{{ message }}</AppAlert>
      <ClientOnly>
        <div class="flex gap-3 items-center">
          <NuxtLink v-if="!user" to="/signup">Sign Up</NuxtLink>
          <UButton type="button" @click.prevent="handleAuth">
            {{ user ? 'Log Out' : 'Login' }}
          </UButton>
        </div>
      </ClientOnly>
    </div>
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
    <NuxtImg src="/devlos-shop/luffy-0.png" alt="image" width="1800" placeholder />
  </div>
</template>
