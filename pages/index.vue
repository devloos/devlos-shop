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

onMounted(() => {
  // Code here runs after the component is mounted
  console.log('Component is mounted!');
});
</script>

<template>
  <div class="md:mt-8">
    <div class="relative h-svh">
      <div class="pointer-events-none absolute inset-x-0 z-10 text-center">
        <h1
          class="mx-auto max-w-[42rem] px-2 text-center text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl"
        >
          Discover new tech designed to elevate your everyday.
        </h1>

        <div
          class="flex flex-wrap justify-center gap-4 pt-8 pb-10 text-sm sm:gap-6 sm:text-base"
        >
          <p class="flex items-center gap-2">
            <Icon class="text-xl" name="svgs:fast-clock" />
            <span>Fast Shipping</span>
          </p>

          <p class="flex items-center gap-2">
            <Icon class="text-base" name="svgs:secure" />
            <span>Secure Checkout</span>
          </p>

          <p class="flex items-center gap-2">
            <Icon class="text-xl" name="svgs:diamond" />
            <span>Tech-Tested Quality</span>
          </p>
        </div>

        <div class="group pointer-events-auto relative mx-auto max-w-42">
          <!-- TODO: GLOW -->
          <!-- <div
            class="bg-primary absolute inset-0 rounded opacity-0 blur-lg transition-all duration-200 group-hover:inset-4 group-hover:opacity-100"
          /> -->

          <UButton
            class="animate-border hover:bg-primary"
            size="xl"
            color="primary"
            block
          >
            <span class="z-1">Shop Now</span>
          </UButton>
        </div>
      </div>
      <ClientOnly>
        <spline-viewer
          class="hero-shadow"
          url="https://prod.spline.design/1XZCQKFsNR86LmL6/scene.splinecode"
        />
      </ClientOnly>
    </div>
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
  </div>
</template>

<style scoped lang="css">
h1 {
  font-family: Manrope sans-serif;
}

.hero-shadow::before,
.hero-shadow::after {
  height: calc(100svh - 60%);
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
}

.hero-shadow::before {
  top: 0;
  background: linear-gradient(180deg, var(--color-base-100), transparent);
}

.hero-shadow::after {
  bottom: 0;
  background: linear-gradient(0deg, var(--color-base-100), transparent);
}

.animate-border {
  position: relative;
  overflow: hidden;
}

.animate-border::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 1;
  width: 100%;
  background: conic-gradient(transparent 270deg, var(--color-base-100), transparent);
  animation: rotate 3s linear infinite;
}

.animate-border::after {
  content: '';
  background: inherit;
  border-radius: inherit;
  position: absolute;
  inset: 2px;
  height: calc(100% - 2 * 2px);
  width: calc(100% - 2 * 2px);
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
  }

  to {
    transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
  }
}
</style>
