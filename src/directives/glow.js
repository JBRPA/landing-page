function handlePointerMove(event) {
  const rect = this.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  this.style.setProperty('--glow-x', `${x}%`)
  this.style.setProperty('--glow-y', `${y}%`)
}

export const vGlow = {
  mounted(el) {
    el.classList.add('glow-card')
    el.addEventListener('pointermove', handlePointerMove)
  },
  unmounted(el) {
    el.removeEventListener('pointermove', handlePointerMove)
  },
}
