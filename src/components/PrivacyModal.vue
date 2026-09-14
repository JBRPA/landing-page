<script setup>
import { computed } from 'vue'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'
import { privacyOpen, closePrivacy } from '../composables/usePrivacyModal'

const t = computed(() => translations[locale.value].privacy)
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="privacyOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-brand-950/60 p-4 backdrop-blur-sm"
      @click.self="closePrivacy"
    >
      <div class="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-paper-50 p-8 shadow-2xl">
        <div class="flex items-start justify-between gap-4">
          <h2 class="text-xl font-extrabold text-brand-900">{{ t.title }}</h2>
          <button
            type="button"
            class="flex h-8 w-8 flex-none items-center justify-center rounded-full text-ink-500 transition hover:bg-paper-100 hover:text-brand-900"
            :aria-label="t.close"
            @click="closePrivacy"
          >
            ✕
          </button>
        </div>

        <p class="mt-4 text-sm leading-relaxed text-ink-700">
          {{ t.intro }}
        </p>

        <div class="mt-6 space-y-5">
          <div v-for="section in t.sections" :key="section.heading">
            <h3 class="font-bold text-brand-900">{{ section.heading }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-ink-700">{{ section.body }}</p>
          </div>
        </div>

        <button
          type="button"
          class="mt-6 w-full rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-paper-50 transition hover:bg-brand-900"
          @click="closePrivacy"
        >
          {{ t.close }}
        </button>
      </div>
    </div>
  </Transition>
</template>
