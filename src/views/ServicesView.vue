<template>
  <MainLayout>
    <main>
      <section id="hero" class="relative min-h-[calc(100vh-106px)] overflow-hidden bg-[#050f25]">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1900&q=80"
            alt="Services"
            class="services-hero-image h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[#050f25]/68" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f25]/45 to-[#050f25]/90" />
        </div>

        <div class="relative z-10 shell flex min-h-[calc(100vh-106px)] items-center py-12 md:py-16">
          <div class="max-w-6xl text-white">
            <span class="services-hero-eyebrow section-tag bg-white/15 text-sky-200">{{ heroContent.eyebrow }}</span>
            <h1 class="services-hero-title mt-6 text-4xl font-extrabold leading-tight md:text-7xl">{{ heroContent.title }}</h1>
            <p class="services-hero-description mt-6 max-w-4xl text-base leading-8 text-slate-100 md:text-2xl md:leading-relaxed">
              {{ heroContent.description }}
            </p>
          </div>
        </div>
      </section>

      <section class="shell mt-24">
        <RevealOnScroll>
          <div class="text-center">
            <span class="section-tag">{{ coreServices.eyebrow }}</span>
            <h2 class="mt-5 text-4xl font-extrabold text-slate-900 md:text-6xl">{{ coreServices.title }}</h2>
          </div>
        </RevealOnScroll>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <RevealOnScroll v-for="(service, index) in coreServices.items" :key="service.title" :delay="120 + index * 100">
            <article class="services-core-card flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <div class="services-core-icon mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                <component :is="service.icon" class="h-10 w-10" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900">{{ service.title }}</h3>
              <p class="mt-3 text-base leading-7 text-slate-500">{{ service.description }}</p>
              <ul class="mt-6 space-y-2.5 text-sm text-slate-600">
                <li v-for="bullet in service.bullets" :key="bullet" class="flex items-center justify-center gap-2">
                  <div class="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {{ bullet }}
                </li>
              </ul>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <section class="shell mt-24">
        <div class="grid gap-12 lg:grid-cols-2">
          <div ref="specializedSection">
            <span class="services-specialized-eyebrow section-tag">{{ specialized.eyebrow }}</span>
            <h2 class="services-specialized-title mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">{{ specialized.title }}</h2>
            <p class="services-specialized-desc mt-4 text-lg leading-8 text-slate-600">{{ specialized.description }}</p>

            <div class="mt-8 grid grid-cols-2 gap-4">
              <div
                v-for="(item, index) in specialized.items"
                :key="item.title"
                class="services-specialized-item flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-200 hover:shadow-md"
                :style="{ animationDelay: `${380 + index * 60}ms` }"
              >
                <div class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <component :is="item.icon" class="h-5 w-5" />
                </div>
                <h4 class="text-sm font-semibold text-slate-900">{{ item.title }}</h4>
              </div>
            </div>
          </div>

          <div ref="valueAddedSection">
            <span class="services-value-eyebrow section-tag">{{ valueAdded.eyebrow }}</span>
            <h2 class="services-value-title mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">{{ valueAdded.title }}</h2>

            <div class="mt-8 space-y-6">
              <div
                v-for="(item, index) in valueAdded.items"
                :key="item.title"
                class="services-value-item flex items-start gap-4"
                :style="{ animationDelay: `${300 + index * 80}ms` }"
              >
                <div class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <component :is="item.icon" class="h-6 w-6" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-slate-900">{{ item.title }}</h4>
                  <p class="mt-2 text-base leading-7 text-slate-600">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-24 border-t border-slate-200 bg-slate-50 py-20">
        <div class="shell text-center">
          <RevealOnScroll>
            <h2 class="services-cta-title text-4xl font-extrabold text-slate-900 md:text-6xl">{{ cta.title }}</h2>
            <p class="services-cta-desc mx-auto mt-5 max-w-4xl text-xl text-slate-600 md:text-2xl">{{ cta.description }}</p>
            <div class="services-cta-buttons mt-10 flex flex-wrap items-center justify-center gap-4">
              <button class="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-slate-800">
                <FileText class="h-5 w-5" />
                {{ cta.primary }}
              </button>
              <button class="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-800 shadow-sm transition hover:border-sky-400 hover:text-sky-600">
                <MessageCircle class="h-5 w-5" />
                {{ cta.secondary }}
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { Anchor, Building2, FileText, Flame, MessageCircle, Package, Pill, Plane, Ship, Truck, Warehouse } from 'lucide-vue-next';
import MainLayout from '@/layouts/MainLayout.vue';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

const specializedSection = ref<HTMLElement | null>(null);
const valueAddedSection = ref<HTMLElement | null>(null);
let specializedObserver: IntersectionObserver | null = null;
let valueAddedObserver: IntersectionObserver | null = null;

onMounted(() => {
  if (specializedSection.value && typeof IntersectionObserver !== 'undefined') {
    specializedObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          specializedSection.value?.classList.add('services-specialized-visible');
          specializedObserver?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    specializedObserver.observe(specializedSection.value);
  }

  if (valueAddedSection.value && typeof IntersectionObserver !== 'undefined') {
    valueAddedObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          valueAddedSection.value?.classList.add('services-value-visible');
          valueAddedObserver?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    valueAddedObserver.observe(valueAddedSection.value);
  }
});

onBeforeUnmount(() => {
  specializedObserver?.disconnect();
  valueAddedObserver?.disconnect();
});

const heroContent = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Keahlian Kami',
        title: 'Solusi Logistik Komprehensif.',
        description:
          'Kami menyediakan layanan logistik dari ujung ke ujung, mulai dari charter unit hingga penanganan kargo khusus, disesuaikan untuk efisiensi industri.',
      }
    : {
        eyebrow: 'Our Expertise',
        title: 'Comprehensive Logistics Solutions.',
        description:
          'We provide end-to-end logistics services, from charter units to specialized cargo handling, tailored for industrial efficiency.',
      },
);

const coreServices = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Layanan Inti',
        title: 'Manajemen Freight & Transportasi',
        items: [
          {
            title: 'Kargo Laut',
            description: 'Layanan door-to-door internasional & domestik dengan kemitraan carrier yang luas.',
            bullets: ['LCL (Less Container Load)', 'FCL (Full Container Load)', 'LCT (Landing Craft Tank)'],
            icon: Ship,
          },
          {
            title: 'Kargo Udara',
            description: 'Solusi kargo udara cepat dan aman untuk pengiriman yang sensitif waktu secara global.',
            bullets: ['Door to Door Service', 'Port to Port Service', 'Domestic & International'],
            icon: Plane,
          },
          {
            title: 'Transportasi Darat',
            description: 'Armada truk yang andal untuk distribusi nasional dengan opsi muatan yang fleksibel.',
            bullets: ['FTL (Full Truck Load)', 'LTL (Less Than Truckload)', 'Java - Bali - Sumatra Coverage'],
            icon: Truck,
          },
        ],
      }
    : {
        eyebrow: 'Core Services',
        title: 'Freight & Transport Management',
        items: [
          {
            title: 'Sea Freight',
            description: 'International & Domestic Door-to-Door service with extensive carrier partnerships.',
            bullets: ['LCL (Less Container Load)', 'FCL (Full Container Load)', 'LCT (Landing Craft Tank)'],
            icon: Ship,
          },
          {
            title: 'Air Freight',
            description: 'Fast and secure air cargo solutions for time-sensitive shipments globally.',
            bullets: ['Door to Door Service', 'Port to Port Service', 'Domestic & International'],
            icon: Plane,
          },
          {
            title: 'Land Transport',
            description: 'Reliable trucking fleet for nationwide distribution with flexible load options.',
            bullets: ['FTL (Full Truck Load)', 'LTL (Less Than Truckload)', 'Java - Bali - Sumatra Coverage'],
            icon: Truck,
          },
        ],
      },
);

const specialized = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Keahlian Penanganan',
        title: 'Barang Khusus & Berbahaya',
        description:
          'Penanganan bersertifikat untuk kargo sensitif. Tim kami dilengkapi dengan pengetahuan dan keahlian untuk mengelola pengiriman DG dan produk khusus dengan aman.',
        items: [
          { title: 'Explosive & Gas', icon: Flame },
          { title: 'Toxic & Chemical', icon: Package },
          { title: 'Pharmaceuticals', icon: Pill },
          { title: 'Electronic Parts', icon: Package },
        ],
      }
    : {
        eyebrow: 'Handling Expertise',
        title: 'Specialized & Dangerous Goods',
        description:
          'Certified handling for sensitive cargo. Our team is equipped with the knowledge and expertise to manage DG shipments and special products safely.',
        items: [
          { title: 'Explosive & Gas', icon: Flame },
          { title: 'Toxic & Chemical', icon: Package },
          { title: 'Pharmaceuticals', icon: Pill },
          { title: 'Electronic Parts', icon: Package },
        ],
      },
);

const valueAdded = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Solusi Logistik',
        title: 'Layanan Nilai Tambah',
        items: [
          {
            title: 'Manajemen Pergudangan',
            description: 'Penyimpanan strategis, kontrol inventori, dan layanan sortir di hub utama kami.',
            icon: Warehouse,
          },
          {
            title: 'Customs Brokerage',
            description: 'Formalitas bea cukai yang efisien untuk clearance ekspor/impor melalui udara atau laut.',
            icon: Anchor,
          },
        ],
      }
    : {
        eyebrow: 'Logistics Solutions',
        title: 'Value Added Services',
        items: [
          {
            title: 'Warehousing Management',
            description: 'Strategic storage, inventory control, and sorting services at our main hub.',
            icon: Warehouse,
          },
          {
            title: 'Customs Brokerage',
            description: 'Efficient customs formalities for export/import clearance by air or sea.',
            icon: Building2,
          },
        ],
      },
);

const cta = computed(() =>
  language.value === 'id'
    ? {
        title: 'Siap Mengoptimalkan Rantai Pasok Anda?',
        description: 'Bermitra dengan Visi Logistics untuk solusi transportasi yang andal, skalabel, dan profesional sesuai kebutuhan industri Anda.',
        primary: 'Minta Penawaran Korporat',
        secondary: 'Jadwalkan Konsultasi',
      }
    : {
        title: 'Ready to Optimize Your Supply Chain?',
        description: 'Partner with Visi Logistics for reliable, scalable, and professional transportation solutions tailored to your industry needs.',
        primary: 'Request Corporate Quote',
        secondary: 'Schedule Consultation',
      },
);
</script>
