<template>
  <MainLayout>
    <!-- Hero -->
    <section class="relative h-[420px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1900&q=80"
        alt="Gallery hero"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#050f25]/80 via-[#050f25]/60 to-[#050f25]/80" />
      <div class="absolute inset-0 flex items-center">
        <div class="shell">
          <RevealOnScroll>
            <span class="section-tag bg-white/15 text-sky-200">
              <Images class="inline h-4 w-4 mr-1.5" />{{ dictionary.gallery.eyebrow }}
            </span>
            <h1 class="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              {{ dictionary.gallery.title }}
            </h1>
            <p class="mt-4 max-w-2xl border-l-4 border-sky-400 pl-4 text-base leading-8 text-slate-200">
              {{ dictionary.gallery.subtitle }}
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <!-- Masonry Bento Grid -->
    <main class="shell py-16">
      <!-- Block 1: large left + 2×2 right -->
      <RevealOnScroll>
        <div class="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
          <div class="group relative md:row-span-2 overflow-hidden rounded-2xl">
            <img
              :src="gallery[0].src"
              :alt="gallery[0].alt"
              class="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
            />
            <div class="gallery-label">{{ gallery[0].label }}</div>
          </div>
          <div v-for="item in gallery.slice(1, 5)" :key="item.src" class="group relative overflow-hidden rounded-2xl">
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
            />
            <div class="gallery-label">{{ item.label }}</div>
          </div>
        </div>
      </RevealOnScroll>

      <!-- Block 2: 2 wide images -->
      <RevealOnScroll :delay="100">
        <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div v-for="item in gallery.slice(5, 7)" :key="item.src" class="group relative overflow-hidden rounded-2xl">
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="gallery-label">{{ item.label }}</div>
          </div>
        </div>
      </RevealOnScroll>

      <!-- Block 3: 3 columns -->
      <RevealOnScroll :delay="120">
        <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div v-for="item in gallery.slice(7, 10)" :key="item.src" class="group relative overflow-hidden rounded-2xl">
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="gallery-label">{{ item.label }}</div>
          </div>
        </div>
      </RevealOnScroll>

      <!-- Block 4: large right + 2×2 left -->
      <RevealOnScroll :delay="140">
        <div class="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-2">
          <div v-for="item in gallery.slice(10, 14)" :key="item.src" class="group relative overflow-hidden rounded-2xl">
            <img
              :src="item.src"
              :alt="item.alt"
              class="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
            />
            <div class="gallery-label">{{ item.label }}</div>
          </div>
          <div class="group relative md:row-span-2 overflow-hidden rounded-2xl">
            <img
              :src="gallery[14].src"
              :alt="gallery[14].alt"
              class="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
            />
            <div class="gallery-label">{{ gallery[14].label }}</div>
          </div>
        </div>
      </RevealOnScroll>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { Images } from 'lucide-vue-next';
import MainLayout from '@/layouts/MainLayout.vue';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';

const { dictionary } = useLanguage();

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1586528116493-da5510c9dde6?auto=format&fit=crop&w=900&q=80',
    alt: 'Warehouse interior',
    label: 'Warehouse Operations',
  },
  {
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    alt: 'Container loading',
    label: 'Container Handling',
  },
  {
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
    alt: 'Fleet on highway',
    label: 'Land Distribution',
  },
  {
    src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=600&q=80',
    alt: 'Cargo aircraft',
    label: 'Air Freight',
  },
  {
    src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80',
    alt: 'Sea port containers',
    label: 'Sea Freight',
  },
  {
    src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80',
    alt: 'Cargo sorting',
    label: 'Sorting & Packing',
  },
  {
    src: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=80',
    alt: 'Delivery truck',
    label: 'Last Mile Delivery',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    alt: 'Cold chain storage',
    label: 'Cold Chain',
  },
  {
    src: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=600&q=80',
    alt: 'Forklift operation',
    label: 'Heavy Equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=600&q=80',
    alt: 'Logistics team',
    label: 'Our Team',
  },
  {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    alt: 'Night port operations',
    label: 'Port Operations',
  },
  {
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    alt: 'Tracking system',
    label: 'Real-Time Tracking',
  },
  {
    src: 'https://images.unsplash.com/photo-1459347268516-3ed71100e718?auto=format&fit=crop&w=600&q=80',
    alt: 'Aerial cargo view',
    label: 'Aerial Logistics',
  },
  {
    src: 'https://images.unsplash.com/photo-1509092360941-4a7b8c82f6db?auto=format&fit=crop&w=600&q=80',
    alt: 'Industrial warehouse',
    label: 'Project Cargo',
  },
  {
    src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&w=900&q=80',
    alt: 'Logistics network',
    label: 'Supply Chain',
  },
];
</script>

<style scoped>
.gallery-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  background: linear-gradient(to top, rgba(5, 15, 37, 0.85), transparent);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.group:hover .gallery-label {
  opacity: 1;
  transform: translateY(0);
}
</style>
