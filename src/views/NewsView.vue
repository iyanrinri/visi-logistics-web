<template>
  <MainLayout>
    <main>
      <section id="hero" class="relative min-h-[calc(100vh-106px)] overflow-hidden bg-[#050f25]">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1900&q=80"
            alt="News"
            class="news-hero-image h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[#050f25]/75" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f25]/50 to-[#050f25]/90" />
        </div>

        <div class="relative z-10 shell flex min-h-[calc(100vh-106px)] items-center py-12 md:py-16">
          <div class="max-w-5xl text-white">
            <span class="news-hero-eyebrow section-tag bg-white/15 text-sky-200">{{ heroContent.eyebrow }}</span>
            <h1 class="news-hero-title mt-6 text-4xl font-extrabold leading-tight md:text-7xl">{{ heroContent.title }}</h1>
            <p class="news-hero-description mt-6 max-w-4xl text-base leading-8 text-slate-100 md:text-2xl md:leading-relaxed">
              {{ heroContent.description }}
            </p>
          </div>
        </div>
      </section>

      <section v-if="featuredArticle" class="shell mt-24">
        <RevealOnScroll>
          <div class="grid gap-8 lg:grid-cols-2">
            <RouterLink :to="`/news/${featuredArticle.slug}`" class="overflow-hidden rounded-3xl block">
              <img :src="featuredArticle.image" :alt="featuredArticle.title[language]" class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </RouterLink>
            <div class="flex flex-col justify-center">
              <span class="inline-flex w-fit items-center rounded-lg bg-sky-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-600">
                {{ getCategoryLabel(featuredArticle.category) }}
              </span>
              <span class="mt-3 text-sm font-medium text-slate-500">{{ formatDate(featuredArticle.date) }}</span>
              <h2 class="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">{{ featuredArticle.title[language] }}</h2>
              <p class="mt-6 text-base leading-8 text-slate-600">{{ featuredArticle.excerpt[language] }}</p>
              <RouterLink :to="`/news/${featuredArticle.slug}`" class="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-600 transition hover:gap-3 hover:text-sky-700">
                {{ content.readFullStory }}
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </RouterLink>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section class="shell mt-24">
        <div class="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 class="text-3xl font-extrabold text-slate-900 md:text-4xl">{{ content.recentArticles }}</h2>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="cat in categories"
              :key="cat.value"
              @click="selectedCategory = cat.value"
              class="rounded-full px-5 py-2 text-sm font-semibold transition"
              :class="
                selectedCategory === cat.value
                  ? 'bg-sky-500 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              "
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RevealOnScroll v-for="(article, index) in filteredArticles" :key="article.id" :delay="index * 80">
            <article class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:shadow-2xl">
              <RouterLink :to="`/news/${article.slug}`" class="relative overflow-hidden block">
                <img
                  :src="article.image"
                  :alt="article.title[language]"
                  class="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span
                  class="absolute left-4 top-4 inline-flex items-center rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg"
                  :class="getCategoryColor(article.category)"
                >
                  {{ getCategoryLabel(article.category) }}
                </span>
              </RouterLink>
              <div class="p-6">
                <span class="text-xs font-medium uppercase tracking-wide text-slate-400">{{ formatDate(article.date) }}</span>
                <RouterLink :to="`/news/${article.slug}`">
                  <h3 class="mt-3 text-xl font-bold text-slate-900 transition group-hover:text-sky-600">
                    {{ article.title[language] }}
                  </h3>
                </RouterLink>
                <p class="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{{ article.excerpt[language] }}</p>
                <RouterLink
                  :to="`/news/${article.slug}`"
                  class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:gap-3 hover:text-sky-600"
                >
                  {{ content.readMore }}
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </RouterLink>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <section class="mt-24 bg-slate-50 py-16">
        <div class="shell">
          <RevealOnScroll>
            <div class="text-center">
              <h2 class="text-3xl font-extrabold text-slate-900 md:text-5xl">{{ content.stayAhead }}</h2>
              <p class="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                {{ content.stayAheadDesc }}
              </p>
              <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <RouterLink
                  to="/contact"
                  class="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-lg transition hover:border-slate-400 hover:bg-slate-50"
                >
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {{ content.requestQuote }}
                </RouterLink>
                <a
                  href="#newsletter"
                  class="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
                >
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {{ content.subscribeNow }}
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

interface Article {
  id: number;
  category: string;
  date: string;
  title: {
    en: string;
    id: string;
  };
  excerpt: {
    en: string;
    id: string;
  };
  image: string;
  featured?: boolean;
}

const articles = ref<Article[]>([]);
const selectedCategory = ref<string>('all');
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await fetch('/data/articles.json');
    const data = await response.json();
    articles.value = data.articles;
  } catch (error) {
    console.error('Failed to load articles:', error);
  } finally {
    loading.value = false;
  }
});

const heroContent = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Wawasan & Pembaruan',
        title: 'Berita Terbaru dari Visi Logistics',
        description:
          'Tetap terinformasi dengan pembaruan terbaru tentang tren rantai pasokan, pencapaian perusahaan, dan regulasi industri.',
      }
    : {
        eyebrow: 'Insights & Updates',
        title: 'Latest News from Visi Logistics',
        description:
          'Stay informed with the latest updates on supply chain trends, company milestones, and industry regulations.',
      },
);

const content = computed(() =>
  language.value === 'id'
    ? {
        recentArticles: 'Artikel Terbaru',
        readMore: 'Baca Selengkapnya',
        readFullStory: 'Baca Cerita Lengkap',
        stayAhead: 'Tetap Unggul dalam Persaingan',
        stayAheadDesc:
          'Berlangganan newsletter korporat kami untuk wawasan logistik terbaru dan pembaruan perusahaan.',
        requestQuote: 'Minta Penawaran Korporat',
        subscribeNow: 'Berlangganan Sekarang',
      }
    : {
        recentArticles: 'Recent Articles',
        readMore: 'Read More',
        readFullStory: 'Read Full Story',
        stayAhead: 'Stay Ahead of the Curve',
        stayAheadDesc:
          'Subscribe to our corporate newsletter for the latest logistics insights and company updates.',
        requestQuote: 'Request Corporate Quote',
        subscribeNow: 'Subscribe Now',
      },
);

const categories = computed(() =>
  language.value === 'id'
    ? [
        { value: 'all', label: 'Semua' },
        { value: 'company', label: 'Perusahaan' },
        { value: 'industry', label: 'Industri' },
        { value: 'sustainability', label: 'Keberlanjutan' },
      ]
    : [
        { value: 'all', label: 'All' },
        { value: 'company', label: 'Company' },
        { value: 'industry', label: 'Industry' },
        { value: 'sustainability', label: 'Sustainability' },
      ],
);

const featuredArticle = computed(() => articles.value.find((article) => article.featured));

const filteredArticles = computed(() => {
  const nonFeatured = articles.value.filter((article) => !article.featured);
  if (selectedCategory.value === 'all') {
    return nonFeatured;
  }
  return nonFeatured.filter((article) => article.category === selectedCategory.value);
});

const getCategoryLabel = (category: string): string => {
  const cat = categories.value.find((c) => c.value === category);
  return cat ? cat.label : category;
};

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    company: 'bg-blue-100 text-blue-700',
    industry: 'bg-sky-100 text-sky-700',
    sustainability: 'bg-green-100 text-green-700',
  };
  return colors[category] || 'bg-slate-100 text-slate-700';
};

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString(language.value === 'id' ? 'id-ID' : 'en-US', options);
};
</script>
