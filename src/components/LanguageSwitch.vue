<template>
  <div class="inline-flex rounded-full border border-slate-200 bg-white/90 p-0.5 shadow-sm backdrop-blur">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest transition"
      :class="language === option.value ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'"
      @click="setLanguage(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';
import type { Language } from '@/data/content';

const { language, setLanguage } = useLanguage();

const options: Array<{ label: string; value: Language }> = [
  { label: 'ID', value: 'id' },
  { label: 'EN', value: 'en' },
];
</script>
