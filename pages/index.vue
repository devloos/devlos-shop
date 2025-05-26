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

        <div class="animate-border pointer-events-auto mx-auto max-w-42">
          <UButton
            class="hover:bg-primary-300 dark:hover:bg-primary-700 tracking-wide transition-all"
            size="xl"
            color="primary"
            block
          >
            Shop Now
          </UButton>
        </div>
      </div>

      <div class="canvas-shadow h-full">
        <ModelCanvas />
      </div>
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

.canvas-shadow::before,
.canvas-shadow::after {
  height: calc(100svh - 80%);
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
}

.canvas-shadow::before {
  top: 0;
  mask-image: linear-gradient(180deg, black 0%, transparent 100%);
  background: var(--color-base-100);
}

.canvas-shadow::after {
  bottom: 0;
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
  background: var(--color-base-100);
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.animate-border {
  position: relative;
}

.animate-border::after,
.animate-border::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: conic-gradient(
    from var(--angle),
    var(--color-base-100) 90%,
    var(--color-primary)
  );
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 1.35rem 5.35rem;
  border-radius: calc(var(--ui-radius) * 1.5);
  animation: 3s rotate linear infinite;
  transition: opacity 0.3s ease;
}

@keyframes rotate {
  from {
    --angle: 0deg;
  }

  to {
    --angle: 360deg;
  }
}
</style>
