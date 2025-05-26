<template>
  <div class="md:mt-8">
    <div class="relative h-svh">
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

      <div class="canvas-shadow h-full">
        <ModelCanvas />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
h1 {
  font-family: Manrope sans-serif;
}

.canvas-shadow::before,
.canvas-shadow::after {
  height: calc(100svh - 80%);
  content: '';
  position: absolute;
  right: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
}

.canvas-shadow::before {
  top: 0;
  mask-image: linear-gradient(180deg, black 0%, transparent 100%);
  background: var(--color-base-100);
}

.canvas-shadow::after {
  bottom: 0;
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
  background: var(--color-base-100);
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
</style>
