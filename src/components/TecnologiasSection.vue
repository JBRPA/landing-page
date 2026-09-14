<script setup>
import { computed } from 'vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'
import IconTicket from './icons/IconTicket.vue'
import IconCloud from './icons/IconCloud.vue'
import IconUsers from './icons/IconUsers.vue'
import IconPlug from './icons/IconPlug.vue'
import IconFlowDoc from './icons/IconFlowDoc.vue'
import IconDatabase from './icons/IconDatabase.vue'

const t = computed(() => translations[locale.value].tecnologias)
const iconos = [IconTicket, IconCloud, IconUsers, IconPlug, IconDatabase, IconFlowDoc]
</script>

<template>
  <section id="tecnologias" v-track-view="'tecnologias'" class="bg-paper-100 py-24">
    <div class="mx-auto max-w-6xl px-6">
      <h2 v-reveal class="text-3xl font-extrabold tracking-tight text-brand-900 md:text-4xl">
        {{ t.heading }}
      </h2>
      <p v-reveal class="mt-4 max-w-3xl leading-relaxed text-ink-700">
        {{ t.intro }}
      </p>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(bloque, i) in t.bloques"
          :key="bloque.titulo"
          v-reveal="i * 70"
          class="rounded-xl bg-gradient-to-br from-brand-800/20 via-accent-500/15 to-transparent p-px transition duration-300 hover:via-accent-500/35"
        >
          <div
            v-glow
            class="h-full rounded-[11px] bg-paper-50 p-6 transition duration-300 hover:-translate-y-1"
          >
            <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-800/10 text-brand-800">
              <component :is="iconos[i]" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 font-bold text-brand-900">{{ bloque.titulo }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-700">{{ bloque.detalle }}</p>
          </div>
        </div>
      </div>

      <p v-reveal class="mt-10 max-w-3xl leading-relaxed text-ink-700">
        {{ t.closing }}
      </p>
    </div>
  </section>
</template>
