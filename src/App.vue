<script setup>
import { watch } from 'vue'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServiciosSection from './components/ServiciosSection.vue'
import TecnologiasSection from './components/TecnologiasSection.vue'
import ConfianzaSection from './components/ConfianzaSection.vue'
import ComoTrabajamosSection from './components/ComoTrabajamosSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactoSection from './components/ContactoSection.vue'
import TheFooter from './components/TheFooter.vue'
import PrivacyModal from './components/PrivacyModal.vue'
import { locale } from './composables/useLocale'
import { translations } from './i18n/translations'

watch(
  locale,
  (value) => {
    const meta = translations[value].meta
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', value === 'en' ? 'en_US' : 'es_ES')
  },
  { immediate: true },
)
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <ServiciosSection />
    <TecnologiasSection />
    <ConfianzaSection />
    <ComoTrabajamosSection />
    <FaqSection />
    <ContactoSection />
  </main>
  <TheFooter />
  <PrivacyModal />
</template>
