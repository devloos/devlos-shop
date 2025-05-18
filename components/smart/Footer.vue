<script setup lang="ts">
import { NAV_LINKS } from '~/assets/constants/nav-links';

const { isDark, forced } = useTheme();

const year = new Date().getFullYear();
</script>

<template>
  <footer class="relative mt-40">
    <div class="absolute inset-x-0 -top-50 sm:-top-65">
      <NuxtImg class="mx-auto" src="/devlos-shop/gpt-2.png" alt="luffy" width="520" />
    </div>

    <div
      class="border-content-300/25 dark:border-content-300/50 dark:bg-dark/50 bg-light/50 mx-auto mt-4 border-t px-4 pt-10 backdrop-blur-md md:px-6 dark:from-50%"
    >
      <div class="flex flex-col items-center gap-4 pb-14">
        <Icon class="text-5xl" name="svgs:logo" />

        <p class="pb-5 text-2xl font-semibold tracking-wide">Devlos Shop</p>

        <div class="flex flex-row justify-center gap-4 sm:gap-6 sm:text-lg">
          <NuxtLink
            v-for="link in NAV_LINKS"
            :key="link.name"
            :to="link.to"
            class="hover:text-primary/50 transition-all"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="mx-auto max-w-11/12 pb-14 lg:max-w-3/5">
        <hr class="border-content-300/25 dark:border-content-300/50 pb-6" />

        <div class="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <div>©{{ year }} - Devlos Labs</div>

          <div class="flex gap-1">
            <ClientOnly v-if="!forced">
              <UButton
                :icon="isDark ? 'svgs:moon' : 'svgs:sun'"
                color="neutral"
                variant="ghost"
                size="xl"
                @click="isDark = !isDark"
              />
            </ClientOnly>
            <UButton icon="svgs:github" color="neutral" variant="ghost" size="xl" />
            <UButton icon="svgs:linkedin" color="neutral" variant="ghost" size="xl" />
            <UButton icon="svgs:instagram" color="neutral" variant="ghost" size="xl" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
