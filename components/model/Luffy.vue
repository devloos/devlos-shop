<script setup lang="ts">
import { GLTFModel } from '@tresjs/cientos';
</script>

<template>
  <Suspense>
    <TresMesh :position="[0, 0, 0]">
      <GLTFModel path="/models/luffy.glb" />
    </TresMesh>
  </Suspense>
</template>
