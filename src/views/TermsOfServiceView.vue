<template>
  <MainLayout>
    <main>
      <!-- Hero -->
      <section class="bg-[#050f25] pb-16 pt-24">
        <div class="shell">
          <span class="section-tag bg-white/15 text-sky-200">Legal</span>
          <h1 class="mt-5 text-4xl font-extrabold text-white md:text-6xl">{{ c.title }}</h1>
          <p class="mt-3 text-sm text-slate-400">{{ c.lastUpdated }}</p>
        </div>
      </section>

      <!-- Content -->
      <section class="py-16">
        <div class="shell">
          <div class="mx-auto max-w-3xl">
            <p class="text-base leading-8 text-slate-600">{{ c.intro }}</p>

            <div
              v-for="section in c.sections"
              :key="section.title"
              class="mt-10"
            >
              <h2 class="text-xl font-bold text-slate-900">{{ section.title }}</h2>
              <ul class="mt-4 space-y-2">
                <li
                  v-for="(p, i) in section.paragraphs"
                  :key="i"
                  class="flex items-start gap-2.5 text-sm leading-7 text-slate-600"
                >
                  <span v-if="i > 0" class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <span :class="i === 0 ? 'font-medium text-slate-700' : ''">{{ p }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-14 flex flex-wrap gap-4 border-t border-slate-100 pt-10">
              <RouterLink
                to="/privacy"
                class="inline-flex items-center gap-2 text-sm font-semibold !text-sky-500 transition hover:!text-sky-400"
              >
                {{ language === 'id' ? 'Lihat Kebijakan Privasi' : 'View Privacy Policy' }}
                <ArrowRight class="h-4 w-4" />
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ArrowRight } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import { useLanguage } from '@/composables/useLanguage';

const { dictionary, language } = useLanguage();
const c = computed(() => dictionary.value.terms);
</script>
