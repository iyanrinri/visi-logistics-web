<template>
  <MainLayout>
    <main id="home" class="pb-10">
      <section class="relative min-h-[calc(100vh-106px)] overflow-hidden bg-[#050f25]">
        <div
          v-for="(slide, index) in slides"
          :key="slide.title"
          class="hero-slide absolute inset-0 transition-opacity duration-1000"
          :class="index === activeSlide ? 'hero-slide-active opacity-100' : 'opacity-0'"
          :style="{ '--hero-image': `url(${slide.image})` }"
        ></div>

        <div class="relative z-10">
          <div class="shell flex min-h-[calc(100vh-106px)] items-center py-12 md:py-16">
            <div>
              <Transition name="hero-copy" mode="out-in" appear>
                <div :key="activeSlide" class="max-w-4xl text-white">
                  <span class="section-tag hero-copy-eyebrow bg-white/15 text-sky-200">{{ slides[activeSlide]?.eyebrow }}</span>
                  <h1 class="hero-copy-title mt-6 text-4xl font-extrabold leading-tight md:text-6xl">{{ slides[activeSlide]?.title }}</h1>
                  <p class="hero-copy-description mt-6 max-w-3xl text-base leading-8 text-slate-100 md:text-lg">{{ slides[activeSlide]?.description }}</p>
                </div>
              </Transition>
            </div>
          </div>

          <div class="shell pb-8">
            <div class="flex items-center gap-2">
              <button
                v-for="(slide, index) in slides"
                :key="slide.title"
                type="button"
                class="h-2.5 rounded-full transition-all duration-300"
                :class="index === activeSlide ? 'w-10 bg-sky-400' : 'w-2.5 bg-white/50 hover:bg-white/80'"
                @click="activeSlide = index"
                :aria-label="`Slide ${index + 1}`"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="shell mt-24">
        <RevealOnScroll>
          <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span class="section-tag">{{ dictionary.services.eyebrow }}</span>
              <h2 class="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">{{ dictionary.services.title }}</h2>
              <p class="mt-3 text-base text-slate-500">{{ dictionary.services.subtitle }}</p>
            </div>
            <button class="shrink-0 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500">
              {{ dictionary.services.cta }}
            </button>
          </div>
        </RevealOnScroll>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <RevealOnScroll v-for="(service, index) in dictionary.services.items" :key="service.title" :delay="100 + index * 80">
            <article class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <!-- decorative blob -->
              <div class="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-sky-50" />
              <!-- icon -->
              <div class="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <component :is="serviceIcons[index]" class="h-5 w-5" />
              </div>
              <h3 class="text-base font-bold text-slate-900">{{ service.title }}</h3>
              <p class="mt-2 flex-1 text-sm leading-6 text-slate-500">{{ service.description }}</p>
              <a href="#contact" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-500 transition hover:text-sky-400">
                {{ dictionary.services.learnMore }}
                <ArrowRight class="h-3.5 w-3.5" />
              </a>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <section id="about" class="shell mt-24">
        <RevealOnScroll>
          <div class="grid items-center gap-8 lg:grid-cols-2">
            <div class="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1622556498246-755f44ca76f3?auto=format&fit=crop&w=1100&q=80"
                alt="Visi Logistics office"
                class="h-full min-h-[460px] w-full object-cover"
              />
              <div class="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 shadow-xl">
                <p class="text-4xl font-black text-slate-900">{{ count }}+</p>
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{{ dictionary.about.experience }}</p>
              </div>
            </div>

            <div>
              <span class="section-tag">{{ dictionary.about.eyebrow }}</span>
              <h2 class="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">{{ dictionary.about.title }}</h2>
              <p class="mt-5 text-base leading-8 text-slate-600">{{ dictionary.about.description }}</p>
              <blockquote class="mt-6 border-l-4 border-sky-400 pl-4 text-lg italic text-slate-700">{{ dictionary.about.quote }}</blockquote>
              <ul class="mt-6 space-y-3">
                <li v-for="bullet in dictionary.about.bullets" :key="bullet" class="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 class="h-5 w-5 text-emerald-500" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
              <button class="mt-8 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500">
                {{ dictionary.about.cta }}
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section class="mt-16 border-y border-slate-200 bg-slate-50/80 py-14">
        <div class="shell">
          <RevealOnScroll :delay="100">
            <div class="text-center">
              <span class="section-tag">{{ dictionary.clients.eyebrow }}</span>
              <h2 class="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">{{ dictionary.clients.title }}</h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll :delay="180">
            <div class="client-scroll mt-8 overflow-x-auto pb-2">
              <div class="flex min-w-max gap-4 pr-2">
                <a
                  v-for="client in clientLogos"
                  :key="client.name"
                  :href="client.website"
                  target="_blank"
                  rel="noreferrer"
                  class="group flex h-20 w-52 shrink-0 items-center justify-center px-3 transition duration-300 hover:-translate-y-0.5"
                  :aria-label="client.name"
                >
                  <img
                    v-if="!brokenClientLogos.includes(client.name)"
                    :src="client.logo"
                    :alt="client.name"
                    class="max-h-12 w-auto object-contain grayscale opacity-60 transition duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                    @error="brokenClientLogos.push(client.name)"
                    loading="lazy"
                  />
                  <span v-else class="text-sm font-semibold tracking-wide text-slate-500">{{ client.name }}</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section class="shell mt-20" id="advantages">
        <RevealOnScroll>
          <div class="text-center">
            <span class="section-tag">{{ dictionary.advantages.eyebrow }}</span>
            <h2 class="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">{{ dictionary.advantages.title }}</h2>
          </div>
        </RevealOnScroll>
        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <RevealOnScroll v-for="(advantage, index) in dictionary.advantages.items" :key="advantage.title" :delay="140 + index * 90">
            <article class="panel h-full rounded-3xl p-6 text-center">
              <div class="mb-5 flex items-center justify-center text-slate-900">
                <component :is="advantageIcons[index]" class="h-11 w-11" />
              </div>
              <h3 class="text-xl font-bold text-slate-900">{{ advantage.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">{{ advantage.description }}</p>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <section id="contact" class="shell mt-24">
        <RevealOnScroll>
          <div class="cta-backdrop overflow-hidden rounded-[2rem] p-8 text-white md:p-12">
            <span class="section-tag bg-white/12 text-sky-200">{{ dictionary.cta.eyebrow }}</span>
            <h2 class="mt-5 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">{{ dictionary.cta.title }}</h2>
            <p class="mt-5 max-w-2xl text-base leading-8 text-slate-100">{{ dictionary.cta.description }}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <button class="btn-primary rounded-2xl px-6 py-3 text-sm font-semibold md:text-base">{{ dictionary.cta.primary }}</button>
              <button class="btn-secondary rounded-2xl px-6 py-3 text-sm font-semibold md:text-base">{{ dictionary.cta.secondary }}</button>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { ArrowRight, CheckCircle2, Truck, Plane, Anchor, Package2, Weight, Clock3, Headset, MapPin } from 'lucide-vue-next';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';
import { useCounterAnimation } from '@/composables/useCounterAnimation';
import MainLayout from '@/layouts/MainLayout.vue';

const serviceIcons = [Truck, Plane, Anchor, Package2];
const advantageIcons = [Weight, Clock3, Headset, MapPin];
const brokenClientLogos = ref<string[]>([]);

const clientLogos = [
  { name: 'DHL', logo: '/client-logos/dhl.png', website: 'https://www.dhl.com' },
  { name: 'Samsung', logo: '/client-logos/samsung.png', website: 'https://www.samsung.com' },
  { name: 'Hitachi', logo: '/client-logos/hitachi.png', website: 'https://www.hitachi.com' },
  { name: 'Toyota', logo: '/client-logos/toyota.png', website: 'https://www.toyota.com' },
  { name: 'Siemens', logo: '/client-logos/siemens.png', website: 'https://www.siemens.com' },
  { name: 'Nestlé', logo: '/client-logos/nestle.png', website: 'https://www.nestle.com' },
  { name: 'Faber-Castell', logo: '/client-logos/faber-castell.png', website: 'https://www.faber-castell.com' },
  { name: 'Shell Helix Ultra', logo: '/client-logos/shell-helix-ultra.png', website: 'https://www.shell.com' },
];

const { dictionary, language } = useLanguage();
const { count } = useCounterAnimation(15, 2000);
const activeSlide = ref(0);
let intervalId: number | undefined;

const slides = computed(() => {
  if (language.value === 'id') {
    return [
      {
        eyebrow: 'Solusi rantai pasok terpercaya',
        title: 'Supply Chain Lebih Cepat, Bisnis Lebih Tumbuh',
        description:
          'Kami membantu operasional logistik bisnis Anda tetap stabil dengan pengiriman yang aman, tepat waktu, dan dapat dipantau setiap saat.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1900&q=80',
      },
      {
        eyebrow: 'Distribusi aman dan terukur',
        title: 'Dari Gudang ke Tujuan, Semua Terkontrol',
        description:
          'Visi Logistics mengintegrasikan armada, pergudangan, dan monitoring real-time untuk memastikan distribusi Anda berjalan efisien.',
        image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1900&q=80',
      },
      {
        eyebrow: 'Dukungan logistik untuk proyek besar',
        title: 'Mitra Logistik untuk Kargo Reguler hingga Proyek',
        description:
          'Baik pengiriman harian maupun kebutuhan proyek skala besar, tim kami menyiapkan skema distribusi yang relevan untuk bisnis Anda.',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1900&q=80',
      },
    ];
  }

  return [
    {
      eyebrow: 'Trusted supply chain solutions',
      title: 'Faster Supply Chain, Stronger Business Growth',
      description:
        'We help your logistics operation stay reliable with secure, on-time shipments and real-time visibility across the distribution process.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1900&q=80',
    },
    {
      eyebrow: 'Secure and measurable distribution',
      title: 'From Warehouse to Destination, Fully Controlled',
      description:
        'Visi Logistics integrates fleet, warehousing, and live monitoring to keep your distribution flow efficient and measurable.',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1900&q=80',
    },
    {
      eyebrow: 'Project-ready logistics support',
      title: 'Reliable Partner for Daily Freight and Project Cargo',
      description:
        'From routine shipment to large-scale project cargo, our team builds logistics schemes tailored to your operational targets.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1900&q=80',
    },
  ];
});

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.value.length;
  }, 10000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    window.clearInterval(intervalId);
  }
});

</script>
