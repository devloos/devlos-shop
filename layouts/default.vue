<script setup lang="ts">
const { greaterOrEqual } = useBreakpoints();

const user = useSupabaseUser();

const isSearching = ref(false);
const search = ref('');

function toggleSearch() {
  isSearching.value = !isSearching.value;
  search.value = '';

  menuOpen.value = false;
}

const delayedIsSearching = ref(false);
let timeout: NodeJS.Timeout | undefined = undefined;

watch(isSearching, () => {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    delayedIsSearching.value = isSearching.value;
    timeout = undefined;
  }, 200);
});

onUnmounted(() => {
  clearTimeout(timeout);
});

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;

  isSearching.value = false;
  search.value = '';
}

const refHeader = useTemplateRef('refHeader');

onClickOutside(refHeader, () => {
  isSearching.value = false;
  search.value = '';
  menuOpen.value = false;
});
</script>

<template>
  <div>
    <header
      ref="refHeader"
      class="nav border-content-300/25 dark:border-content-300/50 from-dark/5 dark:from-dark/30 to-light/40 dark:to-light/5 fixed top-0 right-0 left-0 z-10 mx-auto my-4 max-w-11/12 rounded-lg border bg-linear-to-t from-25% px-4 py-4 backdrop-blur-sm md:max-w-10/12 md:px-6 lg:max-w-8/12 dark:from-50%"
      :class="{
        'nav-open': (isSearching && !!search) || menuOpen,
      }"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center" :class="{ grow: !isSearching }">
          <NuxtLink
            to="/"
            class="inline-flex items-center justify-start gap-3 transition-all hover:scale-[1.01]"
          >
            <Icon class="text-4xl" name="svgs:logo" />
            <p
              v-if="greaterOrEqual('xl') || (!delayedIsSearching && !isSearching)"
              class="text-lg font-semibold md:hidden xl:block"
            >
              Devlos Shop
            </p>
          </NuxtLink>
        </div>

        <div
          v-if="!delayedIsSearching && !isSearching"
          class="hidden grow justify-center md:flex md:gap-5 xl:gap-10"
        >
          <NuxtLink to="privacy" class="hover:text-primary/50 transition-all">
            Shop
          </NuxtLink>
          <NuxtLink to="privacy" class="hover:text-primary/50 transition-all">
            Contact
          </NuxtLink>
          <NuxtLink to="privacy" class="hover:text-primary/50 transition-all">
            Changelog
          </NuxtLink>
          <NuxtLink to="privacy" class="hover:text-primary/50 transition-all">
            Privacy
          </NuxtLink>
          <NuxtLink to="privacy" class="hover:text-primary/50 transition-all">
            FAQ
          </NuxtLink>
        </div>

        <div class="flex grow items-center justify-end transition-all lg:gap-1">
          <UButtonGroup
            class="flex grow justify-end"
            :class="{
              'ps-3 pe-1 md:ps-5': isSearching,
            }"
          >
            <UButton
              icon="svgs:search"
              color="neutral"
              :variant="isSearching ? 'outline' : 'ghost'"
              size="xl"
              @click="toggleSearch"
            />
            <template v-if="delayedIsSearching || isSearching">
              <UInput
                v-model.trim="search"
                class="search-input"
                :class="{ 'w-0!': !isSearching }"
                placeholder="Search"
                size="xl"
                :variant="isSearching ? 'outline' : 'ghost'"
                autofocus
              />
              <UButton
                v-if="isSearching"
                icon="svgs:x"
                color="neutral"
                :variant="isSearching ? 'outline' : 'ghost'"
                size="xl"
                @click="search = ''"
              />
            </template>
          </UButtonGroup>

          <ThemeSelector />

          <template v-if="user">
            <UButton
              class="hidden md:flex"
              icon="svgs:profile"
              color="neutral"
              variant="ghost"
              size="xl"
              @click="navigateTo('/account')"
            />
            <UButton
              class="hidden md:flex"
              icon="svgs:shopping-bag"
              color="neutral"
              variant="ghost"
              size="xl"
            />
          </template>
          <template v-else>
            <div class="flex items-center justify-end gap-4">
              <UButton
                class="hidden md:flex"
                icon="svgs:shopping-bag"
                color="neutral"
                variant="ghost"
                size="xl"
              />

              <div class="group relative hidden md:inline-flex">
                <div
                  class="bg-primary absolute inset-2.5 rounded-2xl opacity-90 blur-lg transition-all group-hover:inset-2 group-hover:opacity-100 group-hover:duration-300"
                />
                <NuxtLink
                  class="bg-primary text-base-100 z-10 rounded-md px-3 py-1"
                  to="/login"
                >
                  Login
                </NuxtLink>
              </div>
            </div>
          </template>

          <UButton
            class="md:hidden"
            :icon="menuOpen ? 'svgs:x' : 'svgs:hamburger'"
            color="neutral"
            variant="ghost"
            size="xl"
            @click="toggleMenu"
          />
        </div>
      </div>

      <div class="p-3">
        <p>SEARCHING</p>
        <p>SEARCHING</p>
        <p>SEARCHING</p>
        <p>SEARCHING</p>
      </div>
    </header>

    <slot />

    <footer>FOOTER</footer>
  </div>
</template>

<style scoped lang="css">
.nav {
  height: var(--navbar-height);
  overflow-y: clip;
  transition: height 0.3s;

  /* for some reason backdrop doesnt work on safari when using tailwind */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.nav-open {
  height: auto;
}

.search-input {
  transition: width 0.3s ease;
  width: 100%;

  @starting-style {
    width: 0;
  }
}
</style>
