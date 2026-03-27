import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TrackView from '@/views/TrackView.vue';
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
import ContactView from '@/views/ContactView.vue';

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
