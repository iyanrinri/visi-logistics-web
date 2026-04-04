<template>
  <MainLayout>
    <main>
      <!-- Hero Section -->
      <section id="hero" class="relative min-h-[520px] overflow-hidden bg-[#050f25]">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1900&q=80"
            alt="Careers at Visi Logistics"
            class="careers-hero-image h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[#050f25]/65" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f25]/30 to-[#050f25]/80" />
        </div>

        <div class="relative z-10 shell flex min-h-[520px] items-center py-20">
          <div class="max-w-4xl text-white">
            <span class="careers-hero-eyebrow section-tag bg-white/15 text-sky-200">
              {{ c.hero.eyebrow }}
            </span>
            <h1 class="careers-hero-title mt-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              {{ c.hero.title }}
            </h1>
            <div class="careers-hero-desc mt-6 flex items-start gap-4">
              <div class="mt-1 h-12 w-1 shrink-0 rounded-full bg-sky-400" />
              <p class="text-base leading-8 text-slate-200 md:text-xl md:leading-9">
                {{ c.hero.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Join Us -->
      <section class="bg-white py-24">
        <div class="shell">
          <RevealOnScroll>
            <div class="text-center">
              <span class="section-tag">{{ c.whyJoin.eyebrow }}</span>
              <h2 class="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">
                {{ c.whyJoin.title }}
              </h2>
            </div>
          </RevealOnScroll>

          <div class="mt-16 grid gap-6 md:grid-cols-3">
            <RevealOnScroll
              v-for="(item, index) in c.whyJoin.items"
              :key="item.title"
              :delay="index * 100"
            >
              <article class="why-card group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition-all duration-300 hover:border-sky-200 hover:bg-sky-500 hover:shadow-[0_20px_50px_rgba(22,152,244,0.35)]">
                <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 transition-colors duration-300 group-hover:bg-white/20">
                  <component
                    :is="whyIcons[index]"
                    class="h-7 w-7 text-sky-500 transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 class="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-sky-100">
                  {{ item.description }}
                </p>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <!-- Job Listings -->
      <section class="bg-slate-50 py-24">
        <div class="shell">
          <!-- Header row -->
          <RevealOnScroll>
            <div class="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {{ c.listings.eyebrow }}
                  </span>
                </div>
                <h2 class="mt-3 text-4xl font-extrabold text-slate-900 md:text-5xl">
                  {{ c.listings.title }}
                </h2>
                <p class="mt-2 text-slate-500">
                  {{ subtitle }}
                </p>
              </div>

              <!-- Filters -->
              <div class="flex flex-wrap gap-3">
                <div class="relative">
                  <select
                    v-model="selectedDept"
                    class="appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-9 text-sm font-medium text-slate-700 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  >
                    <option value="">{{ c.listings.allDepartments }}</option>
                    <option v-for="dept in departments" :key="dept" :value="dept">{{ dept }}</option>
                  </select>
                  <ChevronDown class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>

                <div class="relative">
                  <select
                    v-model="selectedLocation"
                    class="appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-9 text-sm font-medium text-slate-700 shadow-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  >
                    <option value="">{{ c.listings.allLocations }}</option>
                    <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
                  </select>
                  <ChevronDown class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <!-- Job Cards -->
          <div class="mt-10 space-y-4">
            <RevealOnScroll
              v-for="(job, index) in filteredJobs"
              :key="job.id"
              :delay="index * 60"
            >
              <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-sky-200 hover:shadow-md">
                <!-- Row header -->
                <button
                  class="flex w-full items-center gap-4 px-6 py-5 text-left"
                  :aria-expanded="expandedJob === job.id"
                  @click="toggleJob(job.id)"
                >
                  <!-- Icon -->
                  <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                    <component :is="jobIcon(job.icon)" class="h-6 w-6" />
                  </div>

                  <!-- Info -->
                  <div class="min-w-0 flex-1">
                    <p class="text-base font-bold text-slate-900 md:text-lg">
                      {{ job.title[language] }}
                    </p>
                    <div class="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <span class="flex items-center gap-1">
                        <BriefcaseBusiness class="h-3.5 w-3.5" />
                        {{ job.department[language] }}
                      </span>
                      <span class="flex items-center gap-1">
                        <MapPin class="h-3.5 w-3.5" />
                        {{ job.location }}
                      </span>
                    </div>
                  </div>

                  <!-- Type badge + expand -->
                  <div class="flex shrink-0 items-center gap-3">
                    <span class="hidden rounded-lg bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 sm:inline-flex">
                      {{ typeLabel(job.type) }}
                    </span>
                    <div
                      class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition"
                      :class="expandedJob === job.id ? 'rotate-180 bg-sky-100 text-sky-600' : ''"
                    >
                      <ChevronDown class="h-4 w-4" />
                    </div>
                  </div>
                </button>

                <!-- Expanded Details -->
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="opacity-0 max-h-0"
                  enter-to-class="opacity-100 max-h-[1200px]"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="opacity-100 max-h-[1200px]"
                  leave-to-class="opacity-0 max-h-0"
                >
                  <div v-if="expandedJob === job.id" class="overflow-hidden border-t border-slate-100">
                    <div class="px-6 py-8">
                      <div class="grid gap-8 md:grid-cols-2">
                        <!-- Responsibilities -->
                        <div>
                          <h4 class="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                            {{ c.listings.responsibilities }}
                          </h4>
                          <ul class="space-y-3">
                            <li
                              v-for="item in job.responsibilities[language]"
                              :key="item"
                              class="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                            >
                              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                              {{ item }}
                            </li>
                          </ul>
                        </div>

                        <!-- Qualifications -->
                        <div>
                          <h4 class="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                            {{ c.listings.qualifications }}
                          </h4>
                          <ul class="space-y-3">
                            <li
                              v-for="item in job.qualifications[language]"
                              :key="item"
                              class="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                            >
                              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                              {{ item }}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <!-- Apply CTA -->
                      <div class="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p class="font-semibold text-slate-800">{{ c.listings.interested }}</p>
                          <p class="mt-1 text-sm text-slate-500">{{ c.listings.interestedDesc }}</p>
                        </div>
                        <a
                          :href="`mailto:${c.listings.email}`"
                          class="inline-flex shrink-0 items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold !text-white shadow-[0_8px_20px_rgba(22,152,244,0.25)] transition hover:bg-sky-400"
                        >
                          <Mail class="h-4 w-4" />
                          {{ c.listings.contactRecruiter }}
                        </a>
                      </div>
                    </div>
                  </div>
                </Transition>
              </article>
            </RevealOnScroll>
          </div>

          <!-- General Application -->
          <RevealOnScroll>
            <div class="mt-12 text-center text-sm text-slate-500">
              {{ c.listings.noRole }}
              <a
                :href="`mailto:${c.listings.email}`"
                class="ml-1 font-semibold !text-sky-500 transition hover:!text-sky-400"
              >
                {{ c.listings.generalApplication }}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  BarChart2,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Globe,
  Languages,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  Truck,
  Zap,
} from 'lucide-vue-next';
import MainLayout from '@/layouts/MainLayout.vue';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';
import { jobs } from '@/data/careers';

const { dictionary, language } = useLanguage();

const c = computed(() => dictionary.value.careers);

const whyIcons = [Zap, BookOpen, ShieldCheck];

const jobIconMap: Record<string, unknown> = {
  building: Building2,
  barChart: BarChart2,
  truck: Truck,
  languages: Languages,
  globe: Globe,
  star: Star,
};

function jobIcon(key: string) {
  return jobIconMap[key] ?? BriefcaseBusiness;
}

function typeLabel(type: string): string {
  const map: Record<string, string> = {
    fullTime: c.value.listings.fullTime,
    partTime: c.value.listings.partTime,
    contract: c.value.listings.contract,
    freelance: c.value.listings.freelance,
  };
  return map[type] ?? type;
}

const selectedDept = ref('');
const selectedLocation = ref('');
const expandedJob = ref<number | null>(null);

const departments = computed(() => {
  const set = new Set(jobs.map((j) => j.department[language.value]));
  return [...set];
});

const locations = computed(() => {
  const set = new Set(jobs.map((j) => j.location));
  return [...set];
});

const filteredJobs = computed(() => {
  return jobs.filter((j) => {
    const deptMatch = !selectedDept.value || j.department[language.value] === selectedDept.value;
    const locMatch = !selectedLocation.value || j.location === selectedLocation.value;
    return deptMatch && locMatch;
  });
});

const subtitle = computed(() => {
  return c.value.listings.subtitle.replace('{count}', String(filteredJobs.value.length));
});

function toggleJob(id: number) {
  expandedJob.value = expandedJob.value === id ? null : id;
}
</script>

<style scoped>
.careers-hero-image {
  animation: heroZoom 8s ease-in-out infinite alternate;
}

@keyframes heroZoom {
  from { transform: scale(1); }
  to   { transform: scale(1.04); }
}

.careers-hero-eyebrow {
  animation: fadeSlideUp 0.7s ease-out both;
}

.careers-hero-title {
  animation: fadeSlideUp 0.7s 0.15s ease-out both;
}

.careers-hero-desc {
  animation: fadeSlideUp 0.7s 0.3s ease-out both;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
