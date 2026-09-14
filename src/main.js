import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import './style.css'
import App from './App.vue'
import { vReveal } from './directives/reveal'
import { vGlow } from './directives/glow'
import { vTrackView } from './directives/trackView'

inject()

const app = createApp(App)
app.directive('reveal', vReveal)
app.directive('glow', vGlow)
app.directive('track-view', vTrackView)
app.mount('#app')
