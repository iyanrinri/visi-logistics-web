<template>
  <MainLayout>
    <main>
      <section id="hero" class="relative min-h-[calc(100vh-106px)] overflow-hidden bg-[#050f25]">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1900&q=80"
            alt="About Visi Logistics"
            class="about-hero-image h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[#050f25]/62" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f25]/40 to-[#050f25]/90" />
        </div>

        <div class="relative z-10 shell flex min-h-[calc(100vh-106px)] items-center py-12 md:py-16">
          <div class="max-w-5xl text-white">
            <span class="section-tag about-hero-eyebrow bg-white/15 text-sky-200">{{ aboutHero.eyebrow }}</span>
            <h1 class="about-hero-title mt-6 text-4xl font-extrabold leading-tight md:text-7xl">{{ aboutHero.title }}</h1>
            <p class="about-hero-description mt-6 text-base leading-8 text-slate-100 md:text-3xl md:leading-tight">{{ aboutHero.description }}</p>
          </div>
        </div>
      </section>

      <section class="shell mt-24">
        <RevealOnScroll>
          <div class="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <span class="section-tag">{{ aboutContent.eyebrow }}</span>
              <h2 class="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">{{ aboutContent.title }}</h2>
              <div class="mt-8 space-y-7 text-lg leading-10 text-slate-600">
                <p
                  v-for="(paragraph, index) in aboutContent.paragraphs"
                  :key="paragraph"
                  class="about-copy-line"
                  :style="{ animationDelay: `${120 + index * 120}ms` }"
                >
                  {{ paragraph }}
                </p>
              </div>
              <blockquote class="mt-8 rounded-2xl bg-slate-100 px-6 py-5 text-3xl italic leading-tight text-slate-700">
                "{{ aboutContent.quote }}"
                <span class="mt-2 block text-sm not-italic font-semibold uppercase tracking-[0.12em] text-slate-400">{{ aboutContent.quoteBy }}</span>
              </blockquote>
            </div>

            <div class="relative pt-6 lg:pt-12">
              <div
                class="about-experience-card absolute left-0 top-0 z-10 rounded-3xl bg-white px-9 py-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.15)]"
              >
                <p class="text-6xl font-black leading-none text-slate-900">{{ animatedExperience }}<span class="text-4xl">+</span></p>
                <p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{{ aboutContent.experience }}</p>
              </div>
              <div class="about-main-visual overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_65px_rgba(15,23,42,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"
                  alt="Visi Logistics office"
                  class="h-[640px] w-full object-cover"
                />
              </div>
              <div
                class="about-overlay-visual absolute -bottom-4 -right-6 w-[45%] overflow-hidden rounded-3xl border border-white/70 shadow-[0_24px_55px_rgba(15,23,42,0.2)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80"
                  alt="Visi Logistics warehouse"
                  class="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section class="mt-24 border-y border-slate-200 bg-white py-20">
        <div class="shell">
          <RevealOnScroll>
            <div class="text-center">
              <span class="section-tag">{{ strengths.eyebrow }}</span>
              <h2 class="mt-5 text-5xl font-extrabold text-slate-900">{{ strengths.title }}</h2>
              <p class="mx-auto mt-5 max-w-3xl text-2xl text-slate-500">{{ strengths.subtitle }}</p>
            </div>
          </RevealOnScroll>

          <div class="mt-12 grid gap-6 lg:grid-cols-3">
            <RevealOnScroll v-for="(item, index) in strengths.items" :key="item.title" :delay="120 + index * 80">
              <article class="about-strength-card h-full rounded-3xl border border-sky-100 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                <div class="about-strength-icon mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <component :is="item.icon" class="h-8 w-8" />
                </div>
                <h3 class="text-2xl font-bold text-slate-900 md:text-[1.95rem] md:leading-tight">{{ item.title }}</h3>
                <p class="mt-4 text-lg leading-8 text-slate-500">{{ item.description }}</p>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section class="shell py-20 text-center md:py-24">
        <RevealOnScroll>
          <h2 class="text-4xl font-extrabold text-slate-900 md:text-6xl">{{ cta.title }}</h2>
          <p class="mx-auto mt-5 max-w-4xl text-xl text-slate-500 md:text-[2rem]">{{ cta.description }}</p>
          <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-xl font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-600">
              <Download class="h-5 w-5" />
              {{ cta.primary }}
            </button>
            <button class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-xl font-semibold text-slate-800 shadow-sm transition hover:border-sky-300 hover:text-sky-600">
              <Mail class="h-5 w-5" />
              {{ cta.secondary }}
            </button>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Download, Mail, Plane, Users, WalletCards } from 'lucide-vue-next';
import MainLayout from '@/layouts/MainLayout.vue';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useCounterAnimation } from '@/composables/useCounterAnimation';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();
const { count } = useCounterAnimation(15, 1800);

const animatedExperience = computed(() => Math.max(1, count.value));

const aboutHero = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Profil Perusahaan',
        title: 'Mitra Andal untuk Distribusi Global.',
        description:
          'PT. Visi Logistik Indonesia telah memberikan layanan terbaik sejak 2011. Kami berkomitmen pada distribusi yang efisien, tepat waktu, dan hemat biaya.',
      }
    : {
        eyebrow: 'Company Profile',
        title: 'Reliable Partner for Global Distribution.',
        description:
          'PT. Visi Logistik Indonesia has been delivering excellence since 2011. We are committed to efficient, timely, and cost-effective distribution.',
      },
);

const aboutContent = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Sejak 2011',
        title: 'Membangun Kepercayaan Lewat Keunggulan Logistik',
        paragraphs: [
          'Visi Logistics beroperasi di bawah manajemen PT. Visi Logistik Indonesia. Berdiri sejak 2011, kami tumbuh menjadi perusahaan dengan pengalaman luas di layanan pengiriman dan logistik.',
          'Dengan dukungan armada transportasi darat mandiri (Single Courier) serta kemitraan kuat dengan maskapai domestik, Pelni, dan pelayaran swasta, kami menunjukkan komitmen tinggi terhadap distribusi yang efektif dan efisien.',
          'Kami dikelola oleh profesional berpengalaman di distribusi domestik dan internasional. Visi kami menjadi perusahaan distribusi dan logistik yang selalu mengutamakan komitmen.',
        ],
        quote: 'Always do your best, and let God do next.',
        quoteBy: 'Motto PT. Visi Logistik Indonesia',
        experience: 'tahun pengalaman',
      }
    : {
        eyebrow: 'Since 2011',
        title: 'Building Trust Through Logistics Excellence',
        paragraphs: [
          'Visi Logistics operates under the management of PT. Visi Logistik Indonesia. Established in 2011, we have grown into a company with extensive experience in express shipping and logistics services.',
          'With support from our independent land transportation fleet (Single Courier) and major partnerships with Domestic Airlines, Pelni, and Private Shipping lines, we demonstrate a high commitment to effective and efficient distribution.',
          'We are managed by experienced professionals trained in domestic and international distribution. Our vision is to be a Distribution & Logistics Services Company that always prioritizes commitment.',
        ],
        quote: 'Always do your best, and let God do next.',
        quoteBy: 'PT. Visi Logistik Indonesia Motto',
        experience: 'years of experience',
      },
);

const strengths = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Keunggulan Kami',
        title: 'Kenapa Bermitra Dengan Kami?',
        subtitle: 'Kami menggabungkan aset, pengalaman, dan teknologi untuk memberikan solusi logistik terbaik.',
        items: [
          {
            title: 'Manajemen Single Courier',
            description: 'Operasional kami dikelola mandiri agar akuntabilitas tinggi dan ketergantungan pihak ketiga bisa diminimalkan.',
            icon: WalletCards,
          },
          {
            title: 'Dukungan Principal',
            description: 'Didukung kemitraan kuat dengan maskapai domestik, Pelni, dan pelayaran swasta sehingga jadwal lebih andal.',
            icon: Plane,
          },
          {
            title: 'Tim Profesional',
            description: 'Dikelola tenaga profesional berpengalaman dalam distribusi logistik domestik dan internasional.',
            icon: Users,
          },
        ],
      }
    : {
        eyebrow: 'Our Strengths',
        title: 'Why Partner With Us?',
        subtitle: 'We combine assets, experience, and technology to provide superior logistics solutions.',
        items: [
          {
            title: 'Single Courier Management',
            description: 'We manage our operations independently (Single Courier) to ensure high accountability and minimize third-party dependency.',
            icon: WalletCards,
          },
          {
            title: 'Principal Support',
            description: 'Backed by strong partnerships with Domestic Airlines, Pelni, and Private Shipping lines, ensuring capacity and reliable schedules.',
            icon: Plane,
          },
          {
            title: 'Professional Team',
            description: 'Managed by trained professionals with years of experience in domestic and international logistics distribution.',
            icon: Users,
          },
        ],
      },
);

const cta = computed(() =>
  language.value === 'id'
    ? {
        title: 'Pelajari Lebih Lanjut Tentang Kami',
        description: 'Unduh profil perusahaan lengkap untuk melihat cakupan layanan, detail armada, dan portofolio klien kami.',
        primary: 'Unduh Profil Perusahaan (PDF)',
        secondary: 'Hubungi Tim Kami',
      }
    : {
        title: 'Learn More About Us',
        description: 'Download our complete company profile to see our full range of services, fleet details, and client portfolio.',
        primary: 'Download PDF Company Profile',
        secondary: 'Contact Our Team',
      },
);
</script>
