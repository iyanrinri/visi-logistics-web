import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TrackView from '@/views/TrackView.vue';
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
import ContactView from '@/views/ContactView.vue';
import NewsView from '@/views/NewsView.vue';
import NewsDetailView from '@/views/NewsDetailView.vue';
import GalleryView from '@/views/GalleryView.vue';
import CareersView from '@/views/CareersView.vue';
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue';
import TermsOfServiceView from '@/views/TermsOfServiceView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/track',
      name: 'track',
      component: TrackView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/news/:slug',
      name: 'news-detail',
      component: NewsDetailView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicyView,
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsOfServiceView,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
