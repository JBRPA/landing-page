<script setup>
import { computed } from 'vue'
import LogoMark from './LogoMark.vue'
import IconMail from './icons/IconMail.vue'
import IconPhone from './icons/IconPhone.vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'
import { openPrivacy } from '../composables/usePrivacyModal'

const year = new Date().getFullYear()
const t = computed(() => translations[locale.value].footer)
const header = computed(() => translations[locale.value].header)

const links = computed(() => [
  { href: '#servicios', label: header.value.navServicios },
  { href: '#confianza', label: header.value.navExperiencia },
  { href: '#como-trabajamos', label: header.value.navComoTrabajamos },
  { href: '#faq', label: header.value.navFaq },
  { href: '#contacto', label: header.value.navContacto },
])
</script>

<template>
  <footer class="relative overflow-hidden border-t border-paper-50/10 bg-brand-900 text-paper-50">
    <div class="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-700/20 blur-[100px]"></div>

    <div class="relative mx-auto max-w-6xl px-6 py-16">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#" class="flex items-center gap-3">
            <LogoMark :size="34" />
            <span class="flex flex-col leading-tight">
              <span class="text-base font-bold tracking-tight">Jose Badillo</span>
              <span class="text-xs font-medium text-paper-100/60">{{ header.tagline }}</span>
            </span>
          </a>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-paper-100/70">
            {{ t.tagline }}
          </p>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-paper-100/50">{{ t.navLabel }}</p>
          <ul class="mt-4 space-y-2">
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" class="text-sm text-paper-100/80 transition hover:text-accent-400">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-paper-100/50">{{ t.contactLabel }}</p>
          <ul class="mt-4 space-y-3">
            <li>
              <a
                href="mailto:josemariabadillo97@hotmail.com"
                class="flex items-center gap-2 text-sm text-paper-100/80 transition hover:text-accent-400"
              >
                <IconMail class="h-4 w-4 flex-none" />
                josemariabadillo97@hotmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+34682572439"
                class="flex items-center gap-2 text-sm text-paper-100/80 transition hover:text-accent-400"
              >
                <IconPhone class="h-4 w-4 flex-none" />
                +34 682 57 24 39
              </a>
            </li>
            <li class="pt-1 text-sm text-paper-100/50">{{ t.city }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-3 border-t border-paper-50/10 pt-6 text-xs text-paper-100/50 sm:flex-row sm:items-center sm:justify-between">
        <p>{{ t.roleLine }}</p>
        <div class="flex flex-wrap items-center gap-4">
          <button type="button" class="underline-offset-2 transition hover:text-accent-400 hover:underline" @click="openPrivacy">
            {{ t.legalLink }}
          </button>
          <p>© {{ year }} Jose Maria Badillo Delgado. {{ t.rights }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
