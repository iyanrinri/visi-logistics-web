<template>
  <MainLayout>
    <main class="shell pb-12 pt-10">
      <RevealOnScroll>
        <section class="panel rounded-[2rem] p-6 md:p-10">
          <span class="section-tag">{{ dictionary.track.eyebrow }}</span>
          <h1 class="mt-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">{{ dictionary.track.title }}</h1>
          <p class="mt-4 max-w-3xl text-base leading-8 text-slate-600">{{ dictionary.track.description }}</p>

          <form class="mt-8 grid gap-3 md:grid-cols-[1fr_auto]" @submit.prevent="submitTracking">
            <label class="sr-only" for="tracking-input">{{ dictionary.track.label }}</label>
            <input
              id="tracking-input"
              v-model="trackingInput"
              :placeholder="dictionary.track.placeholder"
              class="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-slate-900 outline-none transition focus:border-sky-400"
            />
            <button class="btn-primary rounded-2xl px-6 py-3 font-semibold" type="submit">
              {{ dictionary.track.submit }}
            </button>
          </form>
          <p class="mt-3 text-sm text-slate-500">{{ dictionary.track.helper }}</p>
        </section>
      </RevealOnScroll>

      <section class="mt-8">
        <RevealOnScroll :delay="120">
          <div v-if="isLoading" class="panel rounded-[2rem] p-8 text-center text-slate-600">{{ dictionary.track.loading }}</div>

          <div v-else-if="queryId && !trackingResult" class="panel rounded-[2rem] p-8 text-center">
            <h2 class="text-2xl font-bold text-slate-900">{{ dictionary.track.notFound }}</h2>
          </div>

          <div v-else-if="trackingResult" class="space-y-5">
            <article class="panel rounded-[2rem] p-6 md:p-8">
              <div class="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-500">{{ dictionary.track.trackingId }}</p>
                  <p class="mt-2 text-3xl font-extrabold text-slate-900">{{ trackingResult.id }}</p>
                </div>
                <span class="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">{{ trackingResult.status }}</span>
              </div>

              <div class="mt-6 grid gap-3 md:grid-cols-3">
                <div class="rounded-xl border border-slate-100 p-4">
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-500">{{ dictionary.track.origin }}</p>
                  <p class="mt-2 font-semibold text-slate-900">{{ trackingResult.origin }}</p>
                </div>
                <div class="rounded-xl border border-slate-100 p-4">
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-500">{{ dictionary.track.destination }}</p>
                  <p class="mt-2 font-semibold text-slate-900">{{ trackingResult.destination }}</p>
                </div>
                <div class="rounded-xl border border-slate-100 p-4">
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-500">{{ dictionary.track.serviceType }}</p>
                  <p class="mt-2 font-semibold text-slate-900">{{ trackingResult.service }}</p>
                </div>
                <div class="rounded-xl border border-slate-100 p-4">
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-500">{{ dictionary.track.weight }}</p>
                  <p class="mt-2 font-semibold text-slate-900">{{ trackingResult.weight }}</p>
                </div>
                <div class="rounded-xl border border-slate-100 p-4 md:col-span-2">
                  <p class="text-xs uppercase tracking-[0.18em] text-slate-500">{{ dictionary.track.estimatedDelivery }}</p>
                  <p class="mt-2 font-semibold text-slate-900">{{ trackingResult.estimatedDelivery }}</p>
                </div>
              </div>
            </article>

            <article class="panel rounded-[2rem] p-6 md:p-8">
              <h2 class="text-2xl font-extrabold text-slate-900">{{ dictionary.track.timeline }}</h2>

              <div class="mt-6 space-y-5">
                <div v-for="(event, index) in trackingResult.timeline" :key="`${event.status}-${index}`" class="grid grid-cols-[auto_1fr] gap-4">
                  <div class="flex flex-col items-center">
                    <span class="h-3 w-3 rounded-full bg-sky-500" />
                    <span v-if="index < trackingResult.timeline.length - 1" class="timeline-line mt-1 h-full w-px" />
                  </div>
                  <div>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <h3 class="text-lg font-bold text-slate-900">{{ event.status }}</h3>
                      <span class="text-sm text-slate-500">{{ event.date }} • {{ event.time }}</span>
                    </div>
                    <p class="mt-1 text-sm font-semibold text-slate-700">{{ event.location }}</p>
                    <p class="mt-1 text-sm leading-7 text-slate-600">{{ event.description }}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div v-else class="panel rounded-[2rem] p-8 text-center">
            <h2 class="text-2xl font-bold text-slate-900">{{ dictionary.track.emptyTitle }}</h2>
            <p class="mt-3 text-slate-600">{{ dictionary.track.emptyDescription }}</p>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';
import { createTrackingResult, type TrackingResult } from '@/data/tracking';
import MainLayout from '@/layouts/MainLayout.vue';

const route = useRoute();
const router = useRouter();
const { dictionary, language } = useLanguage();

const trackingInput = ref('');
const isLoading = ref(false);
const trackingResult = ref<TrackingResult | null>(null);

const queryId = computed(() => {
  const raw = route.query.id;
  if (typeof raw !== 'string') {
    return '';
  }

  return raw.trim().toUpperCase();
});

watch(
  queryId,
  (value) => {
    trackingInput.value = value;
    if (!value) {
      trackingResult.value = null;
      return;
    }

    isLoading.value = true;
    window.setTimeout(() => {
      trackingResult.value = createTrackingResult(value, language.value, {
        statuses: dictionary.value.track.statuses,
        events: dictionary.value.track.events,
        serviceNames: dictionary.value.track.serviceNames,
      });
      isLoading.value = false;
    }, 320);
  },
  { immediate: true },
);

watch(language, () => {
  if (!queryId.value) {
    return;
  }

  trackingResult.value = createTrackingResult(queryId.value, language.value, {
    statuses: dictionary.value.track.statuses,
    events: dictionary.value.track.events,
    serviceNames: dictionary.value.track.serviceNames,
  });
});

function submitTracking() {
  const id = trackingInput.value.trim().toUpperCase();
  router.replace({ path: '/track', query: id ? { id } : {} });
}
</script>
