<template>
  <MainLayout>
    <main id="home" class="pb-10">
      <section id="hero" class="relative min-h-[calc(100vh-106px)] overflow-hidden bg-[#050f25]">
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
            <RouterLink to="/services" class="shrink-0 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500">
              {{ dictionary.services.cta }}
            </RouterLink>
          </div>
        </RevealOnScroll>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <RevealOnScroll v-for="(service, index) in dictionary.services.items" :key="service.title" :delay="100 + index * 80">
            <article class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-sky-400 hover:shadow-[0_0_0_1px_theme(colors.sky.400),0_8px_24px_rgba(14,165,233,0.15)]">
              <!-- decorative blob -->
              <div class="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-sky-50 transition-all duration-300 group-hover:bg-sky-100" />
              <!-- icon -->
              <div class="relative mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <component :is="serviceIcons[index]" class="h-5 w-5" />
              </div>
              <h3 class="text-base font-bold text-slate-900">{{ service.title }}</h3>
              <p class="mt-2 flex-1 text-sm leading-6 text-slate-500">{{ service.description }}</p>
              <RouterLink to="/services" class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sky-500 transition hover:text-sky-400">
                {{ dictionary.services.learnMore }}
                <ArrowRight class="h-3.5 w-3.5" />
              </RouterLink>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <section id="about" class="shell mt-24">
        <RevealOnScroll>
          <div class="grid items-center gap-8 lg:grid-cols-2">
            <div class="group relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1622556498246-755f44ca76f3?auto=format&fit=crop&w=1100&q=80"
                alt="Visi Logistics office"
                class="h-full min-h-[460px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="float-card absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-5 shadow-xl">
                <p class="text-4xl font-black text-slate-900">{{ count }}+</p>
                <div class="mt-1 h-px w-full bg-slate-200" />
                <p class="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{{ dictionary.about.experience }}</p>
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
            <div class="marquee-track mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div class="marquee-inner flex w-max gap-4">
                <template v-for="pass in 2" :key="pass">
                  <a
                    v-for="client in clientLogos"
                    :key="`${pass}-${client.name}`"
                    :href="client.website"
                    target="_blank"
                    rel="noreferrer"
                    class="group flex h-20 w-52 shrink-0 items-center justify-center px-3"
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
                </template>
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
            <article class="group panel relative h-full overflow-hidden rounded-3xl p-6 text-center transition-all duration-300 hover:scale-[1.03] hover:border hover:border-sky-400 hover:shadow-[0_0_0_1px_theme(colors.sky.400),0_8px_24px_rgba(14,165,233,0.15)]">
              <div class="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-sky-50 transition-all duration-300 group-hover:bg-sky-100" />
              <div class="relative mb-5 inline-flex items-center justify-center rounded-full bg-slate-100 p-3 text-slate-600 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <component :is="advantageIcons[index]" class="h-8 w-8" />
              </div>
              <h3 class="text-xl font-bold text-slate-900">{{ advantage.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600">{{ advantage.description }}</p>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <section id="workflow" class="shell mt-24">
        <RevealOnScroll>
          <div class="text-center">
            <span class="section-tag"><RefreshCw class="mr-1.5 inline h-4 w-4" />{{ dictionary.workflow.eyebrow }}</span>
            <h2 class="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">{{ dictionary.workflow.title }}</h2>
            <p class="mt-3 text-base text-slate-500">{{ dictionary.workflow.subtitle }}</p>
          </div>
        </RevealOnScroll>

        <div class="mt-16 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          <RevealOnScroll
            v-for="(step, index) in dictionary.workflow.items"
            :key="step.title"
            :delay="100 + index * 100"
            class="relative"
          >
            <!-- connector line -->
            <div
              v-if="index < dictionary.workflow.items.length - 1"
              class="absolute left-1/2 top-[52px] hidden h-px w-full border-t-2 border-dashed border-slate-200 md:block"
            />

            <div class="group flex flex-col items-center text-center px-4 transition-transform duration-300 hover:scale-105">
              <!-- icon circle -->
              <div class="relative">
                <div class="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-sky-100 group-hover:shadow-[0_0_0_8px_rgba(14,165,233,0.12)]">
                  <component
                    :is="workflowIcons[index]"
                    class="h-9 w-9 text-slate-400 transition-colors duration-300 group-hover:text-sky-500"
                  />
                </div>
                <!-- number badge -->
                <span class="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-300 text-xs font-bold text-white transition-all duration-300 group-hover:bg-sky-500 group-hover:shadow-[0_4px_12px_rgba(14,165,233,0.4)]">
                  {{ index + 1 }}
                </span>
              </div>

              <h3 class="mt-5 text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-sky-500">{{ step.title }}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-500">{{ step.description }}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="faq" class="shell mt-24">
        <RevealOnScroll>
          <div class="text-center">
            <span class="section-tag"><HelpCircle class="mr-1.5 inline h-4 w-4" />{{ dictionary.faq.eyebrow }}</span>
            <h2 class="mt-5 text-3xl font-extrabold text-slate-900 md:text-5xl">{{ dictionary.faq.title }}</h2>
          </div>
        </RevealOnScroll>

        <div class="mt-10 space-y-3">
          <RevealOnScroll v-for="(item, index) in dictionary.faq.items" :key="item.question" :delay="80 + index * 60">
            <div
              class="overflow-hidden rounded-2xl border transition-all duration-300"
              :class="openFaq === index ? 'border-sky-300 bg-sky-50 shadow-[0_0_0_1px_theme(colors.sky.300)]' : 'border-slate-200 bg-white hover:border-slate-300'"
            >
              <button
                type="button"
                class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                @click="openFaq = openFaq === index ? null : index"
              >
                <span
                  class="text-base font-bold transition-colors duration-300"
                  :class="openFaq === index ? 'text-sky-600' : 'text-slate-900'"
                >{{ item.question }}</span>
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                  :class="openFaq === index ? 'bg-sky-500 text-white rotate-180' : 'bg-slate-100 text-slate-500'"
                >
                  <ChevronDown class="h-4 w-4 transition-transform duration-300" />
                </span>
              </button>
              <div
                class="grid transition-all duration-300 ease-in-out"
                :class="openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
              >
                <div class="overflow-hidden">
                  <p class="px-6 pb-5 text-sm leading-7 text-slate-600">{{ item.answer }}</p>
                </div>
              </div>
            </div>
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
import { ArrowRight, CheckCircle2, Truck, Plane, Anchor, Package2, Weight, Clock3, Headset, MapPin, ChevronDown, HelpCircle, RefreshCw, UserRound, PackageCheck } from 'lucide-vue-next';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';
import { useCounterAnimation } from '@/composables/useCounterAnimation';
import MainLayout from '@/layouts/MainLayout.vue';

const serviceIcons = [Truck, Plane, Anchor, Package2];
const advantageIcons = [Weight, Clock3, Headset, MapPin];
const workflowIcons = [UserRound, Package2, Truck, PackageCheck];
const brokenClientLogos = ref<string[]>([]);
const openFaq = ref<number | null>(null);

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
  if (intervalId) window.clearInterval(intervalId);
});

</script>
