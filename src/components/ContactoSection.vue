<script setup>
import { reactive, ref, computed } from 'vue'
import { track } from '@vercel/analytics'
import { locale } from '../composables/useLocale'
import { translations } from '../i18n/translations'
import IconMail from './icons/IconMail.vue'
import IconPhone from './icons/IconPhone.vue'
import IconCheck from './icons/IconCheck.vue'
import { openPrivacy } from '../composables/usePrivacyModal'

const t = computed(() => translations[locale.value].contacto)

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const form = reactive({
  nombre: '',
  email: '',
  tipo: '',
  mensaje: '',
  privacidad: false,
})

const errores = reactive({
  nombre: '',
  email: '',
  tipo: '',
  mensaje: '',
  privacidad: '',
})

const estado = ref('idle') // idle | enviando | ok | error | cooldown
const honeypot = ref('')

// Protección anti-spam, en capas, sin backend propio:
// 1) campo trampa ("_gotcha"): invisible para personas, casi siempre lo
//    rellenan los bots. Formspree además lo reconoce de forma nativa y
//    descarta el envío en su lado si tiene contenido.
// 2) tiempo mínimo: nadie rellena 4 campos en menos de ~2,5s; los bots sí.
// 3) enfriamiento local: evita que el mismo navegador reenvíe en bucle.
const formMountedAt = Date.now()
const MIN_FILL_MS = 2500
const COOLDOWN_MS = 60_000
const COOLDOWN_KEY = 'contact-last-submit'

let formStartTracked = false
function trackFormStart() {
  if (formStartTracked) return
  formStartTracked = true
  track('form_started')
}

function validarEmail(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)
}

function validar() {
  const f = t.value.form
  errores.nombre = form.nombre.trim() ? '' : f.errNombre
  errores.email = validarEmail(form.email) ? '' : f.errEmail
  errores.tipo = form.tipo ? '' : f.errTipo
  errores.mensaje = form.mensaje.trim().length >= 10 ? '' : f.errMensaje
  errores.privacidad = form.privacidad ? '' : f.errPrivacidad

  return !errores.nombre && !errores.email && !errores.tipo && !errores.mensaje && !errores.privacidad
}

async function enviarFormulario() {
  if (!validar()) return

  // Bot detectado (campo trampa relleno o envío demasiado rápido): se le
  // muestra éxito para no darle pistas, pero no se gasta cuota de Formspree.
  if (honeypot.value || Date.now() - formMountedAt < MIN_FILL_MS) {
    track('form_blocked_spam')
    estado.value = 'ok'
    return
  }

  const lastSubmit = Number(localStorage.getItem(COOLDOWN_KEY) || 0)
  if (Date.now() - lastSubmit < COOLDOWN_MS) {
    estado.value = 'cooldown'
    return
  }

  estado.value = 'enviando'

  try {
    const respuesta = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(document.getElementById('form-contacto')),
    })

    if (respuesta.ok) {
      estado.value = 'ok'
      localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
      track('form_submitted', { tipo: form.tipo })
      form.nombre = ''
      form.email = ''
      form.tipo = ''
      form.mensaje = ''
      form.privacidad = false
    } else {
      estado.value = 'error'
      track('form_error')
    }
  } catch {
    estado.value = 'error'
    track('form_error')
  }
}
</script>

<template>
  <section id="contacto" v-track-view="'contacto'" class="relative overflow-hidden bg-brand-950 py-24 text-paper-50">
    <div class="pointer-events-none absolute inset-0">
      <div class="animate-aurora-a absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-700/30 blur-[110px]"></div>
      <div class="animate-aurora-b absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-accent-600/15 blur-[100px]"></div>
    </div>

    <div class="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
      <div>
        <h2 v-reveal class="text-3xl font-extrabold tracking-tight md:text-4xl">
          {{ t.heading }}
        </h2>
        <p v-reveal class="mt-4 max-w-md leading-relaxed text-paper-100/80">
          {{ t.paragraph }}
        </p>

        <ul v-reveal class="mt-6 space-y-3">
          <li v-for="punto in t.puntos" :key="punto" class="flex items-center gap-3 text-sm text-paper-100/80">
            <IconCheck class="h-5 w-5 flex-none text-accent-400" />
            {{ punto }}
          </li>
        </ul>

        <div v-reveal class="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="mailto:josemariabadillo97@hotmail.com"
            class="group flex items-center gap-3 rounded-xl border border-paper-50/15 bg-paper-50/5 px-5 py-4 text-sm font-semibold transition duration-300 hover:border-accent-500/40 hover:bg-paper-50/10"
          >
            <span class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
              <IconMail class="h-5 w-5" />
            </span>
            <span class="flex flex-col">
              <span class="text-xs font-medium uppercase tracking-wide text-paper-100/60">{{ t.emailLabel }}</span>
              josemariabadillo97@hotmail.com
            </span>
          </a>
          <a
            href="tel:+34682572439"
            class="group flex items-center gap-3 rounded-xl border border-paper-50/15 bg-paper-50/5 px-5 py-4 text-sm font-semibold transition duration-300 hover:border-accent-500/40 hover:bg-paper-50/10"
          >
            <span class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-accent-500/15 text-accent-400">
              <IconPhone class="h-5 w-5" />
            </span>
            <span class="flex flex-col">
              <span class="text-xs font-medium uppercase tracking-wide text-paper-100/60">{{ t.phoneLabel }}</span>
              +34 682 57 24 39
            </span>
          </a>
        </div>
      </div>

      <div
        v-reveal="120"
        class="rounded-2xl bg-gradient-to-br from-accent-500/40 via-paper-50/10 to-transparent p-px"
      >
        <form
          v-if="estado !== 'ok'"
          v-glow
          id="form-contacto"
          class="space-y-5 rounded-[15px] bg-paper-50 p-8 text-ink-900"
          novalidate
          @focusin="trackFormStart"
          @submit.prevent="enviarFormulario"
        >
          <!-- Campo trampa anti-spam: invisible para personas, Formspree lo reconoce de forma nativa -->
          <input
            v-model="honeypot"
            type="text"
            name="_gotcha"
            tabindex="-1"
            autocomplete="off"
            class="absolute left-[-9999px] h-0 w-0 opacity-0"
            aria-hidden="true"
          />

          <div>
            <label for="nombre" class="block text-sm font-semibold text-brand-900">{{ t.form.nombreLabel }}</label>
            <input
              id="nombre"
              v-model="form.nombre"
              name="nombre"
              type="text"
              class="mt-1 w-full rounded-xl border border-transparent bg-paper-100 px-4 py-3 text-sm transition focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/30"
              :aria-invalid="!!errores.nombre"
            />
            <p v-if="errores.nombre" class="mt-1 text-sm text-red-600">{{ errores.nombre }}</p>
          </div>

          <div>
            <label for="email" class="block text-sm font-semibold text-brand-900">{{ t.form.emailLabel }}</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              class="mt-1 w-full rounded-xl border border-transparent bg-paper-100 px-4 py-3 text-sm transition focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/30"
              :aria-invalid="!!errores.email"
            />
            <p v-if="errores.email" class="mt-1 text-sm text-red-600">{{ errores.email }}</p>
          </div>

          <div>
            <label for="tipo" class="block text-sm font-semibold text-brand-900">{{ t.form.tipoLabel }}</label>
            <select
              id="tipo"
              v-model="form.tipo"
              name="tipo"
              class="mt-1 w-full rounded-xl border border-transparent bg-paper-100 px-4 py-3 text-sm transition focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/30"
              :aria-invalid="!!errores.tipo"
            >
              <option value="" disabled>{{ t.form.tipoPlaceholder }}</option>
              <option value="Web">{{ t.form.tipoWeb }}</option>
              <option value="Automatización">{{ t.form.tipoAutomatizacion }}</option>
              <option value="No estoy seguro">{{ t.form.tipoNoSeguro }}</option>
            </select>
            <p v-if="errores.tipo" class="mt-1 text-sm text-red-600">{{ errores.tipo }}</p>
          </div>

          <div>
            <label for="mensaje" class="block text-sm font-semibold text-brand-900">{{ t.form.mensajeLabel }}</label>
            <textarea
              id="mensaje"
              v-model="form.mensaje"
              name="mensaje"
              rows="4"
              class="mt-1 w-full rounded-xl border border-transparent bg-paper-100 px-4 py-3 text-sm transition focus:border-accent-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500/30"
              :aria-invalid="!!errores.mensaje"
            ></textarea>
            <p v-if="errores.mensaje" class="mt-1 text-sm text-red-600">{{ errores.mensaje }}</p>
          </div>

          <div>
            <label class="flex items-start gap-2 text-sm text-ink-700">
              <input
                v-model="form.privacidad"
                type="checkbox"
                name="privacidad"
                class="mt-0.5 h-4 w-4 flex-none rounded border-ink-500/40 text-brand-800 focus:ring-accent-500/40"
                :aria-invalid="!!errores.privacidad"
              />
              <span>
                {{ t.form.privacyParts.pre
                }}<button type="button" class="font-semibold text-brand-800 underline underline-offset-2" @click="openPrivacy">{{
                  t.form.privacyParts.link
                }}</button
                >{{ t.form.privacyParts.post }}
              </span>
            </label>
            <p v-if="errores.privacidad" class="mt-1 text-sm text-red-600">{{ errores.privacidad }}</p>
          </div>

          <button
            type="submit"
            class="w-full rounded-full bg-accent-500 px-8 py-4 text-base font-bold text-brand-950 transition duration-300 hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/30 disabled:pointer-events-none disabled:opacity-60"
            :disabled="estado === 'enviando'"
          >
            {{ estado === 'enviando' ? t.form.submitting : t.form.submit }}
          </button>

          <p v-if="estado === 'error'" class="text-sm text-red-500">
            {{ t.form.errorGeneral }}
          </p>
          <p v-if="estado === 'cooldown'" class="text-sm text-ink-500">
            {{ t.form.cooldownMessage }}
          </p>
        </form>

        <div v-else class="rounded-[15px] bg-paper-50 p-8 text-center text-ink-900">
          <span class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
            <IconCheck class="h-6 w-6" />
          </span>
          <p class="mt-4 text-lg font-bold text-brand-900">{{ t.form.successTitle }}</p>
          <p class="mt-2 text-sm text-ink-700">
            {{ t.form.successBody }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
