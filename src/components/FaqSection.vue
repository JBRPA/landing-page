<script setup>
import { ref, computed, watch } from 'vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'

const t = computed(() => translations[locale.value].faq)
const abierto = ref(0)

watch(locale, () => {
  abierto.value = 0
})

function toggle(i) {
  abierto.value = abierto.value === i ? -1 : i
}
</script>

<template>
  <section id="faq" v-track-view="'faq'" class="bg-paper-50 py-24">
    <div class="mx-auto max-w-3xl px-6">
      <h2 v-reveal class="text-3xl font-extrabold tracking-tight text-brand-900 md:text-4xl">
        {{ t.heading }}
      </h2>

      <div v-reveal class="mt-10 divide-y divide-brand-900/10 rounded-2xl border border-brand-900/10 bg-white">
        <div v-for="(faq, i) in t.items" :key="faq.pregunta">
          <button
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            :aria-expanded="abierto === i"
            @click="toggle(i)"
          >
            <span class="font-semibold text-brand-900">{{ faq.pregunta }}</span>
            <span
              class="flex-none text-xl text-accent-600 transition-transform duration-300"
              :class="{ 'rotate-45': abierto === i }"
            >
              +
            </span>
          </button>
          <Transition name="accordion">
            <div v-if="abierto === i">
              <p class="px-6 pb-5 text-sm leading-relaxed text-ink-700">
                {{ faq.respuesta }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
