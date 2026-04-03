<template>
  <div
    ref="element"
    class="reveal"
    :class="{ 'reveal-visible': isVisible }"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

withDefaults(
  defineProps<{
    delay?: number;
  }>(),
  {
    delay: 0,
  },
);

const element = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!element.value || typeof IntersectionObserver === 'undefined') {
    isVisible.value = true;
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  observer.observe(element.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
