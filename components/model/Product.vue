<script setup lang="ts">
import { GLTFModel } from '@tresjs/cientos';
import type { Vector3 } from 'three';

const props = defineProps<{
  path: string;
  position: Vector3 | [x: number, y: number, z: number];
  scale: Vector3 | [x: number, y: number, z: number] | number;
  speed: number;
  minY: number;
  maxY: number;
}>();

const refItem = shallowRef();

const direction = ref(1);

const { onBeforeRender } = useLoop();

onBeforeRender(({ delta }) => {
  if (!refItem.value) {
    return;
  }

  refItem.value.rotation.y += delta;

  refItem.value.position.y += direction.value * delta * props.speed;

  if (refItem.value.position.y >= props.maxY) {
    refItem.value.position.y = props.maxY;
    direction.value = -1;
  }

  if (refItem.value.position.y <= props.minY) {
    refItem.value.position.y = props.minY;
    direction.value = 1;
  }
});
</script>

<template>
  <Suspense>
    <TresMesh
      ref="refItem"
      :position="position"
      :scale="scale"
      @click="navigateTo('/privacy')"
    >
      <GLTFModel :path="path" cast-shadow />
    </TresMesh>
  </Suspense>
</template>
