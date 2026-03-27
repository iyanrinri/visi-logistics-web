<template>
  <footer id="footer" class="mt-20 bg-[#04102a] pb-8 pt-14 text-white">
    <div class="shell grid gap-10 md:grid-cols-2 xl:grid-cols-6">
      <div class="xl:col-span-2">
        <img src="/logo.png" alt="Visi Logistics" class="h-10 w-auto brightness-0 invert" />
        <p class="mt-6 max-w-md text-sm leading-7 text-slate-300">
          {{ dictionary.footer.description }}
        </p>
        <div class="mt-6 flex items-center gap-3">
          <a
            href="https://www.instagram.com/visilogistics.official"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
          >
            <Instagram class="h-4.5 w-4.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/visi-logistics-b329903a8/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
          >
            <Linkedin class="h-4.5 w-4.5" />
          </a>
        </div>
      </div>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">{{ dictionary.footer.headOffice }}</p>
        <ul class="mt-4 space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-2.5">
            <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
            <span>{{ officeLocation }}</span>
          </li>
          <li class="flex items-start gap-2.5">
            <Phone class="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
            <span>{{ dictionary.topbar.phone }}</span>
          </li>
          <li class="flex items-start gap-2.5">
            <Mail class="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
            <span>{{ dictionary.topbar.email }}</span>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Services</p>
        <ul class="mt-4 space-y-2 text-sm text-slate-300">
          <li v-for="service in services" :key="service">
            <RouterLink to="/services" class="transition hover:text-sky-300">{{ service }}</RouterLink>
          </li>
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
      <div class="mt-2 flex items-center gap-4 sm:mt-0">
        <a href="#" class="transition hover:text-sky-300">{{ dictionary.footer.privacy }}</a>
        <a href="#" class="transition hover:text-sky-300">Terms Of Service</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
import { useLanguage } from '@/composables/useLanguage';

const { dictionary } = useLanguage();

const services = ['Air & Sea Freight', 'Land Transport', 'Dangerous Goods', 'Warehouse'] as const;

const officeLocation = computed(() => dictionary.value.footer.address.join(', '));

const gallery = [
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=420&q=80',
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=420&q=80',
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=420&q=80',
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=420&q=80',
] as const;
</script>
