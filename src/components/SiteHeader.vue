<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur">
    <div
      class="overflow-hidden bg-[#050f25] transition-all duration-300 ease-out"
      :class="showTopbar ? 'max-h-12 opacity-100 translate-y-0' : 'max-h-0 -translate-y-2 opacity-0'"
    >
      <div class="shell flex flex-wrap items-center justify-end gap-x-5 gap-y-1 py-2 text-right text-xs text-slate-200">
        <span>{{ dictionary.topbar.location }}</span>
        <span>{{ dictionary.topbar.phone }}</span>
        <span class="hidden sm:inline">{{ dictionary.topbar.email }}</span>
      </div>
    </div>

    <div class="shell flex items-center justify-between gap-4 py-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <img src="/logo.png" alt="Visi Logistics" class="h-10 w-auto" />
      </RouterLink>

      <nav class="hidden items-center gap-6 lg:flex">
        <RouterLink
          v-for="item in menu"
          :key="item.label"
          :to="item.to"
          class="text-sm font-semibold tracking-wide text-slate-600 transition hover:text-sky-500"
          active-class="text-sky-500"
          exact-active-class="text-sky-500"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <LanguageSwitch />
        <RouterLink
          to="/track"
          class="inline-flex items-center gap-1.5 rounded-xl bg-sky-500 px-3 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(22,152,244,0.25)] transition hover:bg-sky-400"
        >
          <Package class="h-3.5 w-3.5" />
          {{ dictionary.navigation.track }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Package } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import { useLanguage } from '@/composables/useLanguage';

const { dictionary } = useLanguage();
const route = useRoute();
const showTopbar = ref(true);
let heroObserver: IntersectionObserver | null = null;

const clearObserver = () => {
  if (heroObserver) {
    heroObserver.disconnect();
    heroObserver = null;
  }
};

const setupHeroObserver = async () => {
  clearObserver();

  await nextTick();
  const heroSection = document.querySelector<HTMLElement>('#hero');

  if (!heroSection) {
    showTopbar.value = true;
    return;
  }

  heroObserver = new IntersectionObserver(
    ([entry]) => {
      showTopbar.value = entry.isIntersecting;
    },
    {
      threshold: 0.35,
    },
  );

  heroObserver.observe(heroSection);
};

const menu = computed(() => [
  { label: dictionary.value.navigation.home, to: { path: '/' } },
  { label: dictionary.value.navigation.about, to: { path: '/about' } },
  { label: dictionary.value.navigation.services, to: { path: '/services' } },
  { label: dictionary.value.navigation.contact, to: { path: '/contact' } },
  { label: dictionary.value.navigation.careers, to: { path: '/', hash: '#footer' } },
  { label: dictionary.value.navigation.news, to: { path: '/news' } },
]);

onMounted(() => {
  void setupHeroObserver();
});

watch(
  () => route.fullPath,
  () => {
    void setupHeroObserver();
  },
);

onBeforeUnmount(() => {
  clearObserver();
});
</script>
