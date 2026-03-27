<template>
  <MainLayout>
    <main>
      <section id="hero" class="relative min-h-[calc(100vh-106px)] overflow-hidden bg-[#050f25]">
        <div class="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1900&q=80"
            alt="Contact Us"
            class="contact-hero-image h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[#050f25]/75" />
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f25]/50 to-[#050f25]/90" />
        </div>

        <div class="relative z-10 shell flex min-h-[calc(100vh-106px)] items-center py-12 md:py-16">
          <div class="max-w-5xl text-white">
            <span class="contact-hero-eyebrow section-tag bg-white/15 text-sky-200">{{ heroContent.eyebrow }}</span>
            <h1 class="contact-hero-title mt-6 text-4xl font-extrabold leading-tight md:text-7xl">{{ heroContent.title }}</h1>
            <p class="contact-hero-description mt-6 max-w-4xl text-base leading-8 text-slate-100 md:text-2xl md:leading-relaxed">
              {{ heroContent.description }}
            </p>
          </div>
        </div>
      </section>

      <section class="shell mt-24 mb-24">
        <div class="grid gap-12 lg:grid-cols-2">
          <div ref="contactInfoSection">
            <RevealOnScroll>
              <div class="mb-8">
                <span class="section-tag">{{ locationsContent.eyebrow }}</span>
                <h2 class="mt-5 text-4xl font-extrabold text-slate-900 md:text-5xl">{{ locationsContent.title }}</h2>
              </div>
            </RevealOnScroll>

            <div class="contact-info-card space-y-8">
              <div class="contact-info-item">
                <div class="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <Building2 class="h-6 w-6" />
                </div>
                <h3 class="text-xl font-bold text-slate-900">{{ locationsContent.headOffice }}</h3>
                <p class="mt-2 text-sm leading-7 text-slate-600">{{ locationsContent.headOfficeAddress }}</p>
              </div>

              <div class="contact-info-item">
                <div class="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <Warehouse class="h-6 w-6" />
                </div>
                <h3 class="text-xl font-bold text-slate-900">{{ locationsContent.mainWarehouse }}</h3>
                <p class="mt-2 text-sm leading-7 text-slate-600">{{ locationsContent.mainWarehouseAddress }}</p>
              </div>

              <div class="contact-info-item">
                <div class="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <Phone class="h-6 w-6" />
                </div>
                <h3 class="text-xl font-bold text-slate-900">{{ contactInfo.directContact }}</h3>
                <div class="mt-3 space-y-3">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wide text-slate-400">{{ contactInfo.customerService }}</p>
                    <a href="tel:+6287722898663" class="text-base text-slate-900 transition hover:text-sky-500">+62 877 2289 8663</a>
                  </div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wide text-slate-400">{{ contactInfo.sales }}</p>
                    <a href="tel:+62819442221728" class="text-base text-slate-900 transition hover:text-sky-500">+62 819 44222 1728</a>
                  </div>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <Mail class="h-6 w-6" />
                </div>
                <h3 class="text-xl font-bold text-slate-900">{{ contactInfo.sales }}</h3>
                <a href="mailto:sales@visilogistics.com" class="mt-2 block text-base text-slate-900 transition hover:text-sky-500">
                  sales@visilogistics.com
                </a>
              </div>
            </div>
          </div>

          <div ref="contactFormSection">
            <div class="contact-form-card rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <h3 class="contact-form-title text-2xl font-bold text-slate-900">{{ formContent.title }}</h3>

              <form class="mt-6 space-y-6">
                <div class="contact-form-row grid gap-4 md:grid-cols-2">
                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">
                      {{ formContent.firstName }} <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                    />
                    <p class="mt-1 text-xs text-slate-500">{{ formContent.lettersOnly }}</p>
                  </div>
                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">
                      {{ formContent.lastName }} <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                    />
                    <p class="mt-1 text-xs text-slate-500">{{ formContent.lettersOnly }}</p>
                  </div>
                </div>

                <div class="contact-form-row">
                  <label class="mb-2 block text-sm font-semibold text-slate-700">
                    {{ formContent.companyName }} <span class="text-slate-400">({{ formContent.optional }})</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PT. Example Indonesia"
                    class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                  />
                  <p class="mt-1 text-xs text-slate-500">{{ formContent.lettersNumbersHyphens }}</p>
                </div>

                <div class="contact-form-row grid gap-4 md:grid-cols-2">
                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">
                      {{ formContent.emailAddress }} <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                    />
                  </div>
                  <div>
                    <label class="mb-2 block text-sm font-semibold text-slate-700">
                      {{ formContent.phoneNumber }} <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+62 812 3456 7890"
                      class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                    />
                    <p class="mt-1 text-xs text-slate-500">{{ formContent.digitsAndPrefix }}</p>
                  </div>
                </div>

                <div class="contact-form-row">
                  <label class="mb-2 block text-sm font-semibold text-slate-700">
                    {{ formContent.serviceNeeded }} <span class="text-red-500">*</span>
                  </label>
                  <select class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20">
                    <option>{{ formContent.landTransport }}</option>
                    <option>{{ formContent.seaFreight }}</option>
                    <option>{{ formContent.airFreight }}</option>
                    <option>{{ formContent.dangerousGoods }}</option>
                    <option>{{ formContent.warehouse }}</option>
                  </select>
                </div>

                <div class="contact-form-row">
                  <label class="mb-2 block text-sm font-semibold text-slate-700">
                    {{ formContent.message }} <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your shipment details..."
                    class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                  ></textarea>
                  <p class="mt-1 text-xs text-slate-500">{{ formContent.minCharacters }}</p>
                </div>

                <button
                  type="submit"
                  class="contact-form-button w-full rounded-xl bg-sky-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-sky-600"
                >
                  {{ formContent.submitButton }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <section class="shell mt-24">
        <RevealOnScroll>
          <div class="mb-12 text-center">
            <span class="section-tag">{{ locationsContent.eyebrow }}</span>
            <h2 class="mt-5 text-4xl font-extrabold text-slate-900 md:text-6xl">{{ locationsContent.title }}</h2>
          </div>
        </RevealOnScroll>

        <div class="grid gap-8 lg:grid-cols-2">
          <RevealOnScroll :delay="120">
            <div class="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-lg transition hover:shadow-2xl">
              <div class="relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6373211924133!2d106.9056809!3d-6.311284800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed002e2f406d%3A0x52c45ead116a57b8!2sPT.%20Visi%20Logistik%20Indonesia!5e0!3m2!1sid!2sid!4v1774654922332!5m2!1sid!2sid"
                  width="100%"
                  height="320"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="grayscale transition-all duration-500 group-hover:grayscale-0"
                ></iframe>
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 opacity-100 shadow-lg backdrop-blur transition-opacity duration-300 group-hover:opacity-0">
                  {{ locationsContent.hoverToInteract }}
                </div>
              </div>
              <div class="bg-white p-6 text-center transition-colors group-hover:bg-slate-50">
                <h3 class="text-xl font-bold text-slate-900 transition-colors group-hover:text-sky-600">{{ locationsContent.headOffice }}</h3>
                <p class="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-600">{{ locationsContent.headOfficeAddress }}</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll :delay="220">
            <div class="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-lg transition hover:shadow-2xl">
              <div class="relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7275779309343!2d106.9260304!3d-6.2994833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69930018df97b7%3A0x67bbacfe6597815a!2sWarehouse%20Visi%20Logistics!5e0!3m2!1sid!2sid!4v1774654895528!5m2!1sid!2sid"
                  width="100%"
                  height="320"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="grayscale transition-all duration-500 group-hover:grayscale-0"
                ></iframe>
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 opacity-100 shadow-lg backdrop-blur transition-opacity duration-300 group-hover:opacity-0">
                  {{ locationsContent.hoverToInteract }}
                </div>
              </div>
              <div class="bg-white p-6 text-center transition-colors group-hover:bg-slate-50">
                <h3 class="text-xl font-bold text-slate-900 transition-colors group-hover:text-sky-600">{{ locationsContent.mainWarehouse }}</h3>
                <p class="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-600">{{ locationsContent.mainWarehouseAddress }}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { Building2, Mail, Phone, Warehouse } from 'lucide-vue-next';
import MainLayout from '@/layouts/MainLayout.vue';
import RevealOnScroll from '@/components/RevealOnScroll.vue';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

const contactInfoSection = ref<HTMLElement | null>(null);
const contactFormSection = ref<HTMLElement | null>(null);
let contactInfoObserver: IntersectionObserver | null = null;
let contactFormObserver: IntersectionObserver | null = null;

onMounted(() => {
  if (contactInfoSection.value && typeof IntersectionObserver !== 'undefined') {
    contactInfoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          contactInfoSection.value?.classList.add('contact-info-visible');
          contactInfoObserver?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    contactInfoObserver.observe(contactInfoSection.value);
  }

  if (contactFormSection.value && typeof IntersectionObserver !== 'undefined') {
    contactFormObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          contactFormSection.value?.classList.add('contact-form-visible');
          contactFormObserver?.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    contactFormObserver.observe(contactFormSection.value);
  }
});

onBeforeUnmount(() => {
  contactInfoObserver?.disconnect();
  contactFormObserver?.disconnect();
});

const heroContent = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Hubungi Kami',
        title: 'Siap Menggerakkan Bisnis Anda?',
        description:
          'Tim kami siap memberikan solusi logistik terbaik untuk perusahaan Anda. Hubungi kami untuk pertanyaan atau kemitraan korporat.',
      }
    : {
        eyebrow: 'Get In Touch',
        title: 'Ready to Move Your Business?',
        description:
          'Our team is ready to provide the best logistics solutions for your company. Reach out to us for inquiries or corporate partnerships.',
      },
);

const locationsContent = computed(() =>
  language.value === 'id'
    ? {
        eyebrow: 'Lokasi Kami',
        title: 'Kunjungi Fasilitas Kami',
        headOffice: 'Kantor Pusat',
        headOfficeAddress: 'Jl. Bambu Apus Raya No.3, RT.7/RW.5, Bambu Apus, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13890',
        mainWarehouse: 'Gudang Utama',
        mainWarehouseAddress: 'Jl. Pasar Kecapi No.45, RT.001/RW.013, Jatiwarna, Kec. Pd. Melati, Kota Bks, Jawa Barat 17415',
        hoverToInteract: 'Arahkan untuk Berinteraksi',
      }
    : {
        eyebrow: 'Locations',
        title: 'Visit Our Facilities',
        headOffice: 'Head Office',
        headOfficeAddress: 'Jl. Bambu Apus Raya No.3, RT.7/RW.5, Bambu Apus, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13890',
        mainWarehouse: 'Main Warehouse',
        mainWarehouseAddress: 'Jl. Pasar Kecapi No.45, RT.001/RW.013, Jatiwarna, Kec. Pd. Melati, Kota Bks, Jawa Barat 17415',
        hoverToInteract: 'Hover to Interact',
      },
);

const contactInfo = computed(() =>
  language.value === 'id'
    ? {
        directContact: 'Kontak Langsung',
        customerService: 'Layanan Pelanggan',
        sales: 'Penjualan',
      }
    : {
        directContact: 'Direct Contact',
        customerService: 'Customer Service',
        sales: 'Sales',
      },
);

const formContent = computed(() =>
  language.value === 'id'
    ? {
        title: 'Minta Penawaran Korporat',
        firstName: 'Nama Depan',
        lastName: 'Nama Belakang',
        companyName: 'Nama Perusahaan',
        optional: 'opsional',
        emailAddress: 'Alamat Email',
        phoneNumber: 'Nomor Telepon',
        serviceNeeded: 'Layanan yang Dibutuhkan',
        message: 'Pesan',
        submitButton: 'Kirim Permintaan',
        lettersOnly: 'Hanya huruf — tanpa angka atau simbol.',
        lettersNumbersHyphens: 'Huruf, angka, titik, tanda hubung, dan koma saja.',
        digitsAndPrefix: 'Hanya angka, + awalan diperbolehkan (cth. +62...).',
        minCharacters: 'Min. 20 karakter. Deskripsikan kebutuhan logistik Anda dengan jelas.',
        landTransport: 'Transportasi Darat',
        seaFreight: 'Kargo Laut',
        airFreight: 'Kargo Udara',
        dangerousGoods: 'Barang Berbahaya',
        warehouse: 'Pergudangan',
      }
    : {
        title: 'Request Corporate Quote',
        firstName: 'First Name',
        lastName: 'Last Name',
        companyName: 'Company Name',
        optional: 'optional',
        emailAddress: 'Email Address',
        phoneNumber: 'Phone Number',
        serviceNeeded: 'Service Needed',
        message: 'Message',
        submitButton: 'Submit Request',
        lettersOnly: 'Letters only — no numbers or symbols.',
        lettersNumbersHyphens: 'Letters, numbers, dots, hyphens, and commas only.',
        digitsAndPrefix: 'Digits only, + prefix allowed (e.g. +62...).',
        minCharacters: 'Min. 20 characters. Describe your logistics needs clearly.',
        landTransport: 'Land Transport',
        seaFreight: 'Sea Freight',
        airFreight: 'Air Freight',
        dangerousGoods: 'Dangerous Goods',
        warehouse: 'Warehouse',
      },
);
</script>
