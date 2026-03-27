<template>
  <div class="min-h-screen">
    <SiteHeader />
    <slot />
    <SiteFooter />
    <FloatingWhatsApp />
  </div>
</template>

<script setup lang="ts">
import FloatingWhatsApp from '@/components/FloatingWhatsApp.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import SiteHeader from '@/components/SiteHeader.vue';
</script>
