<script setup>
import { computed } from 'vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'
import IconAutomation from './icons/IconAutomation.vue'
import IconWeb from './icons/IconWeb.vue'
import IconCheck from './icons/IconCheck.vue'

const t = computed(() => translations[locale.value].servicios)
</script>

<template>
  <section id="servicios" v-track-view="'servicios'" class="relative overflow-hidden bg-paper-50 py-24">
    <div
      class="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-800/5 blur-2xl"
    ></div>

    <div class="relative mx-auto max-w-6xl px-6">
      <h2 v-reveal class="text-3xl font-extrabold tracking-tight text-brand-900 md:text-4xl">
        {{ t.heading }}
      </h2>

      <div class="mt-12 grid gap-8 md:grid-cols-2">
        <!-- Automatización / RPA -->
        <div
          v-reveal
          class="rounded-2xl bg-gradient-to-br from-brand-800/25 via-accent-500/20 to-transparent p-px transition duration-300 hover:via-accent-500/40"
        >
          <article
            v-glow
            class="flex h-full flex-col overflow-hidden rounded-[15px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-950 text-accent-400">
              <IconAutomation class="h-7 w-7" />
            </span>
            <h3 class="mt-5 text-xl font-bold text-brand-900">{{ t.rpa.title }}</h3>
            <p class="mt-4 leading-relaxed text-ink-700">{{ t.rpa.intro }}</p>

            <p class="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-500">
              {{ t.rpa.casosLabel }}
            </p>
            <ul class="mt-3 space-y-2">
              <li v-for="caso in t.rpa.casos" :key="caso" class="flex gap-2 text-sm leading-relaxed text-ink-700">
                <IconCheck class="mt-0.5 h-4 w-4 flex-none text-accent-600" />
                <span>{{ caso }}</span>
              </li>
            </ul>

            <p class="mt-6 text-sm leading-relaxed text-ink-700">
              {{ t.rpa.customDevParts.pre }}<strong class="text-brand-800">{{ t.rpa.customDevParts.strong1 }}</strong
              >{{ t.rpa.customDevParts.mid }}<strong class="text-brand-800">{{ t.rpa.customDevParts.strong2 }}</strong
              >{{ t.rpa.customDevParts.post }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tech in t.rpa.tech"
                :key="tech"
                class="rounded-full bg-brand-950/5 px-3 py-1 text-xs font-semibold text-brand-800"
              >
                {{ tech }}
              </span>
            </div>

            <p class="mt-5 rounded-xl bg-brand-950/[0.03] p-4 text-sm leading-relaxed text-ink-700">
              {{ t.rpa.flexParts.pre }}<strong class="text-brand-800">{{ t.rpa.flexParts.strong }}</strong
              >{{ t.rpa.flexParts.post }}
            </p>
          </article>
        </div>

        <!-- Desarrollo web -->
        <div
          v-reveal="120"
          class="rounded-2xl bg-gradient-to-br from-brand-800/25 via-accent-500/20 to-transparent p-px transition duration-300 hover:via-accent-500/40"
        >
          <article
            v-glow
            class="flex h-full flex-col overflow-hidden rounded-[15px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span class="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-950 text-accent-400">
              <IconWeb class="h-7 w-7" />
            </span>
            <h3 class="mt-5 text-xl font-bold text-brand-900">{{ t.web.title }}</h3>
            <p class="mt-4 leading-relaxed text-ink-700">{{ t.web.intro }}</p>

            <p class="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-500">
              {{ t.web.incluyeLabel }}
            </p>
            <ul class="mt-3 space-y-2">
              <li v-for="item in t.web.incluye" :key="item" class="flex gap-2 text-sm leading-relaxed text-ink-700">
                <IconCheck class="mt-0.5 h-4 w-4 flex-none text-accent-600" />
                <span>{{ item }}</span>
              </li>
            </ul>

            <p class="mt-6 text-sm leading-relaxed text-ink-700">
              {{ t.web.idealParts.pre }}<strong class="text-brand-800">{{ t.web.idealParts.strong }}</strong
              >{{ t.web.idealParts.post }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
