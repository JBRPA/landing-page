import { ref, watch } from 'vue'

const STORAGE_KEY = 'site-locale'

function detectLocale() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'es' || saved === 'en') return saved

  const browserLangs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]
  const prefersEnglish = browserLangs.some((lang) => lang.toLowerCase().startsWith('en'))
  return prefersEnglish ? 'en' : 'es'
}

export const locale = ref(detectLocale())

watch(
  locale,
  (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value
  },
  { immediate: true },
)

export function setLocale(value) {
  locale.value = value
}
