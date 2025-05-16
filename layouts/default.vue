<script setup>
const user = useSupabaseUser();

const isSearching = ref(false);
const search = ref('');

function closeSearch() {
  isSearching.value = !isSearching.value;
  search.value = '';
}
</script>

<template>
  <div>
    <header
      class="nav border-content-300/25 dark:border-content-300/50 border bg-linear-to-t from-dark/5 dark:from-dark/10 from-25% dark:from-50% to-light/30 dark:to-light/5 fixed top-0 left-0 right-0 max-w-8/12 mx-auto z-10 my-4 backdrop-blur-sm py-4 px-6 rounded-lg"
      :class="{
        'nav-open': isSearching && !!search,
      }"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center" :class="{ grow: !isSearching }">
          <NuxtLink
            to="/"
            class="inline-flex justify-start items-center gap-3 hover:scale-[1.01] transition-all"
          >
            <Icon class="text-4xl" name="svgs:logo" />
            <p class="font-semibold text-lg">Devlos Shop</p>
          </NuxtLink>
        </div>

        <div v-if="!isSearching" class="flex grow justify-center gap-10">
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

        <div class="flex grow justify-end gap-1 items-center transition-all">
          <UButtonGroup
            class="transition-all duration-300 ease-in-out"
            :class="{
              'grow px-5': isSearching,
            }"
          >
            <UButton
              icon="svgs:search"
              color="neutral"
              :variant="isSearching ? 'outline' : 'ghost'"
              size="xl"
              @click="closeSearch"
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
              icon="svgs:profile"
              color="neutral"
              variant="ghost"
              size="xl"
              @click="navigateTo('/account')"
            />
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

              <div class="relative inline-flex group">
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
    footer
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
