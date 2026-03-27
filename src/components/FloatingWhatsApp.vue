<template>
  <a
    href="https://wa.me/6281944221728"
    target="_blank"
    rel="noreferrer"
    class="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-sky-500 px-2 py-2 text-white shadow-[0_14px_24px_rgba(22,152,244,0.3)] transition hover:-translate-y-0.5 hover:bg-sky-400"
  >
    <div class="relative flex h-7 w-7 items-center justify-center rounded-full bg-white text-sky-500">
      <MessageCircle class="h-3.5 w-3.5" />
      <!-- online indicator -->
      <span class="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center">
        <span class="absolute h-full w-full animate-[ping_1.2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-green-400"></span>
        <span class="relative h-2.5 w-2.5 rounded-full bg-green-500 ring-[1.5px] ring-white"></span>
      </span>
    </div>
    <p class="hidden text-xs font-semibold uppercase tracking-[0.2em] text-white sm:block">
      {{ dictionary.whatsapp }}
    </p>
  </a>
</template>

<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next';
import { useLanguage } from '@/composables/useLanguage';

const { dictionary } = useLanguage();
</script>
