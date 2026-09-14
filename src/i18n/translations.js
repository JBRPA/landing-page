export const translations = {
  es: {
    meta: {
      title: 'Jose Badillo — Desarrollo Web & Automatización (RPA)',
      description:
        'Desarrollo web y automatización de procesos (RPA) para pymes y autónomos. Presupuesto cerrado, comunicación directa, sin intermediarios.',
    },
    header: {
      navServicios: 'Servicios',
      navExperiencia: 'Experiencia',
      navComoTrabajamos: 'Cómo trabajamos',
      navFaq: 'FAQ',
      navContacto: 'Contacto',
      cta: 'Pide presupuesto',
      ariaMenu: 'Abrir menú',
      tagline: 'RPA & Desarrollo Web',
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      titleA: 'Automatiza tu negocio.',
      titleB: 'Que la tecnología trabaje por ti.',
      paragraph:
        'Desarrollador con experiencia en RPA, integraciones y desarrollo web. Ayudo a pequeños negocios y pymes a ahorrar tiempo automatizando procesos y a tener presencia online sin complicaciones.',
      ctaPrimary: 'Pide tu presupuesto gratis',
      ctaSecondary: 'Ver servicios',
    },
    servicios: {
      heading: 'Servicios',
      rpa: {
        title: 'Automatización de procesos (RPA)',
        intro:
          '¿Cuánto tiempo pierdes cada semana copiando datos entre programas, respondiendo los mismos correos, o pasando información de una hoja de cálculo a otra a mano? Diseño flujos de automatización que hacen ese trabajo por ti, sin que tengas que tocar nada.',
        casosLabel: 'Casos habituales',
        casos: [
          'Envío automático de correos y notificaciones',
          'Integración entre tu web/CRM y herramientas de facturación',
          'Extracción y organización automática de datos (facturas, pedidos, formularios)',
          'Conexión entre aplicaciones que no se hablan entre sí (WhatsApp, Excel, email, ERP)',
          'Automatización de altas/bajas de usuarios en Active Directory u Office 365',
          'Flujos de tickets e incidencias en Jira, ServiceNow o Remedy (asignación, escalado, cierre automático)',
          'Tareas recurrentes en AWS/Azure (informes, alertas, gestión de recursos)',
        ],
        customDevParts: {
          pre: 'Cuando hace falta más que un flujo visual, también desarrollo a medida con ',
          strong1: 'Java o Python',
          mid: ', con integración directa contra ',
          strong2: 'bases de datos',
          post: ' para cargar, extraer o cruzar información y generar informes automáticos.',
        },
        tech: ['n8n', 'Node-RED', 'Java', 'Python', 'SQL / bases de datos'],
        flexParts: {
          pre: 'Esto no es una lista cerrada: si mañana necesitas algo con ',
          strong: 'envío de SMS, una centralita de llamadas o un servicio como Twilio',
          post:
            ', me estudio su API e integro esa pieza en tu automatización. Trabajo contra cualquier sistema que tenga una API, no solo con las herramientas que ya conozco.',
        },
      },
      web: {
        title: 'Desarrollo web',
        intro:
          'Una web que representa bien tu negocio, carga rápido, y funciona en el móvil. Sin plantillas genéricas ni complicaciones innecesarias.',
        incluyeLabel: 'Incluye',
        incluye: [
          'Diseño adaptado a tu marca',
          'Optimización para que te encuentren en Google',
          'Formulario de contacto funcional',
          'Adaptado a móviles y tablets',
        ],
        idealParts: {
          pre: 'Ideal para ',
          strong: 'restaurantes, clínicas, tiendas, peluquerías',
          post: ' y negocios de servicios locales.',
        },
      },
    },
    tecnologias: {
      heading: 'Tecnologías y sistemas con los que trabajo',
      intro:
        'No parto de cero: llevo tiempo trabajando en entornos reales de empresa con estas herramientas, lo que significa integraciones más robustas y adaptadas a cómo funcionan de verdad los departamentos de IT.',
      bloques: [
        {
          titulo: 'ITSM y gestión de incidencias',
          detalle: 'Remedy, Jira, ServiceNow — automatización de tickets, flujos de aprobación, notificaciones y reporting.',
        },
        {
          titulo: 'Cloud',
          detalle: 'AWS y Azure — automatización de tareas de administración, gestión de recursos, envío de alertas.',
        },
        {
          titulo: 'Microsoft 365 y Active Directory',
          detalle: 'Gestión y automatización de usuarios, permisos, correo corporativo, altas/bajas.',
        },
        {
          titulo: 'Integración de APIs',
          detalle:
            'Conexión con APIs externas (OpenAI, Twilio, pasarelas de SMS, centralitas y otras) y con APIs propias/a medida cuando el sistema del cliente no tiene una integración estándar. No me limito a un catálogo cerrado de herramientas.',
        },
        {
          titulo: 'Desarrollo a medida y bases de datos',
          detalle:
            'Cuando un flujo visual (n8n/Node-RED) se queda corto, desarrollo en Java o Python con acceso directo a bases de datos para cargar, extraer o cruzar información y generar informes.',
        },
        {
          titulo: 'Documentación de procesos',
          detalle:
            'Diagramas de flujo claros de cómo funciona cada automatización, para que el equipo del cliente entienda (y pueda mantener) lo que se ha construido.',
        },
      ],
      closing:
        'Esto es especialmente útil para empresas medianas con departamentos de IT que ya usan estas herramientas y necesitan automatizar tareas repetitivas sin depender de un desarrollo interno a tiempo completo.',
    },
    confianza: {
      badge: 'Por qué trabajar conmigo',
      heading: 'Cuatro razones, sin rodeos',
      razones: [
        {
          titulo: 'Presupuesto cerrado desde el inicio',
          detalle: 'Sabes lo que pagas antes de empezar, sin sorpresas.',
        },
        {
          titulo: 'Sin permanencia ni ataduras',
          detalle: 'Te entrego el proyecto, tú decides si quieres mantenimiento o no.',
        },
        {
          titulo: 'Comunicación directa',
          detalle: 'Hablas conmigo, no con un comercial ni con un departamento de soporte.',
        },
        {
          titulo: 'Experiencia real en automatización',
          detalle: 'No es una moda que acabo de descubrir, llevo tiempo trabajando con estas herramientas.',
        },
      ],
      trustLabel: 'Confían en este trabajo',
      quoteParts: {
        pre: 'Experiencia en automatización de procesos para grandes cuentas (',
        companies: ['Quirónsalud', 'Prosegur', 'Meliá'],
        mid: ') como parte de proyectos desarrollados bajo el paraguas de Telefónica.',
      },
      quoteDetail:
        'Se trata de proyectos de automatización de procesos realizados como parte de servicios prestados por un partner/proveedor de Telefónica para estas compañías — no de una relación comercial directa entre estas empresas y este servicio freelance. Lo comparto porque es la experiencia real que respalda el trabajo que ofrezco hoy.',
    },
    comoTrabajamos: {
      heading: 'Cómo trabajamos',
      pasos: [
        { titulo: 'Cuéntame qué necesitas', detalle: 'Una llamada o mensaje breve para entender tu problema o idea.' },
        { titulo: 'Te paso un presupuesto cerrado', detalle: 'Con alcance, plazos y precio claros, sin letra pequeña.' },
        {
          titulo: 'Desarrollo y pruebas',
          detalle: 'Trabajo el proyecto y te lo enseño en un entorno de pruebas antes de nada definitivo.',
        },
        { titulo: 'Entrega y puesta en marcha', detalle: 'Validamos juntos que todo funciona como esperabas.' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          pregunta: '¿Cuánto tarda un proyecto?',
          respuesta:
            'Depende del alcance. Una web sencilla puede estar lista en 1-2 semanas; una automatización, entre unos días y unas semanas según la complejidad.',
        },
        {
          pregunta: '¿Necesito saber de tecnología para explicarte lo que quiero?',
          respuesta: 'No. Mi trabajo es traducir tu necesidad ("quiero dejar de hacer esto a mano") en la solución técnica adecuada.',
        },
        {
          pregunta: '¿Qué pasa después de la entrega?',
          respuesta:
            'El proyecto es tuyo. Si quieres que me encargue del mantenimiento, te lo ofrezco como servicio aparte; si prefieres gestionarlo tú o con quien quieras, no hay problema.',
        },
        {
          pregunta: '¿Trabajas con negocios pequeños o solo con empresas grandes?',
          respuesta: 'Trabajo con negocios de cualquier tamaño. La mayoría de mis proyectos son para autónomos y pymes.',
        },
      ],
    },
    contacto: {
      heading: 'Hablemos de tu proyecto',
      paragraph:
        '¿Tienes una idea, un proceso que te quita tiempo, o simplemente quieres saber si esto encaja con tu negocio? Cuéntamelo, sin compromiso.',
      puntos: ['Respuesta en menos de 24-48h', 'Primera valoración sin compromiso', 'Presupuesto cerrado antes de empezar'],
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      form: {
        nombreLabel: 'Nombre',
        emailLabel: 'Email',
        tipoLabel: 'Tipo de proyecto',
        tipoPlaceholder: 'Selecciona una opción',
        tipoWeb: 'Web',
        tipoAutomatizacion: 'Automatización',
        tipoNoSeguro: 'No estoy seguro',
        mensajeLabel: 'Mensaje',
        submit: 'Enviar mensaje',
        submitting: 'Enviando…',
        errorGeneral: 'Algo ha fallado al enviar el formulario. Prueba de nuevo o escríbeme directamente por email.',
        cooldownMessage: 'Ya he recibido un mensaje tuyo hace un momento. Dame un par de minutos antes de enviar otro, o escríbeme directamente por email.',
        errNombre: 'Escribe tu nombre.',
        errEmail: 'Escribe un email válido.',
        errTipo: 'Selecciona el tipo de proyecto.',
        errMensaje: 'Cuéntame un poco más (mínimo 10 caracteres).',
        privacyParts: {
          pre: 'He leído y acepto la ',
          link: 'política de privacidad',
          post: '.',
        },
        errPrivacidad: 'Debes aceptar la política de privacidad para continuar.',
        successTitle: '¡Gracias por escribir!',
        successBody: 'He recibido tu mensaje y te responderé lo antes posible.',
      },
    },
    footer: {
      tagline:
        'Desarrollo web y automatización de procesos para pymes y autónomos, con presupuesto cerrado y trato directo de tú a tú.',
      navLabel: 'Navegación',
      contactLabel: 'Contacto',
      city: 'Gijón, España',
      roleLine: 'Jose Maria Badillo Delgado · Desarrollador de software',
      rights: 'Todos los derechos reservados.',
      legalLink: 'Aviso legal y privacidad',
    },
    privacy: {
      title: 'Aviso legal y protección de datos',
      intro:
        'De acuerdo con el Reglamento General de Protección de Datos (RGPD), te informamos de los siguientes aspectos relacionados con el tratamiento de tus datos personales al utilizar el formulario de contacto de esta web.',
      sections: [
        {
          heading: 'Responsable del tratamiento',
          body: 'Jose Maria Badillo Delgado, con actividad en Gijón (Asturias, España). Contacto: josemariabadillo97@hotmail.com.',
        },
        {
          heading: 'Finalidad',
          body: 'Los datos enviados a través del formulario de contacto (nombre, email, tipo de proyecto y mensaje) se usan únicamente para responder a tu consulta y, si sigues adelante, gestionar el proyecto.',
        },
        {
          heading: 'Legitimación',
          body: 'El tratamiento se basa en tu consentimiento, otorgado al marcar la casilla correspondiente y enviar el formulario.',
        },
        {
          heading: 'Destinatarios',
          body: 'El formulario se gestiona a través de Formspree (Formspree, Inc.), proveedor encargado del envío de los mensajes. Los datos no se ceden a terceros con fines comerciales.',
        },
        {
          heading: 'Transferencia internacional de datos',
          body: 'Formspree, Inc. tiene su sede en Estados Unidos, por lo que los datos que envías a través del formulario implican una transferencia internacional fuera del Espacio Económico Europeo. Formspree declara en su propia política de privacidad que aplica medidas para proteger esos datos conforme a la normativa aplicable.',
        },
        {
          heading: 'Conservación',
          body: 'Los datos se conservan mientras sean necesarios para atender tu consulta: hasta 12 meses desde el último contacto si no llega a formalizarse ningún proyecto, o durante toda la relación profesional si se formaliza, y después mientras exista obligación legal de conservarlos (por ejemplo, a efectos fiscales).',
        },
        {
          heading: 'Tus derechos',
          body: 'Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a josemariabadillo97@hotmail.com. Si consideras que el tratamiento de tus datos no se ajusta a la normativa, también puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        },
      ],
      close: 'Cerrar',
    },
  },

  en: {
    meta: {
      title: 'Jose Badillo — Web Development & Automation (RPA)',
      description:
        'Web development and process automation (RPA) for SMEs and freelancers. Fixed quote, direct communication, no middlemen.',
    },
    header: {
      navServicios: 'Services',
      navExperiencia: 'Experience',
      navComoTrabajamos: 'How I work',
      navFaq: 'FAQ',
      navContacto: 'Contact',
      cta: 'Get a quote',
      ariaMenu: 'Open menu',
      tagline: 'RPA & Web Development',
    },
    hero: {
      badge: 'Available for new projects',
      titleA: 'Automate your business.',
      titleB: 'Let technology work for you.',
      paragraph:
        'Developer with experience in RPA, integrations and web development. I help small businesses and SMEs save time by automating processes and get an online presence without the hassle.',
      ctaPrimary: 'Get your free quote',
      ctaSecondary: 'See services',
    },
    servicios: {
      heading: 'Services',
      rpa: {
        title: 'Process automation (RPA)',
        intro:
          "How much time do you lose every week copying data between programs, answering the same emails, or moving information from one spreadsheet to another by hand? I design automation flows that do that work for you, without you having to touch a thing.",
        casosLabel: 'Common use cases',
        casos: [
          'Automatic sending of emails and notifications',
          'Integration between your website/CRM and invoicing tools',
          'Automatic extraction and organization of data (invoices, orders, forms)',
          "Connecting apps that don't talk to each other (WhatsApp, Excel, email, ERP)",
          'Automating user onboarding/offboarding in Active Directory or Office 365',
          'Ticket and incident workflows in Jira, ServiceNow or Remedy (assignment, escalation, automatic closing)',
          'Recurring tasks in AWS/Azure (reports, alerts, resource management)',
        ],
        customDevParts: {
          pre: "When a visual flow isn't enough, I also build custom solutions with ",
          strong1: 'Java or Python',
          mid: ', with direct integration against ',
          strong2: 'databases',
          post: ' to load, extract or cross-reference information and generate automatic reports.',
        },
        tech: ['n8n', 'Node-RED', 'Java', 'Python', 'SQL / databases'],
        flexParts: {
          pre: "This isn't a closed list: if tomorrow you need something with ",
          strong: 'SMS sending, a call center system or a service like Twilio',
          post:
            "I'll study its API and integrate that piece into your automation. I work against any system that has an API, not just the tools I already know.",
        },
      },
      web: {
        title: 'Web development',
        intro:
          'A website that represents your business well, loads fast, and works on mobile. No generic templates or unnecessary complications.',
        incluyeLabel: 'Includes',
        incluye: [
          'Design adapted to your brand',
          'SEO so people can find you on Google',
          'A working contact form',
          'Adapted to mobile and tablet',
        ],
        idealParts: {
          pre: 'Ideal for ',
          strong: 'restaurants, clinics, shops, hair salons',
          post: ' and local service businesses.',
        },
      },
    },
    tecnologias: {
      heading: 'Technologies and systems I work with',
      intro:
        "I'm not starting from scratch: I've spent time working in real company environments with these tools, which means more robust integrations, adapted to how IT departments actually work.",
      bloques: [
        {
          titulo: 'ITSM and incident management',
          detalle: 'Remedy, Jira, ServiceNow — ticket automation, approval workflows, notifications and reporting.',
        },
        {
          titulo: 'Cloud',
          detalle: 'AWS and Azure — automating admin tasks, resource management, sending alerts.',
        },
        {
          titulo: 'Microsoft 365 and Active Directory',
          detalle: 'Managing and automating users, permissions, corporate email, onboarding/offboarding.',
        },
        {
          titulo: 'API integration',
          detalle:
            "Connecting to external APIs (OpenAI, Twilio, SMS gateways, call center systems and others) and to custom/proprietary APIs when the client's system has no standard integration. I'm not limited to a closed catalog of tools.",
        },
        {
          titulo: 'Custom development and databases',
          detalle:
            "When a visual flow (n8n/Node-RED) isn't enough, I develop in Java or Python with direct database access to load, extract or cross-reference information and generate reports.",
        },
        {
          titulo: 'Process documentation',
          detalle: "Clear flow diagrams of how each automation works, so the client's team understands (and can maintain) what's been built.",
        },
      ],
      closing:
        'This is especially useful for mid-sized companies with IT departments that already use these tools and need to automate repetitive tasks without relying on a full-time in-house developer.',
    },
    confianza: {
      badge: 'Why work with me',
      heading: 'Four reasons, no fluff',
      razones: [
        {
          titulo: 'A fixed quote from day one',
          detalle: "You know what you're paying before we start, no surprises.",
        },
        {
          titulo: 'No lock-in',
          detalle: 'I hand over the project, you decide if you want ongoing maintenance or not.',
        },
        {
          titulo: 'Direct communication',
          detalle: 'You talk to me, not a salesperson or a support department.',
        },
        {
          titulo: 'Real automation experience',
          detalle: "This isn't a trend I just discovered — I've been working with these tools for a while.",
        },
      ],
      trustLabel: 'Trusted work',
      quoteParts: {
        pre: 'Experience automating processes for major accounts (',
        companies: ['Quirónsalud', 'Prosegur', 'Meliá'],
        mid: ') as part of projects delivered under the umbrella of Telefónica.',
      },
      quoteDetail:
        "These were process automation projects delivered as part of services provided by a Telefónica partner/vendor for these companies — not a direct business relationship between these companies and this freelance service. I share it because it's the real experience behind the work I offer today.",
    },
    comoTrabajamos: {
      heading: "How we'll work together",
      pasos: [
        { titulo: 'Tell me what you need', detalle: 'A short call or message so I understand your problem or idea.' },
        { titulo: 'I send you a fixed quote', detalle: 'With clear scope, timeline and price, no fine print.' },
        {
          titulo: 'Development and testing',
          detalle: 'I build the project and show it to you in a test environment before anything goes live.',
        },
        { titulo: 'Delivery and launch', detalle: 'We check together that everything works as expected.' },
      ],
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          pregunta: 'How long does a project take?',
          respuesta:
            'It depends on scope. A simple website can be ready in 1-2 weeks; an automation, anywhere from a few days to a few weeks depending on complexity.',
        },
        {
          pregunta: 'Do I need to know about technology to explain what I want?',
          respuesta: 'No. My job is to translate your need ("I want to stop doing this by hand") into the right technical solution.',
        },
        {
          pregunta: 'What happens after delivery?',
          respuesta:
            "The project is yours. If you want me to handle maintenance, I offer that as a separate service; if you'd rather manage it yourself or with someone else, that's no problem.",
        },
        {
          pregunta: 'Do you work with small businesses or only large companies?',
          respuesta: 'I work with businesses of any size. Most of my projects are for freelancers and SMEs.',
        },
      ],
    },
    contacto: {
      heading: "Let's talk about your project",
      paragraph:
        "Do you have an idea, a process that's eating up your time, or just want to know if this is a fit for your business? Tell me about it, no strings attached.",
      puntos: ['Reply within 24-48h', 'Free, no-obligation first look', 'Fixed quote before we start'],
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      form: {
        nombreLabel: 'Name',
        emailLabel: 'Email',
        tipoLabel: 'Project type',
        tipoPlaceholder: 'Select an option',
        tipoWeb: 'Website',
        tipoAutomatizacion: 'Automation',
        tipoNoSeguro: 'Not sure',
        mensajeLabel: 'Message',
        submit: 'Send message',
        submitting: 'Sending…',
        errorGeneral: 'Something went wrong sending the form. Try again or email me directly.',
        cooldownMessage: "I just received a message from you a moment ago. Give it a couple of minutes before sending another, or email me directly.",
        errNombre: 'Please enter your name.',
        errEmail: 'Please enter a valid email.',
        errTipo: 'Please select a project type.',
        errMensaje: 'Tell me a bit more (minimum 10 characters).',
        privacyParts: {
          pre: 'I have read and accept the ',
          link: 'privacy policy',
          post: '.',
        },
        errPrivacidad: 'You must accept the privacy policy to continue.',
        successTitle: 'Thanks for reaching out!',
        successBody: "I've received your message and will get back to you as soon as possible.",
      },
    },
    footer: {
      tagline: 'Web development and process automation for SMEs and freelancers, with a fixed quote and direct, person-to-person communication.',
      navLabel: 'Navigation',
      contactLabel: 'Contact',
      city: 'Gijón, Spain',
      roleLine: 'Jose Maria Badillo Delgado · Software developer',
      rights: 'All rights reserved.',
      legalLink: 'Legal notice & privacy',
    },
    privacy: {
      title: 'Legal notice & data protection',
      intro:
        'In accordance with the General Data Protection Regulation (GDPR), we inform you of the following regarding the processing of your personal data when you use this website\'s contact form.',
      sections: [
        {
          heading: 'Data controller',
          body: 'Jose Maria Badillo Delgado, based in Gijón (Asturias, Spain). Contact: josemariabadillo97@hotmail.com.',
        },
        {
          heading: 'Purpose',
          body: "Data submitted through the contact form (name, email, project type and message) is used only to reply to your enquiry and, if you go ahead, to manage the project.",
        },
        {
          heading: 'Legal basis',
          body: 'Processing is based on your consent, given by checking the corresponding box and submitting the form.',
        },
        {
          heading: 'Recipients',
          body: 'The form is handled through Formspree (Formspree, Inc.), the provider that delivers the messages. Data is not shared with third parties for commercial purposes.',
        },
        {
          heading: 'International data transfer',
          body: "Formspree, Inc. is based in the United States, so data submitted through the form involves an international transfer outside the European Economic Area. Formspree states in its own privacy policy that it takes measures to protect that data in line with applicable law.",
        },
        {
          heading: 'Retention',
          body: "Data is kept for as long as needed to handle your enquiry: up to 12 months from the last contact if no project goes ahead, or for the duration of the professional relationship if it does, and afterwards for as long as required by law (e.g. for tax purposes).",
        },
        {
          heading: 'Your rights',
          body: 'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to josemariabadillo97@hotmail.com. If you believe the processing of your data does not comply with the law, you can also file a complaint with the Spanish Data Protection Agency (AEPD, www.aepd.es).',
        },
      ],
      close: 'Close',
    },
  },
}
