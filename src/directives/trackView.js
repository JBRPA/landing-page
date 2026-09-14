import { track } from '@vercel/analytics'

const seen = new Set()

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const section = entry.target.dataset.trackSection
        if (section && !seen.has(section)) {
          seen.add(section)
          track('section_view', { section })
        }
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.4 },
)

export const vTrackView = {
  mounted(el, binding) {
    if (!binding.value) return
    el.dataset.trackSection = binding.value
    observer.observe(el)
  },
}
