<script setup>
import { computed } from 'vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'

const t = computed(() => translations[locale.value].hero)
</script>

<template>
  <section v-track-view="'hero'" class="relative overflow-hidden bg-brand-950 text-paper-50">
    <!-- fondo "aurora": manchas de color con desenfoque, en movimiento lento -->
    <div class="pointer-events-none absolute inset-0">
      <div class="animate-aurora-a absolute -right-20 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-700/40 blur-[100px]"></div>
      <div class="animate-aurora-b absolute -bottom-48 right-1/4 h-96 w-96 rounded-full bg-accent-600/20 blur-[110px]"></div>
      <div class="animate-aurora-c absolute left-0 top-1/3 h-72 w-72 rounded-full bg-brand-600/25 blur-[90px]"></div>
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, #faf7f2 1px, transparent 1px); background-size: 28px 28px;"
      ></div>
    </div>

    <div class="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-36">
      <div>
        <span
          v-reveal
          class="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-300"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-accent-400"></span>
          {{ t.badge }}
        </span>

        <h1 v-reveal="80" class="mt-6 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          {{ t.titleA }}
          <span class="text-gradient">{{ t.titleB }}</span>
        </h1>

        <p v-reveal="160" class="mt-6 max-w-xl text-lg leading-relaxed text-paper-100/80 md:text-xl">
          {{ t.paragraph }}
        </p>

        <div v-reveal="240" class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            class="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-base font-bold text-brand-950 shadow-lg shadow-accent-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/30"
          >
            {{ t.ctaPrimary }}
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#servicios"
            class="inline-flex items-center gap-2 rounded-full border border-paper-50/20 px-6 py-4 text-sm font-semibold text-paper-50/90 transition duration-300 hover:border-paper-50/40 hover:bg-paper-50/5"
          >
            {{ t.ctaSecondary }}
          </a>
        </div>
      </div>

      <!-- ilustración: flujo de automatización -->
      <div class="relative hidden h-80 md:block" aria-hidden="true">
        <svg viewBox="0 0 320 260" class="h-full w-full animate-float">
          <g stroke="#e9a23b" stroke-width="2" fill="none" opacity="0.85">
            <path class="animate-dash" d="M40 60 L150 60 L150 130" stroke-linecap="round" />
            <path class="animate-dash" d="M40 130 L110 130" stroke-linecap="round" />
            <path class="animate-dash" d="M150 130 L150 200 L240 200" stroke-linecap="round" />
            <path class="animate-dash" d="M150 130 L240 90" stroke-linecap="round" />
          </g>

          <circle cx="40" cy="60" r="10" fill="#0f2e22" stroke="#e9a23b" stroke-width="2.5" />
          <circle cx="40" cy="130" r="10" fill="#0f2e22" stroke="#e9a23b" stroke-width="2.5" />
          <circle cx="150" cy="130" r="13" fill="#e9a23b" />
          <circle cx="240" cy="90" r="10" fill="#0f2e22" stroke="#f0b862" stroke-width="2.5" />
          <circle cx="240" cy="200" r="10" fill="#0f2e22" stroke="#f0b862" stroke-width="2.5" />

          <rect x="20" y="46" width="40" height="28" rx="6" fill="none" stroke="#faf7f2" stroke-width="1.2" opacity="0.25" />
          <rect x="20" y="116" width="40" height="28" rx="6" fill="none" stroke="#faf7f2" stroke-width="1.2" opacity="0.25" />
        </svg>
      </div>
    </div>
  </section>
</template>
