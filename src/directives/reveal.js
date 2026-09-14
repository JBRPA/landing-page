const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
)

export const vReveal = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      el.classList.add('is-revealed')
      return
    }

    el.classList.add('reveal-init')
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value}ms`
    }
    observer.observe(el)
  },
}
