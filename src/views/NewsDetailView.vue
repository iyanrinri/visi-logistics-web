<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'
import MainLayout from '@/layouts/MainLayout.vue'
import RevealOnScroll from '@/components/RevealOnScroll.vue'

interface Author {
  name: string
  role: string
}

interface Article {
  id: number
  slug: string
  category: string
  date: string
  author: Author
  readTime: number
  title: {
    en: string
    id: string
  }
  excerpt: {
    en: string
    id: string
  }
  image: string
  content: {
    en: string
    id: string
  }
  tags: string[]
  featured?: boolean
  relatedArticles: number[]
}

const route = useRoute()
const router = useRouter()
const { language } = useLanguage()

const article = ref<Article | null>(null)
const relatedArticles = ref<Article[]>([])
const allArticles = ref<Article[]>([])
const loading = ref(true)
const error = ref(false)

// Fetch article data
const fetchArticle = async () => {
  try {
    loading.value = true
    error.value = false
    
    const response = await fetch('/data/articles.json')
    const data = await response.json()
    allArticles.value = data.articles
    
    // Find article by slug
    const slug = route.params.slug as string
    const foundArticle = data.articles.find((a: Article) => a.slug === slug)
    
    if (!foundArticle) {
      error.value = true
      return
    }
    
    article.value = foundArticle
    
    // Get related articles
    if (foundArticle.relatedArticles && foundArticle.relatedArticles.length > 0) {
      relatedArticles.value = data.articles.filter((a: Article) => 
        foundArticle.relatedArticles.includes(a.id)
      ).slice(0, 2)
    }
  } catch (err) {
    console.error('Failed to load article:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const formattedDate = computed(() => {
  if (!article.value) return ''
  const date = new Date(article.value.date)
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Intl.DateTimeFormat(language.value === 'id' ? 'id-ID' : 'en-US', options).format(date)
})

const categoryLabel = computed(() => {
  if (!article.value) return ''
  const labels: Record<string, Record<string, string>> = {
    company: { en: 'Company News', id: 'Berita Perusahaan' },
    industry: { en: 'Industry Insights', id: 'Wawasan Industri' },
    sustainability: { en: 'Sustainability', id: 'Keberlanjutan' }
  }
  return labels[article.value.category]?.[language.value] || article.value.category
})

const getCategoryLabel = (category: string) => {
  const labels: Record<string, Record<string, string>> = {
    company: { en: 'Company', id: 'Perusahaan' },
    industry: { en: 'Industry', id: 'Industri' },
    sustainability: { en: 'Sustainability', id: 'Keberlanjutan' }
  }
  return labels[category]?.[language.value] || category
}

const goBack = () => {
  router.push('/news')
}

const goToArticle = (slug: string) => {
  router.push(`/news/${slug}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Share functions
const getArticleUrl = () => {
  return window.location.href
}

const shareOnLinkedIn = () => {
  const url = getArticleUrl()
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    '_blank',
    'width=550,height=420'
  )
}

const shareOnWhatsApp = () => {
  if (!article.value) return
  const url = getArticleUrl()
  const text = article.value.title[language.value]
  window.open(
    `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
    '_blank'
  )
}

onMounted(() => {
  fetchArticle()
})
</script>

<template>
  <MainLayout>
    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-sky-500 border-t-transparent"></div>
        <p class="mt-4 text-gray-600">{{ language === 'en' ? 'Loading article...' : 'Memuat artikel...' }}</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error || !article" class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center max-w-md mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          {{ language === 'en' ? 'Article Not Found' : 'Artikel Tidak Ditemukan' }}
        </h2>
        <p class="text-gray-600 mb-8">
          {{ language === 'en' ? 'The article you\'re looking for doesn\'t exist or has been moved.' : 'Artikel yang Anda cari tidak ada atau telah dipindahkan.' }}
        </p>
        <button 
          @click="goBack"
          class="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          {{ language === 'en' ? 'Back to News' : 'Kembali ke Berita' }}
        </button>
      </div>
    </div>

    <!-- Article Content -->
    <div v-else class="bg-gray-50 min-h-screen py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <RevealOnScroll animation="news-text-reveal">
          <nav class="mb-6">
            <button 
              @click="goBack"
              class="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition text-sm font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              {{ language === 'en' ? 'Back to News' : 'Kembali ke Berita' }}
            </button>
          </nav>
        </RevealOnScroll>

        <!-- Category Badge -->
        <RevealOnScroll animation="news-text-reveal" :delay="100">
          <span class="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 text-sm font-bold uppercase tracking-wider rounded-full mb-4">
            {{ categoryLabel }}
          </span>
        </RevealOnScroll>

        <!-- Title -->
        <RevealOnScroll animation="news-text-reveal" :delay="200">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
            {{ article.title[language] }}
          </h1>
        </RevealOnScroll>

        <!-- Meta Info -->
        <RevealOnScroll animation="news-text-reveal" :delay="300">
          <div class="flex flex-wrap items-center gap-6 mb-8 text-gray-600 border-b border-gray-200 pb-6">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                {{ article.author.name.charAt(0) }}
              </div>
              <div>
                <p class="font-semibold text-gray-900">{{ article.author.name }}</p>
                <p class="text-xs text-gray-500">{{ article.author.role }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm">{{ formattedDate }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-sm">{{ article.readTime }} {{ language === 'en' ? 'min read' : 'menit baca' }}</span>
            </div>
          </div>
        </RevealOnScroll>

        <!-- Featured Image -->
        <RevealOnScroll animation="news-slide-from-bottom">
          <div class="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
            <img 
              :src="article.image" 
              :alt="article.title[language]"
              class="w-full h-full object-cover"
            />
          </div>
        </RevealOnScroll>

        <!-- Two Column Layout -->
        <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Main Content - 2/3 -->
          <div class="lg:col-span-2">
            <RevealOnScroll animation="news-slide-from-bottom">
              <div class="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                <!-- Article Content -->
                <div 
                  class="prose prose-lg max-w-none 
                  prose-headings:text-gray-900 prose-headings:font-bold 
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-10 prose-p:text-justify 
                  prose-a:text-sky-600 prose-a:font-medium hover:prose-a:text-sky-700 
                  prose-strong:text-gray-900 prose-strong:font-bold 
                  prose-ul:pl-6 prose-ul:my-8 prose-ul:list-disc 
                  prose-li:text-gray-700 prose-li:my-3 prose-li:pl-2 
                  prose-blockquote:border-l-4 prose-blockquote:border-sky-500 prose-blockquote:bg-sky-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:my-12 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:font-medium prose-blockquote:text-lg 
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8"
                  v-html="article.content[language]"
                ></div>

                <!-- Tags -->
                <div class="mt-12 pt-8 border-t border-gray-200">
                  <h3 class="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                    {{ language === 'en' ? 'Tags' : 'Tag' }}
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in article.tags" 
                      :key="tag"
                      class="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-sky-100 hover:text-sky-700 transition cursor-pointer"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <!-- Sidebar - 1/3 Sticky -->
          <div class="lg:col-span-1">
            <div class="sticky top-8 space-y-6">
              <!-- Share Article -->
              <RevealOnScroll animation="news-slide-from-right">
                <div class="bg-white rounded-xl shadow-lg p-4">
                  <h3 class="text-lg font-bold text-gray-900 mb-4">
                    {{ language === 'en' ? 'Share Article' : 'Bagikan Artikel' }}
                  </h3>
                  <div class="grid grid-cols-2 gap-3">
                    <button 
                      @click="shareOnLinkedIn"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#095196] transition font-medium text-sm"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </button>
                    <button 
                      @click="shareOnWhatsApp"
                      class="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition font-medium text-sm"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              </RevealOnScroll>

              <!-- Related Articles -->
              <RevealOnScroll animation="news-slide-from-right" :delay="100" v-if="relatedArticles.length > 0">
                <div class="bg-white rounded-xl shadow-lg p-4">
                  <h3 class="text-lg font-bold text-gray-900 mb-4">
                    {{ language === 'en' ? 'Related News' : 'Berita Terkait' }}
                  </h3>
                  <div class="space-y-4">
                    <article 
                      v-for="related in relatedArticles" 
                      :key="related.id"
                      @click="goToArticle(related.slug)"
                      class="group cursor-pointer flex gap-3"
                    >
                      <div class="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <img 
                          :src="related.image" 
                          :alt="related.title[language]"
                          class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      <div class="flex-1 min-w-0">
                        <h4 class="font-semibold text-gray-900 group-hover:text-sky-600 transition line-clamp-2 text-sm mb-1">
                          {{ related.title[language] }}
                        </h4>
                        <span class="inline-block px-2 py-0.5 bg-sky-100 text-sky-600 text-xs font-medium rounded mb-1">
                          {{ getCategoryLabel(related.category) }}
                        </span>
                        <p class="text-xs text-gray-500">
                          {{ new Date(related.date).toLocaleDateString(language === 'id' ? 'id-ID' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </RevealOnScroll>

              <!-- Need Solution CTA -->
              <RevealOnScroll animation="news-slide-from-right" :delay="200">
                <div class="bg-[#04102a] rounded-xl shadow-lg p-4 text-white">
                  <h3 class="text-xl font-bold mb-3">
                    {{ language === 'en' ? 'Need a Solution?' : 'Butuh Solusi?' }}
                  </h3>
                  <p class="text-gray-300 text-sm mb-5 leading-relaxed">
                    {{ language === 'en' 
                      ? 'Get in touch with our logistics experts for customized solutions that fit your business needs.' 
                      : 'Hubungi ahli logistik kami untuk solusi yang disesuaikan dengan kebutuhan bisnis Anda.' 
                    }}
                  </p>
                  <RouterLink
                    to="/contact"
                    class="block w-full text-center px-4 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition"
                    style="color: #04102a;"
                  >
                    {{ language === 'en' ? 'Contact Us' : 'Hubungi Kami' }}
                  </RouterLink>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.prose blockquote {
  margin: 2rem 0;
  font-size: 1rem;
}
</style>
