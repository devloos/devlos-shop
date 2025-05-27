<template>
  <div class="md:mt-8">
    <div class="relative h-svh">
      <div class="ds-shadow-inset-top canvas-height" />
      <div class="ds-shadow-inset-bottom canvas-height" />

      <div class="pointer-events-none absolute inset-x-0 z-10 text-center">
        <h1
          class="mx-auto max-w-[42rem] px-2 text-center text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl"
        >
          Discover new tech designed to elevate your everyday.
        </h1>

        <div
          class="flex flex-wrap justify-center gap-4 pt-8 pb-10 text-sm sm:gap-6 sm:text-base"
        >
          <p class="flex items-center gap-2">
            <Icon class="text-xl" name="svgs:fast-clock" />
            <span>Fast Shipping</span>
          </p>

          <p class="flex items-center gap-2">
            <Icon class="text-base" name="svgs:secure" />
            <span>Secure Checkout</span>
          </p>

          <p class="flex items-center gap-2">
            <Icon class="text-xl" name="svgs:diamond" />
            <span>Tech-Tested Quality</span>
          </p>
        </div>

        <div class="animate-border pointer-events-auto mx-auto max-w-42">
          <UButton
            class="hover:bg-primary-300 dark:hover:bg-primary-700 tracking-wide transition-all"
            size="xl"
            color="primary"
            block
          >
            Shop Now
          </UButton>
        </div>
      </div>

      <ModelCanvas class="h-full" />
    </div>

    <div class="relative my-24">
      <div class="ds-shadow-inset-top h-36" />
      <div class="ds-shadow-inset-bottom h-36" />
      <div class="ds-shadow-inset-left w-52" />
      <div class="ds-shadow-inset-right w-52" />

      <div class="*:ring-content-300/30 relative grid grid-cols-5 *:ring-[0.5px]">
        <div v-for="i in 5" :key="i" class="h-36" />
        <div v-for="i in 5" :key="i" class="h-12" />

        <div />
        <div class="p-5 text-6xl">Logitech Keyboard Mini</div>
        <div class="col-span-2 row-span-2">
          <div class="ds-bg-dotted flex justify-center py-4">
            <NuxtImg
              src="/devlos-shop/products/logitech-keyboard-min.png"
              alt="Logitech Keyboard"
              width="480"
              height="480"
            />
          </div>
        </div>
        <div />

        <div />
        <NuxtLink
          to="/privacy"
          class="group hover:bg-base-200 flex flex-col items-start justify-between p-5 transition-all hover:cursor-pointer"
        >
          <p class="text-content-300">
            The same mechanical feel and extraordinary precision and performance in a
            minimalist, space-saving, form factor.
          </p>
          <div class="flex items-center gap-3">
            <span class="font-semibold tracking-wide">See details</span>
            <Icon
              class="text-lg transition-all group-hover:scale-125"
              name="svgs:r-diagonal-arrow"
            />
          </div>
        </NuxtLink>
        <div />

        <div class="h-72" />
        <div class="h-72">
          <div class="ds-bg-dotted flex h-full w-full items-center justify-center">
            <NuxtImg
              src="/devlos-shop/products/lock.png"
              alt="Lock"
              width="180"
              height="180"
            />
          </div>
        </div>
        <NuxtLink
          to="/privacy"
          class="hover:bg-base-200 group flex h-72 flex-col items-end justify-between gap-3 p-5 transition-all hover:cursor-pointer"
        >
          <Icon
            class="text-xl transition-all group-hover:scale-125"
            name="svgs:r-diagonal-arrow"
          />
          <div>
            <h3 class="pb-2 text-xl font-semibold tracking-wide">Quality Products</h3>
            <p class="text-content-300">
              Battle tested tech and built with security in mind
            </p>
          </div>
        </NuxtLink>
        <div class="h-72">
          <div class="ds-bg-dotted flex h-full items-center justify-center">
            <NuxtImg
              src="/devlos-shop/products/circuit.png"
              alt="Circuit"
              width="220"
              height="220"
            />
          </div>
        </div>
        <div class="h-72" />

        <div v-for="i in 5" :key="i" class="h-12" />

        <div />
        <div class="col-span-2 row-span-2">
          <div class="ds-bg-dotted flex items-center justify-center py-4">
            <NuxtImg
              src="/devlos-shop/products/pacman.png"
              alt="Pacman"
              width="480"
              height="480"
            />
          </div>
        </div>
        <div class="p-2 text-6xl">Build the perfect tools.</div>
        <div />

        <div />
        <div class="p-2 text-3xl">Buy everything now.</div>
        <div />

        <div />
        <div />
        <NuxtLink
          to="/privacy"
          class="hover:bg-base-200 group flex h-14 items-center justify-center gap-3 transition-all hover:cursor-pointer"
        >
          <span class="font-semibold tracking-wide">Shop Now</span>
          <Icon
            class="text-lg transition-all group-hover:scale-125"
            name="svgs:r-diagonal-arrow"
          />
        </NuxtLink>
        <div />
        <div />

        <div v-for="i in 5" :key="i" class="h-36" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
h1 {
  font-family: Manrope sans-serif;
}

.canvas-height {
  height: calc(100svh - 80%);
}

.ds-shadow-inset-top,
.ds-shadow-inset-bottom,
.ds-shadow-inset-left,
.ds-shadow-inset-right {
  position: absolute;
  pointer-events: none;
  background: var(--color-base-100);
  z-index: 5;
}

.ds-shadow-inset-top {
  top: -1px;
  left: 0;
  right: 0;
  mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
}

.ds-shadow-inset-bottom {
  bottom: -1px;
  left: 0;
  right: 0;
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
}

.ds-shadow-inset-left {
  left: -1px;
  top: 0;
  bottom: 0;
  mask-image: linear-gradient(to right, black 0%, transparent 100%);
}

.ds-shadow-inset-right {
  right: -1px;
  top: 0;
  bottom: 0;
  mask-image: linear-gradient(to left, black 0%, transparent 100%);
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.animate-border {
  position: relative;
}

.animate-border::after,
.animate-border::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: conic-gradient(
    from var(--angle),
    var(--color-base-100) 90%,
    var(--color-primary)
  );
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 1.35rem 5.35rem;
  border-radius: calc(var(--ui-radius) * 1.5);
  animation: 3s rotate linear infinite;
  transition: opacity 0.3s ease;
}

@keyframes rotate {
  from {
    --angle: 0deg;
  }

  to {
    --angle: 360deg;
  }
}

.ds-bg-dotted {
  background-image: radial-gradient(
    transparent,
    var(--color-content-300) 0.5px,
    transparent 0
  );
  background-repeat: repeat;
  background-position: center;
  background-size: 17px 17px;
}
</style>
