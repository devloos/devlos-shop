<script setup lang="ts">
import { MouseParallax, GLTFModel, OrbitControls } from '@tresjs/cientos';
import { TILE_GRID } from '~/assets/constants/tile-grid';
import { TREES } from '~/assets/constants/trees';

const LIGHT_BG_COLOR = '#F1F2F4';
const DARK_BG_COLOR = '#0B0B0B';

const { isDark } = useTheme();

const clearColor = computed(() => (isDark.value ? DARK_BG_COLOR : LIGHT_BG_COLOR));
</script>

<template>
  <TresCanvas :clear-color="clearColor" shadows>
    <TresPerspectiveCamera :position="[4, 3, 4]" :look-at="[0, 0, 0]" />
    <MouseParallax :factor="-0.7" :ease="2" local />
    <OrbitControls v-if="false" />

    <template v-for="(row, i) in TILE_GRID" :key="i">
      <Suspense v-for="(tile, index) in row" :key="index">
        <TresMesh :position="tile.position">
          <GLTFModel :path="tile.path" />
        </TresMesh>
      </Suspense>
    </template>

    <Suspense v-for="(tree, index) in TREES" :key="index">
      <TresMesh :position="tree.position">
        <GLTFModel :path="tree.path" />
      </TresMesh>
    </Suspense>

    <ModelLuffy />

    <ModelProduct
      path="/models/iphone.glb"
      :position="[-1.55, 0.1, 1.65]"
      :scale="4"
      :speed="0.05"
      :min-y="0.1"
      :max-y="0.2"
    />

    <ModelProduct
      path="/models/airpods.glb"
      :position="[1.65, 0, 1.65]"
      :scale="0.033"
      :speed="0.05"
      :min-y="0.3"
      :max-y="0.4"
    />

    <ModelProduct
      path="/models/computer.glb"
      :position="[0.75, 0, -2.25]"
      :scale="0.1"
      :speed="0.05"
      :min-y="0.3"
      :max-y="0.4"
    />

    <TresDirectionalLight :intensity="4" :position="[-3, 1, 3]" cast-shadow />
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
