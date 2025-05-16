<script setup>
const user = useSupabaseUser();

const isSearching = ref(false);
const search = ref('');

function toggleSearch() {
  isSearching.value = !isSearching.value;
  search.value = '';

  menuOpen.value = false;
}

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;

  isSearching.value = false;
  search.value = '';
}

function closeNav() {
  isSearching.value = false;
  search.value = '';
  menuOpen.value = false;
}
</script>

<template>
  <div>
    <header
      class="nav border-content-300/25 dark:border-content-300/50 border bg-linear-to-t from-dark/5 dark:from-dark/10 from-25% dark:from-50% to-light/30 dark:to-light/5 fixed top-0 left-0 right-0 lg:max-w-8/12 md:max-w-10/12 max-w-11/12 mx-auto z-10 my-4 backdrop-blur-sm py-4 px-4 md:px-6 rounded-lg"
      :class="{
        'nav-open': (isSearching && !!search) || menuOpen,
      }"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center" :class="{ grow: !isSearching }">
          <NuxtLink
            to="/"
            class="inline-flex justify-start items-center gap-3 hover:scale-[1.01] transition-all"
          >
            <Icon class="text-4xl" name="svgs:logo" />
            <p v-if="!isSearching" class="md:hidden xl:block font-semibold text-lg">
              Devlos Shop
            </p>
          </NuxtLink>
        </div>

        <div
          v-if="!isSearching"
          class="hidden md:flex grow justify-center md:gap-5 xl:gap-10"
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

        <div class="flex grow justify-end lg:gap-1 items-center transition-all">
          <UButtonGroup
            class="transition-all duration-300 ease-in-out"
            :class="{
              'grow ps-3 pe-1 md:ps-5': isSearching,
            }"
          >
            <UButton
              icon="svgs:search"
              color="neutral"
              :variant="isSearching ? 'outline' : 'ghost'"
              size="xl"
              @click="toggleSearch"
            />
            <template v-if="isSearching">
              <UInput
                v-model.trim="search"
                class="search-input"
                placeholder="Search"
                size="xl"
                variant="outline"
                autofocus
              />
              <UButton
                icon="svgs:x"
                color="neutral"
                variant="outline"
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
            <div class="flex gap-4 items-center justify-end">
              <UButton
                class="hidden md:flex"
                icon="svgs:shopping-bag"
                color="neutral"
                variant="ghost"
                size="xl"
              />

              <div class="hidden md:inline-flex relative group">
                <div
                  class="absolute opacity-90 inset-2.5 bg-primary rounded-2xl blur-lg group-hover:opacity-100 group-hover:inset-2 group-hover:duration-300 transition-all"
                />
                <NuxtLink
                  class="bg-primary text-base-100 rounded-md px-3 py-1 z-10"
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

    <div @click="closeNav">
      <slot />
    </div>

    <footer>FOOTER</footer>
  </div>
</template>

<style scoped lang="css">
.nav {
  height: var(--navbar-height);
  overflow-y: clip;
  transition: height 0.3s;
}

.nav-open {
  height: auto;
}

@starting-style {
  .search-input {
    width: 0;
    transition: width 0.3s ease;
  }
}

.search-input {
  width: 100%;
}
</style>
