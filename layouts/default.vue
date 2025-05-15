<script setup>
const user = useSupabaseUser();
</script>

<template>
  <div>
    <header
      class="border-content-300/25 dark:border-content-300/50 border bg-linear-to-t from-dark/5 dark:from-dark/10 from-25% dark:from-50% to-light/30 dark:to-light/5 fixed top-0 left-0 right-0 max-w-8/12 mx-auto z-10 my-4 backdrop-blur-sm py-4 px-6 rounded-lg"
    >
      <div class="flex justify-between items-center">
        <NuxtLink
          to="/"
          class="flex justify-start items-center gap-3 grow hover:scale-[1.01] transition-all"
        >
          <Icon class="text-4xl" name="svgs:logo" />
          <p class="font-semibold text-lg">Devlos Shop</p>
        </NuxtLink>

        <div class="flex justify-center gap-10">
          <NuxtLink to="privacy">Shop</NuxtLink>
          <NuxtLink to="privacy">Contact</NuxtLink>
          <NuxtLink to="privacy">Changelog</NuxtLink>
          <NuxtLink to="privacy">Privacy</NuxtLink>
          <NuxtLink to="privacy">FAQ</NuxtLink>
        </div>

        <div class="flex justify-end gap-1 items-center grow">
          <UButton icon="svgs:search" color="neutral" variant="ghost" size="xl" />
          <ThemeSelector />
          <template v-if="user">
            <UButton icon="svgs:profile" color="neutral" variant="ghost" size="xl" />
            <UButton icon="svgs:shopping-bag" color="neutral" variant="ghost" size="xl" />
          </template>
          <template v-else>
            <div class="flex gap-4 items-center justify-end">
              <UButton
                icon="svgs:shopping-bag"
                color="neutral"
                variant="ghost"
                size="xl"
              />
              <NuxtLink to="/signup">Sign Up</NuxtLink>
              <NuxtLink class="bg-primary text-base-100 rounded-md px-3 py-1" to="/login">
                Login
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </header>
    <slot />
    footer
  </div>
</template>
