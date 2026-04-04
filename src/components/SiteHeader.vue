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
          class="relative text-sm font-semibold tracking-wide text-slate-600 transition hover:text-sky-500 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
          active-class="text-sky-500 after:!w-full"
          exact-active-class="text-sky-500 after:!w-full"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <!-- Desktop: language + track button -->
        <div class="hidden items-center gap-3 lg:flex">
          <LanguageSwitch />
          <RouterLink
            to="/track"
            active-class=""
            exact-active-class=""
            class="inline-flex items-center gap-1.5 rounded-xl bg-sky-500 px-3 py-2 text-xs font-semibold !text-white shadow-[0_8px_20px_rgba(22,152,244,0.25)] transition hover:bg-sky-400"
          >
            <Package class="h-3.5 w-3.5" />
            {{ dictionary.navigation.track }}
          </RouterLink>
        </div>

        <!-- Mobile: hamburger button -->
        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 lg:hidden"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile menu overlay -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-x-0 top-0 z-[60] flex min-h-screen flex-col bg-white lg:hidden"
    >
      <!-- Close button row -->
      <div class="shell flex items-center justify-between py-4">
        <RouterLink to="/" class="flex items-center gap-3" @click="mobileMenuOpen = false">
          <img src="/logo.png" alt="Visi Logistics" class="h-10 w-auto" />
        </RouterLink>
        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100"
          aria-label="Close menu"
          @click="mobileMenuOpen = false"
        >
          <X class="h-5 w-5" />
        </button>
      </div>

      <!-- Nav links -->
      <nav class="shell flex flex-col divide-y divide-slate-100">
        <RouterLink
          v-for="item in menu"
          :key="item.label"
          :to="item.to"
          class="group flex items-center justify-between py-4 text-lg font-semibold text-slate-700 transition"
          active-class="text-sky-500 !bg-sky-50 -mx-4 px-4 rounded-xl"
          exact-active-class="text-sky-500 !bg-sky-50 -mx-4 px-4 rounded-xl"
          @click="mobileMenuOpen = false"
        >
          <span>{{ item.label }}</span>
          <ArrowRight
            class="h-4 w-4 shrink-0 text-sky-400 opacity-0 transition group-[.text-sky-500]:opacity-100"
          />
        </RouterLink>
      </nav>

      <!-- Track button -->
      <div class="shell mt-6">
        <RouterLink
          to="/track"
          active-class=""
          exact-active-class=""
          class="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-4 py-4 text-sm font-bold uppercase tracking-widest !text-white shadow-[0_8px_20px_rgba(22,152,244,0.3)] transition hover:bg-sky-400"
          @click="mobileMenuOpen = false"
        >
          <Package class="h-4 w-4" />
          {{ dictionary.navigation.track }}
        </RouterLink>
      </div>

      <!-- Language switcher -->
      <div class="shell mt-6 flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-widest text-slate-400">Language</span>
        <LanguageSwitch />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { ArrowRight, Menu, Package, X } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import LanguageSwitch from '@/components/LanguageSwitch.vue';
import { useLanguage } from '@/composables/useLanguage';

const { dictionary } = useLanguage();
const route = useRoute();
const showTopbar = ref(true);
const mobileMenuOpen = ref(false);
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
  { label: dictionary.value.navigation.careers, to: { path: '/careers' } },
  { label: dictionary.value.navigation.gallery, to: { path: '/gallery' } },
  { label: dictionary.value.navigation.news, to: { path: '/news' } },
]);

onMounted(() => {
  void setupHeroObserver();
});

watch(
  () => route.fullPath,
  () => {
    void setupHeroObserver();
    mobileMenuOpen.value = false;
  },
);

onBeforeUnmount(() => {
  clearObserver();
});
</script>
