<script setup>
import { computed } from 'vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'
import IconTag from './icons/IconTag.vue'
import IconUnlock from './icons/IconUnlock.vue'
import IconChat from './icons/IconChat.vue'
import IconAutomation from './icons/IconAutomation.vue'

const t = computed(() => translations[locale.value].confianza)
const iconos = [IconTag, IconUnlock, IconChat, IconAutomation]
</script>

<template>
  <section id="confianza" v-track-view="'confianza'" class="relative overflow-hidden bg-paper-50 py-24">
    <div class="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-brand-800/5 blur-3xl"></div>

    <div class="relative mx-auto max-w-6xl px-6">
      <span
        v-reveal
        class="inline-flex items-center gap-2 rounded-full border border-brand-900/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-800"
      >
        {{ t.badge }}
      </span>
      <h2 v-reveal="60" class="mt-4 text-3xl font-extrabold tracking-tight text-brand-900 md:text-4xl">
        {{ t.heading }}
      </h2>

      <div class="mt-12 grid gap-5 sm:grid-cols-2">
        <div
          v-for="(razon, i) in t.razones"
          :key="razon.titulo"
          v-reveal="i * 80"
          class="rounded-2xl bg-gradient-to-br from-brand-800/20 via-accent-500/15 to-transparent p-px transition duration-300 hover:via-accent-500/40"
        >
          <div
            v-glow
            class="flex h-full items-start gap-4 rounded-[15px] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span class="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-brand-800 to-brand-950 text-accent-400">
              <component :is="iconos[i]" class="h-6 w-6" />
            </span>
            <div>
              <h3 class="font-bold text-brand-900">{{ razon.titulo }}</h3>
              <p class="mt-1 text-sm leading-relaxed text-ink-700">{{ razon.detalle }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Confían en este trabajo -->
      <div
        v-reveal
        v-glow
        class="relative mt-16 overflow-hidden rounded-2xl border border-paper-50/10 bg-brand-950 p-8 text-paper-50 md:p-12"
      >
        <div class="animate-aurora-a pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent-500/15 blur-[80px]"></div>
        <div class="animate-aurora-b pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-brand-600/20 blur-[80px]"></div>

        <p class="relative inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-400">
          <span class="h-px w-6 bg-accent-400"></span>
          {{ t.trustLabel }}
        </p>
        <blockquote class="relative mt-4 max-w-3xl text-xl font-semibold leading-relaxed md:text-2xl">
          {{ t.quoteParts.pre }}<template v-for="(company, i) in t.quoteParts.companies" :key="company"
            ><span class="text-gradient">{{ company }}</span
            ><span v-if="i < t.quoteParts.companies.length - 1">, </span></template
          >{{ t.quoteParts.mid }}
        </blockquote>
        <p class="relative mt-6 max-w-2xl text-sm leading-relaxed text-paper-100/80">
          {{ t.quoteDetail }}
        </p>
      </div>
    </div>
  </section>
</template>
