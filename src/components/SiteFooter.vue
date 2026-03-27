<template>
  <footer id="footer" class="mt-20 bg-[#04102a] pb-8 pt-14 text-white">
    <div class="shell grid gap-10 md:grid-cols-2 xl:grid-cols-5">
      <div class="xl:col-span-2">
        <img src="/logo.png" alt="Visi Logistics" class="h-10 w-auto brightness-0 invert" />
        <p class="mt-6 max-w-md text-sm leading-7 text-slate-300">
          {{ dictionary.footer.description }}
        </p>
        <div class="mt-6 flex items-center gap-3">
          <div class="h-9 w-9 rounded-full border border-white/20" />
          <div class="h-9 w-9 rounded-full border border-white/20" />
        </div>
      </div>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">{{ dictionary.footer.headOffice }}</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-300">
          <li v-for="line in dictionary.footer.address" :key="line">{{ line }}</li>
          <li class="pt-2">{{ dictionary.topbar.phone }}</li>
          <li>{{ dictionary.topbar.email }}</li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">{{ dictionary.footer.company }}</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-300">
          <li v-for="link in dictionary.footer.companyLinks" :key="link">{{ link }}</li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">{{ dictionary.footer.gallery }}</p>
        <div class="mt-4 grid grid-cols-2 gap-2">
          <img
            v-for="(image, index) in gallery"
            :key="image"
            :src="image"
            :alt="`Gallery ${index + 1}`"
            class="h-20 w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="shell mt-10 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex sm:items-center sm:justify-between">
      <p>{{ dictionary.footer.copyright }}</p>
      <p class="mt-2 sm:mt-0">{{ dictionary.footer.privacy }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';

const { dictionary } = useLanguage();

const gallery = [
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=420&q=80',
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=420&q=80',
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=420&q=80',
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=420&q=80',
] as const;
</script>
