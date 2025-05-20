<script setup lang="ts">
import { MouseParallax } from '@tresjs/cientos';

const LIGHT_BG_COLOR = '#F1F2F4';
const DARK_BG_COLOR = '#0B0B0B';

const { isDark } = useTheme();

const clearColor = computed(() => (isDark.value ? DARK_BG_COLOR : LIGHT_BG_COLOR));
</script>

<template>
  <TresCanvas :clear-color="clearColor">
    <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
    <MouseParallax :factor="-0.7" local />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
