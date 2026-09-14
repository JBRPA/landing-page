# Landing de servicios — Desarrollo Web & Automatización

Landing page de una sola página (one-page), construida con **Vue 3 + Vite +
Tailwind CSS**. Sitio 100% estático, sin backend propio: el formulario de
contacto se envía a través de [Formspree](https://formspree.io/).

## Marca: nombre y logo

- **Nombre de marca / cabecera:** "Jose Badillo — RPA & Desarrollo Web"
  (nombre + primer apellido, con un descriptor técnico debajo). Es más corto
  y fácil de recordar/decir en voz alta que el nombre legal completo, sigue
  siendo una persona real (no una "empresa" inventada, que iría en contra
  del tono cercano que pediste) y dice explícitamente a qué se dedica. El
  **nombre legal completo** ("Jose Maria Badillo Delgado") se mantiene en el
  pie de página, junto a la ciudad, como dato de transparencia/contacto.
- **Icono:** en vez de un monograma con iniciales, un icono abstracto de
  "flujo/automatización" (dos entradas que confluyen en una salida) en una
  insignia redondeada con los colores de la marca (verde oscuro + ámbar).
  Comunica el tema (automatización de procesos) sin depender de letras, y es
  el mismo componente reutilizable en
  [src/components/LogoMark.vue](src/components/LogoMark.vue), usado en la
  cabecera, el pie de página, el favicon
  ([public/favicon.svg](public/favicon.svg)) y la imagen para redes sociales
  ([public/og-image.png](public/og-image.png)). Si más adelante quieres un
  logo distinto (por ejemplo, uno diseñado por un profesional), solo tienes
  que sustituir esos archivos — el resto del sitio no depende de su diseño
  concreto.

## Idioma (Español / English)

El sitio tiene selector de idioma ES/EN en la cabecera (versión escritorio y
menú móvil), sin librerías de i18n externas:

- **Detección automática**: la primera vez que alguien entra, se mira el
  idioma del navegador (`navigator.languages`). Si empieza por `en`, se
  muestra en inglés; en cualquier otro caso, en español.
- **Elección manual**: al pulsar ES/EN, la preferencia se guarda en
  `localStorage` y se respeta en visitas futuras, ignorando ya la detección
  automática.
- El `<title>` de la pestaña y las meta etiquetas (`description`, `og:title`,
  etc.) también cambian con el idioma.

Todo el texto vive en un único diccionario:
[src/i18n/translations.js](src/i18n/translations.js), con una clave por
sección (`hero`, `servicios`, `contacto`...) y un objeto `es`/`en` dentro de
cada una. Para corregir o ampliar un texto, edita ahí — no hace falta tocar
los componentes `.vue`. La lógica de detección/persistencia está en
[src/composables/useLocale.js](src/composables/useLocale.js).

## SEO y posicionamiento

No hace falta saber de SEO para esto — aquí está todo lo que se suele pedir
antes de publicar un sitio, ya preparado. Explicado sin dar nada por
sabido:

- **`robots.txt`** ([public/robots.txt](public/robots.txt)): le dice a
  Google (y a cualquier buscador) que puede rastrear todo el sitio, y le
  indica dónde está el mapa del sitio (`sitemap.xml`).
- **`sitemap.xml`** ([public/sitemap.xml](public/sitemap.xml)): un listado
  de las páginas del sitio para que Google las encuentre más rápido. Como es
  una landing de una sola página, solo tiene una entrada — es normal y
  correcto, no le falta nada.
- **Enlace canónico** (`<link rel="canonical">` en `index.html`): le dice a
  Google cuál es la URL "oficial" de la página, para evitar que la misma
  web contando dos veces (por ejemplo `tudominio.com` y
  `www.tudominio.com`) se trate como contenido duplicado.
- **Datos estructurados (Schema.org / JSON-LD)**: un bloque de datos
  invisible para el usuario, dentro de `index.html`, que le dice a Google
  explícitamente "esto es un negocio de servicios profesionales, se llama
  así, este es su teléfono/email/ciudad". Ayuda a que Google entienda la
  página más rápido y, a veces, a que aparezcan datos extra (teléfono,
  ubicación) directamente en los resultados de búsqueda.
- **Meta etiquetas para redes sociales** (Open Graph y Twitter/X Card):
  cuando alguien comparta el enlace en WhatsApp, LinkedIn, Twitter/X, etc.,
  se mostrará una tarjeta con título, descripción e imagen en vez de un
  enlace pelado.
- **Favicons completos**: además del icono de la pestaña del navegador
  (`favicon.svg`), se generaron versiones en PNG para Apple
  (`apple-touch-icon.png`) y Android/Chrome (`icon-192.png`,
  `icon-512.png`, referenciados desde `site.webmanifest`), para que el
  icono se vea bien si alguien añade la web a la pantalla de inicio del
  móvil.
- **Un único `<h1>` y jerarquía de títulos correcta**, `<meta name="robots"
  content="index, follow">` explícito, y estructura semántica
  (`<header>`, `<main>`, `<section>`, `<footer>`) — ya estaban bien desde el
  principio, pero merece la pena saber que están comprobados.

### Dominio

El dominio elegido es **automatizatunegocio.dev**, ya puesto en `index.html`
(canonical, Open Graph, Twitter Card, datos estructurados) y en
`public/robots.txt` / `public/sitemap.xml`. Si en algún momento cambias de
dominio, busca `automatizatunegocio.dev` en esos archivos y sustitúyelo.

### Después de publicar (esto ya no es código, es un par de clics)

1. Da de alta el dominio en [Google Search Console](https://search.google.com/search-console)
   (gratis) y envía tu `sitemap.xml` ahí — así Google se entera de que
   existes mucho antes.
2. Opcional pero recomendable: haz lo mismo en
   [Bing Webmaster Tools](https://www.bing.com/webmasters) (cubre Bing y,
   en parte, resultados de ChatGPT/Copilot que citan la web).
3. El posicionamiento real (aparecer arriba en búsquedas) no depende solo
   de esto — depende sobre todo de que la web tenga contenido útil (ya lo
   tiene) y de que otras webs enlacen a la tuya con el tiempo. Esto de
   aquí es la parte técnica, que es la que se hace una vez y ya no hay que
   tocar.

## Analíticas (saber quién visita la web y qué hace)

Se usa **[Vercel Web Analytics](https://vercel.com/docs/analytics)**
(`@vercel/analytics`), no Google Analytics, por dos motivos: es gratis en el
plan Hobby de Vercel (que es donde se despliega el sitio) y, al no usar
cookies ni datos personales, **no obliga a poner un banner de cookies** —
Google Analytics sí lo exigiría por normativa europea.

Solo funciona en el sitio ya desplegado en Vercel (en local, o en otro
hosting, no envía datos — es normal ver un 404 a `_vercel/insights/script.js`
en la consola del navegador durante el desarrollo, no es un error real).

Qué se puede consultar desde el panel de Vercel (pestaña "Analytics" de tu
proyecto), sin instalar nada más:

- **Visitas totales**, de dónde vienen (país, referido) y en qué
  dispositivo (móvil/escritorio).
- **Qué secciones ve la gente**: cada sección de la página (`hero`,
  `servicios`, `tecnologias`, `confianza`, `como_trabajamos`, `faq`,
  `contacto`) manda un evento `section_view` la primera vez que aparece en
  pantalla al hacer scroll — así se ve si, por ejemplo, casi nadie llega a
  leer la sección de FAQ.
- **Si alguien empieza a rellenar el formulario mismo sin llegar a
  enviarlo**: evento `form_started` (al tocar el primer campo).
- **Envíos de formulario reales**: evento `form_submitted` (con qué tipo
  de proyecto eligió) y `form_error` si algo falla.
- **Envíos bloqueados por ser spam**: evento `form_blocked_spam` (ver
  siguiente sección) — así sabes si el formulario está recibiendo ataques
  de bots aunque nunca lleguen a tu bandeja de entrada.

La lógica de estos eventos está en
[src/directives/trackView.js](src/directives/trackView.js) (secciones) y en
[src/components/ContactoSection.vue](src/components/ContactoSection.vue)
(formulario). Si en algún momento quieres analíticas más avanzadas (mapas de
calor, grabaciones de sesión), la alternativa más sencilla de añadir después
sería [Microsoft Clarity](https://clarity.microsoft.com/) (gratis), aunque
esa sí usa cookies y necesitaría aviso de cookies.

## Seguridad del formulario de contacto

Sin backend propio no hay forma de bloquear a un bot al 100%, pero estas tres
capas cubren el caso real que preguntabas (un bot vaciando la cuota de
envíos de Formspree) sin que el usuario legítimo note nada:

1. **Campo trampa ("honeypot")**: hay un campo oculto (`_gotcha`) que una
   persona nunca ve ni rellena, pero que muchos bots sí, porque rellenan
   todos los campos del formulario a ciegas. Formspree reconoce este nombre
   de campo de forma nativa y descarta el envío en su lado; además, el
   sitio comprueba si tiene contenido y, si es así, ni siquiera llega a
   llamar a Formspree.
2. **Tiempo mínimo de relleno**: si el formulario se envía en menos de 2,5
   segundos desde que se cargó la página, se trata como bot (ninguna
   persona lee y rellena 4 campos tan rápido) y tampoco se llama a
   Formspree.
3. **Enfriamiento por navegador**: tras un envío, ese mismo navegador no
   puede volver a enviar hasta pasado 1 minuto (guardado en
   `localStorage`). Evita que un script en bucle dispare envíos repetidos.

En los tres casos en los que se bloquea un envío, no se gasta ni una de las
[50 respuestas mensuales gratuitas de Formspree](https://formspree.io/plans),
porque la petición nunca llega a su servidor.

Si en el futuro ves en las analíticas (`form_blocked_spam`) que sigue
llegando mucho spam a pesar de esto, el siguiente paso sería activar
**reCAPTCHA** desde el propio panel de Formspree (Settings → Spam Filtering)
— no lo he activado por defecto porque requiere que crees una cuenta de
Google reCAPTCHA y lo apruebes tú mismo.

## Protección de datos (RGPD) — importante antes de publicar

El formulario recoge datos personales (nombre, email, mensaje), así que la
normativa europea (RGPD) exige, como mínimo, informar de qué haces con esos
datos y pedir consentimiento explícito. Esto ya está montado, pero con un
aviso importante:

- Hay un **checkbox obligatorio** en el formulario ("He leído y acepto la
  política de privacidad") — sin marcarlo, no se puede enviar. Esto es
  importante: sin ese checkbox, la base de legitimación ("consentimiento")
  que declara el aviso de privacidad no sería real.
- Ese enlace abre un **modal** con un aviso de privacidad
  ([src/components/PrivacyModal.vue](src/components/PrivacyModal.vue),
  textos en [src/i18n/translations.js](src/i18n/translations.js), clave
  `privacy`) con responsable, finalidad, legitimación, destinatarios,
  **transferencia internacional de datos** (Formspree tiene sede en
  EE. UU. — se indica explícitamente, sin inventar un mecanismo de
  transferencia concreto que no he podido verificar que Formspree declare
  públicamente), conservación con un plazo orientativo (12 meses sin
  proyecto formalizado), derechos, y el derecho a reclamar ante la AEPD
  (Agencia Española de Protección de Datos).
**Importante — esto es solo para ti, no está escrito en la página pública a
propósito** (un aviso de "revísalo con un profesional" quedaría raro en un
documento legal que el visitante se toma en serio): el texto del modal es
una plantilla orientativa redactada con cuidado, no asesoramiento legal
certificado. Antes de que el formulario reciba datos reales de clientes,
sería razonable que un gestor/asesoría le echara un vistazo (suele ser
barato incluirlo en su servicio) o que lo generases con una herramienta
especializada. Está bien estructurado y ya cubre los puntos habituales
(incluida la transferencia internacional a Formspree, con sede en EE. UU.,
sin inventar un mecanismo de transferencia concreto que no he podido
confirmar que declaren públicamente) — pero la responsabilidad legal de que
sea exacto para tu caso concreto es tuya, no de este texto.

## Responsive (comprobado en varios tamaños)

Se ha revisado visualmente en móvil pequeño (375px), móvil grande (390px),
tablet vertical (768px), tablet horizontal/portátil pequeño (1024px) y
escritorio (1280px+), sin desbordes horizontales en ningún caso. Un detalle
a tener en cuenta si tocas la cabecera: el menú completo de escritorio
aparece a partir de 1024px (`lg:` en Tailwind) en vez de 768px (`md:`) —
a 768px no cabían el logo, los 5 enlaces, el selector de idioma y el botón
todos a la vez, así que hasta 1024px se usa el menú hamburguesa.

## Placeholders pendientes de rellenar

El nombre, email, teléfono, ciudad y el endpoint de Formspree ya están
rellenados con tus datos reales. Solo queda el dominio (ver sección SEO
justo arriba).

### Formspree

El formulario de contacto está conectado a Formspree y se ha probado con un
envío real — funciona correctamente de principio a fin. El endpoint **no
está escrito en el código** (para no dejarlo a la vista de cualquiera que
mire el repositorio en GitHub, ya que es público): se lee desde una
variable de entorno, `VITE_FORMSPREE_ENDPOINT`.

- **En local**: se lee desde el archivo `.env` (ya creado, con tu endpoint
  real, y excluido de git por `.gitignore` — no se sube nunca). Hay un
  `.env.example` en el repositorio como referencia de qué variable hace
  falta, sin el valor real.
- **En Vercel**: al importar el proyecto, ve a Settings → Environment
  Variables y añade `VITE_FORMSPREE_ENDPOINT` con tu endpoint real como
  valor (Production y Preview). Sin esto, el formulario no funcionará en el
  sitio desplegado.
- Si migras a otro formulario de Formspree en el futuro, solo tienes que
  cambiar el valor de esa variable — en `.env` para local, y en el panel de
  Vercel para producción — sin tocar código.

## Desarrollo local

Requiere [Node.js](https://nodejs.org/) 18 o superior.

```bash
# Instalar dependencias
npm install

# Levantar servidor de desarrollo (con recarga en caliente)
npm run dev
```

Se abrirá en `http://localhost:5173` por defecto.

## Build de producción

```bash
npm run build
```

Genera la versión optimizada en la carpeta `dist/`. Puedes previsualizarla
localmente con:

```bash
npm run preview
```

## Despliegue en Vercel con dominio propio

1. Sube este proyecto a un repositorio de GitHub.
2. Entra en [vercel.com](https://vercel.com/), inicia sesión y pulsa
   **"Add New… → Project"**.
3. Importa el repositorio. Vercel detecta automáticamente que es un proyecto
   Vite/Vue: no hace falta tocar la configuración de build.
4. Al desplegar, tendrás una URL de prueba tipo `tu-proyecto.vercel.app`.
5. Compra tu dominio en un registrador independiente (recomendado:
   [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) por
   precio a coste, o Namecheap/IONOS como alternativas). Evita comprarlo
   directamente en Vercel.
6. En el panel de Vercel, ve a tu proyecto → **Settings → Domains** y añade
   tu dominio propio.
7. Vercel te indicará los registros DNS (normalmente un `CNAME` o registros
   `A`) que debes añadir en el panel de tu registrador de dominio.
8. Espera la propagación DNS (minutos, hasta 24-48h en casos raros). Vercel
   emite el certificado SSL automáticamente en cuanto detecta el dominio.

A partir de ahí, cada `git push` a la rama principal despliega
automáticamente una nueva versión.

## Estructura del proyecto

```
src/
  components/
    TheHeader.vue           Cabecera, navegación y selector de idioma
    HeroSection.vue         Titular principal + CTA
    ServiciosSection.vue    Automatización (RPA) y Desarrollo web
    TecnologiasSection.vue  Herramientas y sistemas de trabajo
    ConfianzaSection.vue    Por qué trabajar conmigo + experiencia (Telefónica)
    ComoTrabajamosSection.vue  Proceso en 4 pasos
    FaqSection.vue          Preguntas frecuentes (acordeón)
    ContactoSection.vue     Formulario de contacto (Formspree + anti-spam)
    TheFooter.vue           Pie de página
    PrivacyModal.vue        Modal de aviso de privacidad
    icons/                  Iconos SVG propios (uno por archivo)
  composables/
    useLocale.js            Detección/cambio de idioma (ES/EN)
    usePrivacyModal.js       Abrir/cerrar el modal de privacidad
  directives/
    reveal.js               Animación al hacer scroll (v-reveal)
    glow.js                 Brillo que sigue al cursor (v-glow)
    trackView.js             Analíticas: qué sección se ha visto (v-track-view)
  i18n/
    translations.js         Todo el texto del sitio, en ES y EN
  App.vue
  main.js
  style.css                 Paleta de colores (variables) y estilos base
```

## Cambiar la paleta de colores

La paleta está centralizada como variables en `src/style.css`, dentro del
bloque `@theme` (Tailwind v4). Por defecto se usa **"Verde bosque + ámbar
cálido"**: transmite estabilidad/confianza sin caer en el azul corporativo
típico, con un acento cálido que evita que el sitio se sienta frío.

```css
--color-brand-950: #0f2e22;  /* fondo oscuro (hero, contacto, franja de confianza) */
--color-brand-900: #16382a;
--color-brand-800: #1b4332;  /* botones y títulos principales */
--color-accent-500: #e9a23b; /* acento cálido (CTA, detalles) */
--color-paper-50: #faf7f2;   /* fondo general, cálido no blanco puro */
```

**Alternativa sugerida** si prefieres un tono distinto — "Azul petróleo +
terracota" (igual de alejada del azul corporativo genérico, con un punto
más sobrio):

```css
--color-brand-950: #0d2b30;
--color-brand-900: #123a41;
--color-brand-800: #1b4e57;
--color-accent-500: #c96f4a;
--color-paper-50: #faf6f1;
```

Para aplicarla, sustituye los valores correspondientes en `src/style.css`;
el resto del sitio usa las clases de Tailwind (`bg-brand-900`, `text-accent-500`,
etc.) así que se actualiza en todos los componentes automáticamente.

## Checklist antes de comprar el dominio y publicar

Un resumen de todo lo anterior, en orden, para no perderte:

- [x] Contenido, diseño, animaciones — hecho.
- [x] Selector de idioma ES/EN — hecho.
- [x] Formulario conectado a Formspree y probado con un envío real — hecho.
- [x] Protección anti-spam del formulario (honeypot, tiempo mínimo,
      enfriamiento) — hecho.
- [x] Checkbox de consentimiento + aviso de privacidad — hecho, **pero
      revisa el texto legal con un profesional antes de publicar de
      verdad** (ver sección "Protección de datos" más arriba).
- [x] SEO técnico (`robots.txt`, `sitemap.xml`, datos estructurados,
      favicons, Open Graph) — hecho.
- [x] Analíticas (Vercel Web Analytics) — hecho, empezará a recoger datos
      en cuanto despliegues en Vercel.
- [x] Responsive comprobado en móvil, tablet y escritorio — hecho.
- [x] Repositorio en GitHub (`JBRPA/landing-page`) — hecho.
- [x] Desplegado en Vercel — hecho (proyecto `landing-page` bajo `dw97's projects`).
- [x] Dominio elegido y ya puesto en el código (`automatizatunegocio.dev`) — hecho.
- [ ] Comprar el dominio en Cloudflare Registrar (si no lo has hecho ya) y
      conectarlo en Vercel (Settings → Domains).
- [ ] Quitar el bloqueo de firewall que impide el acceso a la web, cuando
      esté todo listo para publicar de verdad.
- [ ] Dar de alta el dominio en Google Search Console y enviar el
      `sitemap.xml`.
- [ ] (Recomendado, no bloqueante) Que alguien revise el texto de la
      política de privacidad antes de que el formulario reciba datos
      reales de clientes.

Con eso, no debería faltarte nada técnico para publicar con tranquilidad.

## Qué NO incluye este proyecto (a propósito)

- Backend propio, servidor Node/Python o base de datos.
- Sistema de login o áreas privadas.
- Blog.
- Librerías de componentes pesadas (Vuetify, PrimeVue) o frameworks
  adicionales (Next.js, Nuxt).
