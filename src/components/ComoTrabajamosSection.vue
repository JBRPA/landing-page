<script setup>
import { computed } from 'vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'

const t = computed(() => translations[locale.value].comoTrabajamos)
</script>

<template>
  <section id="como-trabajamos" v-track-view="'como_trabajamos'" class="bg-paper-100 py-24">
    <div class="mx-auto max-w-6xl px-6">
      <h2 v-reveal class="text-3xl font-extrabold tracking-tight text-brand-900 md:text-4xl">
        {{ t.heading }}
      </h2>

      <ol class="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
        <div
          class="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-800/0 via-accent-500/50 to-brand-800/0 md:block"
        ></div>

        <li
          v-for="(paso, i) in t.pasos"
          :key="paso.titulo"
          v-reveal="i * 100"
          class="group relative"
        >
          <span
            class="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-950 text-lg font-bold text-paper-50 shadow-lg shadow-brand-950/20 ring-4 ring-paper-100 transition duration-300 group-hover:scale-110 group-hover:from-accent-400 group-hover:to-accent-600 group-hover:text-brand-950 group-hover:shadow-accent-500/30"
          >
            {{ i + 1 }}
          </span>
          <h3 class="mt-4 font-bold text-brand-900">{{ paso.titulo }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-700">{{ paso.detalle }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
