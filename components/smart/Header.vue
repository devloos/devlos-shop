<script setup lang="ts">
import { NAV_LINKS } from '~/assets/constants/nav-links';
import { PRODUCTS } from '~/assets/constants/products';

const { isDark, forced } = useTheme();

const { greaterOrEqual } = useBreakpoints();

const user = useSupabaseUser();

// the debouncer allows time for animations to finish
const isSearching = ref(false);
const debouncedIsSearching = refDebounced(isSearching, 200);

const search = ref('');
const debouncedSearch = refDebounced(search, 200);

// TODO: Fetch from supabase
const searchProducts = computed(() => {
  if (!!debouncedSearch.value || search.value) {
    return PRODUCTS;
  }

  return [];
});

function toggleSearch() {
  menuOpen.value = false;

  isSearching.value = !isSearching.value;
  search.value = '';
}

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;

  search.value = '';
  isSearching.value = false;
}

function closeNav() {
  isSearching.value = false;
  search.value = '';
  menuOpen.value = false;
}

const refHeader = useTemplateRef('refHeader');
onClickOutside(refHeader, closeNav);

const route = useRoute();
watch(() => route.fullPath, closeNav);

const { width: windowWidth } = useWindowSize();

watch(windowWidth, () => {
  if (greaterOrEqual('md') && menuOpen.value) {
    menuOpen.value = false;
  }
});
</script>

<template>
  <header
    ref="refHeader"
    class="nav border-content-300/25 dark:border-content-300/50 from-dark/5 dark:from-dark/50 to-light/50 dark:to-light/5 fixed top-0 right-0 left-0 z-50 mx-auto my-4 max-w-11/12 rounded-lg border bg-linear-to-t px-4 py-2 backdrop-blur-md sm:py-4 md:max-w-10/12 md:px-6 lg:max-w-8/12 dark:from-50%"
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
            v-if="greaterOrEqual('xl') || (!debouncedIsSearching && !isSearching)"
            class="text-xl font-semibold md:hidden xl:block"
          >
            Devlos Shop
          </p>
        </NuxtLink>
      </div>

      <div
        v-if="!debouncedIsSearching && !isSearching"
        class="hidden grow justify-center md:flex md:gap-5 xl:gap-10"
      >
        <NuxtLink
          v-for="link in NAV_LINKS"
          :key="link.name"
          :to="link.to"
          class="hover:text-primary/50 transition-all"
        >
          {{ link.name }}
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
          <template v-if="debouncedIsSearching || isSearching">
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

        <ClientOnly v-if="!forced">
          <UButton
            class="hidden md:flex"
            :icon="isDark ? 'svgs:moon' : 'svgs:sun'"
            color="neutral"
            variant="ghost"
            size="xl"
            @click="isDark = !isDark"
          />
        </ClientOnly>

        <template v-if="user">
          <UButton
            class="hidden md:flex"
            icon="svgs:profile"
            color="neutral"
            variant="ghost"
            size="xl"
            @click="navigateTo('/account')"
          />
          <UButton icon="svgs:shopping-bag" color="neutral" variant="ghost" size="xl" />
        </template>
        <template v-else>
          <div class="flex items-center justify-end gap-4">
            <UButton icon="svgs:shopping-bag" color="neutral" variant="ghost" size="xl" />

            <NuxtLink
              class="bg-primary text-base-100 z-50 hidden rounded-md px-3 py-1 md:inline-flex"
              to="/login"
            >
              Login
            </NuxtLink>
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

    <div v-if="isSearching || debouncedSearch" class="px-3 pt-6 pb-3">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div
          v-for="product in searchProducts"
          :key="product.name"
          class="flex items-center gap-2"
        >
          <NuxtImg :src="product.imageUrl" :alt="product.name" :width="160" placeholder />
          <div>
            <p class="font-semibold">{{ product.name }}</p>
            <p class="text-sm">{{ product.description }}</p>
            <p>${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col gap-3 px-3 pt-6 pb-3">
      <NuxtLink
        v-for="link in NAV_LINKS"
        :key="link.name"
        :to="link.to"
        class="hover:text-primary/50 text-lg tracking-wider transition-all"
      >
        {{ link.name }}
      </NuxtLink>

      <div class="flex gap-2 pt-2">
        <ClientOnly v-if="!forced">
          <UButton color="primary" size="xl" block @click="isDark = !isDark">
            <div class="flex items-center gap-2">
              <Icon class="text-xl" :name="isDark ? 'svgs:sun' : 'svgs:moon'" />
              <span>{{ isDark ? 'Light' : 'Dark' }}</span>
            </div>
          </UButton>
        </ClientOnly>

        <UButton color="primary" size="xl" block @click="navigateTo('/account')">
          <div class="flex items-center gap-2">
            <Icon class="text-xl" name="svgs:profile" />
            <span>{{ user ? 'Account' : 'Login' }}</span>
          </div>
        </UButton>
      </div>
    </div>
  </header>
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
