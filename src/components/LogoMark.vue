<script setup>
defineProps({
  size: {
    type: Number,
    default: 36,
  },
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="var(--color-brand-950, #0f2e22)" />
    <!-- flujo/automatización: dos entradas que confluyen en una salida -->
    <line x1="18" y1="19" x2="45" y2="32" stroke="var(--color-accent-500, #e9a23b)" stroke-width="3" stroke-linecap="round" />
    <line x1="18" y1="45" x2="45" y2="32" stroke="var(--color-accent-500, #e9a23b)" stroke-width="3" stroke-linecap="round" />
    <circle cx="17" cy="19" r="6" fill="var(--color-brand-950, #0f2e22)" stroke="var(--color-accent-500, #e9a23b)" stroke-width="3" />
    <circle cx="17" cy="45" r="6" fill="var(--color-brand-950, #0f2e22)" stroke="var(--color-accent-500, #e9a23b)" stroke-width="3" />
    <circle cx="47" cy="32" r="7" fill="var(--color-accent-500, #e9a23b)" />
  </svg>
</template>
