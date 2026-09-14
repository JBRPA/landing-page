<script setup>
import { ref, computed } from 'vue'
import LogoMark from './LogoMark.vue'
import { locale, setLocale } from '../composables/useLocale'
import { translations } from '../i18n/translations'

const menuOpen = ref(false)
const t = computed(() => translations[locale.value].header)

const links = computed(() => [
  { href: '#servicios', label: t.value.navServicios },
  { href: '#confianza', label: t.value.navExperiencia },
  { href: '#como-trabajamos', label: t.value.navComoTrabajamos },
  { href: '#faq', label: t.value.navFaq },
  { href: '#contacto', label: t.value.navContacto },
])

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-brand-900/10 bg-paper-50/90 backdrop-blur"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#" class="flex items-center gap-3">
        <LogoMark :size="36" />
        <span class="flex flex-col leading-tight">
          <span class="text-lg font-bold tracking-tight text-brand-900">Jose Badillo</span>
          <span class="text-xs font-medium text-ink-500">{{ t.tagline }}</span>
        </span>
      </a>

      <nav class="hidden gap-8 lg:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="group relative text-sm font-medium text-ink-700 transition hover:text-brand-800"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <div class="hidden items-center gap-0.5 rounded-full border border-brand-900/10 bg-white p-0.5 text-xs font-semibold lg:flex">
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition"
            :class="locale === 'es' ? 'bg-brand-800 text-paper-50' : 'text-ink-500 hover:text-brand-800'"
            @click="setLocale('es')"
          >
            ES
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition"
            :class="locale === 'en' ? 'bg-brand-800 text-paper-50' : 'text-ink-500 hover:text-brand-800'"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>

        <a
          href="#contacto"
          class="hidden rounded-full bg-brand-800 px-5 py-2 text-sm font-semibold text-paper-50 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-md lg:inline-block"
        >
          {{ t.cta }}
        </a>

        <button
          class="flex items-center justify-center rounded-md p-2 text-brand-900 lg:hidden"
          :aria-label="t.ariaMenu"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="menuOpen"
        class="flex flex-col gap-1 border-t border-brand-900/10 bg-paper-50 px-6 py-4 lg:hidden"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="rounded-md px-2 py-2 text-sm font-medium text-ink-700 hover:bg-paper-100"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>

        <div class="mt-2 flex items-center gap-0.5 self-start rounded-full border border-brand-900/10 bg-white p-0.5 text-xs font-semibold">
          <button
            type="button"
            class="rounded-full px-3 py-1.5 transition"
            :class="locale === 'es' ? 'bg-brand-800 text-paper-50' : 'text-ink-500'"
            @click="setLocale('es')"
          >
            ES
          </button>
          <button
            type="button"
            class="rounded-full px-3 py-1.5 transition"
            :class="locale === 'en' ? 'bg-brand-800 text-paper-50' : 'text-ink-500'"
            @click="setLocale('en')"
          >
            EN
          </button>
        </div>

        <a
          href="#contacto"
          class="mt-2 rounded-full bg-brand-800 px-5 py-2 text-center text-sm font-semibold text-paper-50"
          @click="closeMenu"
        >
          {{ t.cta }}
        </a>
      </nav>
    </Transition>
  </header>
</template>
