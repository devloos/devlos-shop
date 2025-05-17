<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light';
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :class="$attrs.class"
      :icon="isDark ? 'svgs:moon' : 'svgs:sun'"
      color="neutral"
      variant="ghost"
      size="xl"
      @click="isDark = !isDark"
    />
  </ClientOnly>
</template>
