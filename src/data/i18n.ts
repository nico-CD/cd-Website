export type Language = 'en' | 'es';

export interface FAQEntry {
    q: string;
    a: string;
}

export interface ArticleEntry {
    id: string;
    title: string;
    description: string;
    content: string;
    date: string;
    readTime: string;
}

export interface I18nContent {
    nav: {
        home: string;
        faq: string;
        articles: string;
        blueprint: string; // We keep this key name to prevent breaking component imports
        privacy: string;
        terms: string;
        strategy: string;
    };
    success: {
        title: string;
        titleItalic: string;
        description: string;
        founder: string;
        cta: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
        audit: string;
        badge1: string;
        badge2: string;
        badge3: string;
    };
    pageTitles: {
        faq: { main: string; accent: string };
        articles: { main: string; accent: string };
    };
    calculator: {
        title: string;
        titleItalic: string;
        subtitle: string;
        efficiencyInput: string;
        totalPeople: string;
        manualHours: string;
        projectedGain: string;
        manualRecovery: string;
        totalHoursRecovered: string;
        capacityImpact: string;
        scaleMonitor: string;
        growthPotential: string;
        summaryTemplate: string;
        bookStrategy: string;
        successTitle: string;
        successSub: string;
        operationalStress: string;
    };
    privacyPolicy: {
        title: string;
        titleMain: string;
        titleAccent: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
    termsOfService: {
        title: string;
        titleMain: string;
        titleAccent: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
    faqs: FAQEntry[];
    articles: ArticleEntry[];
    articleLabels: {
        abstract: string;
        technicalSpecs: string;
        integrity: string;
        integrityValue: string;
        protocol: string;
        protocolValue: string;
        latency: string;
        latencyValue: string;
        downloadPdf: string;
        shareEntry: string;
        backToArchive: string;
    };
}

export const i18nData: Record<Language, I18nContent> = {
    en: {
        nav: {
            home: "Home",
            faq: "FAQ",
            articles: "Resources",
            blueprint: "GET STARTED",
            privacy: "Privacy",
            terms: "Terms",
            strategy: "Book a 15-min call"
        },
        success: {
            title: "Request ",
            titleItalic: "Received.",
            description: "We'll review your details and get back to you within 24 hours.",
            founder: "- Nico Carrillo",
            cta: "Return to Home"
        },
        pageTitles: {
            faq: { main: "Frequently Asked", accent: "Questions" },
            articles: { main: "Shop", accent: "Resources" }
        },
        hero: {
            title: "Stop losing clients to",
            subtitle: "Money made. Time saved. Less chaos.",
            cta: "Book a call",
            audit: "Book a call",
            badge1: "TRUSTED LOCALLY",
            badge2: "FAST & RELIABLE",
            badge3: "MOBILE FRIENDLY"
        },
        calculator: {
            title: "Reclaim ",
            titleItalic: "Every Hour.",
            subtitle: "Automating your manual tasks has a direct impact on your bottom line. We calculate your potential ROI before we write a single line of code.",
            efficiencyInput: "Efficiency Input",
            totalPeople: "Total People",
            manualHours: "Manual Hours / Wk",
            projectedGain: "Projected Gain",
            manualRecovery: "Manual Recovery",
            totalHoursRecovered: "Total Hours Recovered",
            capacityImpact: "Capacity Impact",
            scaleMonitor: "Scalability Monitor",
            growthPotential: "Growth Potential",
            summaryTemplate: "Reclaiming {ftu} FTU means winning back the actual capacity of over {wholeFtu} additional full-time operator(s). We don't just save time; we recover your team's productive capacity without adding a single dollar to your payroll.",
            bookStrategy: "15-min call",
            successTitle: "Analysis Complete.",
            successSub: "Your custom ROI breakdown has been engineered. Download the PDF and book your session below.",
            operationalStress: "Operational Stress"
        },
        privacyPolicy: {
            title: "Privacy Policy",
            titleMain: "Privacy",
            titleAccent: "Policy",
            lastUpdated: "Last updated: September 25, 2026",
            sections: [
                {
                    title: "01. Who we are",
                    content: "Carrillo Dynamics LLC (\"Carrillo Dynamics,\" \"we,\" \"us\") builds systems and automations for local service businesses. We are based in Chicago, Illinois. Contact: engineering@carrillodynamics.com."
                },
                {
                    title: "02. What we collect",
                    content: "We collect information you choose to share: name, email, company details, and notes you send by email or through our booking calendar (Calendly). If you browse our sites, standard technical data such as IP address, browser type, and pages viewed may be collected by our hosting providers for security and performance."
                },
                {
                    title: "03. How we use information",
                    content: "We use your information to respond to inquiries, schedule 15-min calls, deliver project work, improve our sites, and meet legal obligations. We do not sell your personal information."
                },
                {
                    title: "04. Sharing",
                    content: "We use trusted processors to operate the business (for example hosting, email, and Calendly). They only process data as needed to provide those services. We may disclose information if required by law."
                },
                {
                    title: "05. Demo and portfolio sites",
                    content: "The trade sites hosted on subdomains such as hvac.carrillodynamics.com, plumbing.carrillodynamics.com, and related demo URLs are demonstration and portfolio demos built by Carrillo Dynamics. They are not live customer businesses. Phone numbers shown on those demos are fictional (for example 555 numbers). Booking links and engineering@carrillodynamics.com contact Carrillo Dynamics, not an independent trade company."
                },
                {
                    title: "06. Cookies and analytics",
                    content: "Our sites may use essential cookies to function. If we use analytics tools, they help us understand aggregate traffic. You can control cookies through your browser settings."
                },
                {
                    title: "07. Retention and security",
                    content: "We keep project and inquiry records as long as needed for the relationship and legal requirements, then delete or anonymize them when no longer needed. We take reasonable steps to protect data, but no online system is perfectly secure."
                },
                {
                    title: "08. Your choices",
                    content: "Email engineering@carrillodynamics.com to request access, correction, or deletion of personal information we hold about you, subject to applicable law. If you booked a call through Calendly, you can also manage that booking in Calendly."
                },
                {
                    title: "09. Children",
                    content: "Our services are directed to businesses and adults. We do not knowingly collect personal information from children under 13."
                },
                {
                    title: "10. Changes",
                    content: "We may update this policy from time to time. The \"Last updated\" date at the top will change when we do. Continued use of the sites after updates means you accept the revised policy."
                },
                {
                    title: "11. Contact",
                    content: "Questions about privacy: engineering@carrillodynamics.com. Carrillo Dynamics LLC, Chicago, IL, United States."
                }
            ]
        },
        termsOfService: {
            title: "Terms of Service",
            titleMain: "Terms of",
            titleAccent: "Service",
            lastUpdated: "Last updated: September 25, 2026",
            sections: [
                {
                    title: "01. Agreement",
                    content: "By using carrillodynamics.com, demo.carrillodynamics.com, related trade demo subdomains, or booking a call with us, you agree to these Terms. If you do not agree, do not use the sites or services."
                },
                {
                    title: "02. What we do",
                    content: "Carrillo Dynamics LLC designs and builds systems and automations for service businesses. Project scope, fees, and timelines are set in a separate proposal or agreement for each engagement. A free 15-min call does not create a paid project until both parties agree in writing (including email)."
                },
                {
                    title: "03. Demo and portfolio sites",
                    content: "Trade demos (including but not limited to HVAC, plumbing, electrical, waste, roofing, towing, and landscaping subdomains under carrillodynamics.com) are samples of systems we can build. They are not live businesses of independent operating companies unless we expressly say otherwise. Fictional business names, reviews, addresses, and 555 phone numbers are for demonstration only. Do not rely on demo content as real service offerings, licensing, or insurance claims."
                },
                {
                    title: "04. No professional advice on demos",
                    content: "Demo forms, chat widgets, and booking UIs may simulate shop workflows. Submitting a demo form does not create a service contract with a trade company and does not guarantee a response from a field technician."
                },
                {
                    title: "05. Intellectual property",
                    content: "Unless a signed project agreement says otherwise: (a) Carrillo Dynamics owns the demos, branding, and pre-existing tools we bring to a project; (b) after full payment for custom work delivered to you, you own the custom deliverables described in that agreement; (c) you may not copy, resell, or republish our demos or marketing site content without written permission."
                },
                {
                    title: "06. Acceptable use",
                    content: "You may not misuse the sites (including attempts to break security, scrape at abusive scale, spam forms, or use the sites for unlawful purposes)."
                },
                {
                    title: "07. Disclaimers",
                    content: "Sites and demos are provided \"as is.\" We do not warrant uninterrupted or error-free operation. Results from automation projects vary by business and are not guaranteed."
                },
                {
                    title: "08. Limitation of liability",
                    content: "To the maximum extent allowed by Illinois law, Carrillo Dynamics LLC is not liable for indirect, incidental, special, consequential, or lost-profit damages arising from use of the sites or services. Our total liability for any claim related to the sites is limited to one hundred U.S. dollars (USD $100), and for paid project work is limited to the fees you paid us for that project in the three months before the claim."
                },
                {
                    title: "09. Indemnity",
                    content: "You agree to indemnify and hold Carrillo Dynamics LLC harmless from claims arising out of your misuse of the sites or your breach of these Terms."
                },
                {
                    title: "10. Governing law",
                    content: "These Terms are governed by the laws of the State of Illinois, without regard to conflict-of-law rules. Disputes will be resolved in state or federal courts located in Illinois, unless a project agreement specifies otherwise."
                },
                {
                    title: "11. Changes and contact",
                    content: "We may update these Terms; the \"Last updated\" date will change when we do. Questions: engineering@carrillodynamics.com."
                }
            ]
        },
        faqs: [
            {
                q: "What is the real cost of missed leads?",
                a: "For busy shops, even a small leak (after-hours calls, slow follow-up, jobs that never get booked) can cost tens of thousands a year. We build systems and owner boards that catch those jobs before they go to a competitor."
            },
            {
                q: "How does the \"60-Second Rule\" impact ROI?",
                a: "A lead contacted in under 60 seconds is far more likely to book. We set up automated response so your shop is often the first call back - day or night - without someone living on the phone."
            },
            {
                q: "Can we take more jobs without hiring more office staff?",
                a: "Yes. When intake, dispatch, and follow-ups stop living in sticky notes and text threads, your current crew can handle more volume with less chaos."
            },
            {
                q: "Do you replace our CRM or existing tools?",
                a: "Usually no. We connect and automate around what you already use so the tools finally match how your shop actually runs - not just a pretty website bolted on top."
            },
            {
                q: "How soon will we see results?",
                a: "First wins often show within a couple of weeks. We start with the highest-friction spots - missed calls, slow intake, follow-ups that die - so you feel the difference fast."
            },
            {
                q: "What does Carrillo Dynamics actually do?",
                a: "We're operations and automation engineers. We engineer and ship systems for local service businesses: intake to owner board, not slide decks. Book 15 minutes and we'll map the baseline for your trade."
            },
            {
                q: "Do you work in English and Spanish?",
                a: "Yes. Systems, flows, and conversations can run in English, Spanish, or both - a real advantage for many local trade markets."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "The 60-Second Rule",
                description: "The faster you answer, the more jobs you book. Here's why the first minute matters.",
                content: `### Speed wins jobs

When a homeowner needs a plumber, HVAC tech, or tow, they rarely wait patiently. They call the next shop. Shops that answer in under a minute book more work than shops that call back later.

### Where minutes get lost

The gap is usually boring: someone has to notice the lead, open a screen, type details, then dial. By the time that happens, the customer already talked to someone else.

### What to do this week

Track how long it takes from first call or form submit to a real human response. If it regularly drifts past a minute, fix intake first. Automate the handoff so your team gets the details instantly and can answer while the customer is still deciding.`,
                date: "2026-04-01",
                readTime: "4 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Scale Without Hiring More Office Staff",
                description: "Take more jobs without drowning the office in paperwork and follow-ups.",
                content: `### More trucks shouldn't mean more chaos

A lot of shops grow by adding technicians, then realize the office can't keep up. Quotes pile up. Follow-ups slip. Scheduling turns into a daily fire drill.

### Busywork is the tax

Copying details between screens, chasing confirmations, and rebuilding the same updates by hand eats the day. That work doesn't make money. It just keeps the shop from falling over.

### Grow the work, not the overhead

Automate the repetitive pieces: intake, reminders, status updates, and handoffs to the field. Your crew stays busy on paid jobs. Your office stays lean. You get capacity without hiring another full-time admin just to keep the lights on.`,
                date: "2026-04-07",
                readTime: "4 min"
            },
            {
                id: "stop-losing-leads",
                title: "Stop Losing Jobs",
                description: "Most shops already pay for the demand. The leak is what happens after the first call.",
                content: `### You paid for the lead. Did you keep the job?

Marketing gets blamed when revenue is soft. Often the real problem is quieter: the call came in, then nothing solid happened. No booked window. No follow-up. No owner visibility.

### Find the drop-off

Walk one job from first contact to paid invoice. Note every handoff. Missed after-hours calls, unfinished quotes, and forgotten follow-ups are usually where money disappears.

### Close the gap

Tighten intake so every request becomes a tracked job. Make follow-ups automatic. Give yourself an owner board so you can see what's open, what's stuck, and what's ready to invoice. Keep the jobs you already paid to attract.`,
                date: "2026-04-07",
                readTime: "5 min"
            },
            {
                id: "true-cost-manual-entry",
                title: "The Real Cost of Copy-Paste",
                description: "Manual retyping looks cheap until a wrong address sends a truck across town.",
                content: `### It looks like 30 seconds

Copying a name, phone, and address from a form into another screen feels harmless. Multiply it by every ticket, every day, and it becomes hours of unpaid admin work.

### Typos are expensive

One wrong digit can send a crew to the wrong street. Now you're burning truck time, customer patience, and payroll on a mistake nobody meant to make.

### Stop retyping the same job

Push details once and let them travel: form to board to tech. Cleaner data means faster dispatch, fewer callbacks, and less chaos between office and field.`,
                date: "2026-04-12",
                readTime: "4 min"
            },
            {
                id: "audit-your-operations",
                title: "Audit Your Shop for Leaks",
                description: "A simple walkthrough to find where jobs, time, and money fall through the cracks.",
                content: `### Map one job end to end

Pick a real job from last week. Write every step from first contact to payment. If you need three people to explain it, the process is already too fragile.

### Spot the friction

Look for retyping, waiting on someone to remember a follow-up, or techs calling the office for details that should already be on their phone. Those moments are leaks.

### Measure what matters

How long until a new request gets a real response? How long until a quote goes out? How often do open jobs sit with no next step? If the answer depends on memory, automate the trigger and free your team to do the work that pays.`,
                date: "2026-04-18",
                readTime: "5 min"
            },
            {
                id: "after-hours-jobs",
                title: "Stop Missing After-Hours Jobs",
                description: "Nights and weekends are when many trade customers call. Here's how shops keep those jobs instead of losing them to whoever answers first.",
                content: `### Demand doesn't clock out

A no-heat call at 9pm and a burst pipe on Sunday don't wait for Monday office hours. If your shop is quiet after 5, someone else is booking the work.

### Voicemail is not intake

A missed call into a full mailbox is not a captured job. Customers move on. By morning you're chasing people who already hired a competitor.

### Cover the hours without living on the phone

Use an after-hours path that captures the request, books or queues it, and notifies the right person. Morning should start with jobs already secured, not a pile of unknowns. That is how you make money while the shop is closed.`,
                date: "2026-04-28",
                readTime: "4 min"
            },
            {
                id: "engineering-philosophy",
                title: "Why I Built This",
                description: "Field work taught me the chaos. Engineering taught me how to cut it. Here's why Carrillo Dynamics exists.",
                content: `### I grew up in the work

I didn't start behind a laptop. I've done landscaping, automotive work, and high-rise tenant improvement. I know what it feels like when the phone won't stop, the truck is already late, and the office is holding the day together with sticky notes.

### Chaos is expensive

Most shops don't fail because the crews can't work. They fail because intake, follow-up, and handoffs leak money every week. Jobs slip. Time burns. The owner becomes the glue holding a broken process together.

### Build systems that earn their keep

I started Carrillo Dynamics to build the boring stuff that keeps shops paid: intake that secures the job, boards that give you the day back, and flows that cut busywork without turning your business into a science project.

### The point

I'm not here to sell you a pretty website or a buzzword deck. I'm here to help you make more money, save time, and run with less chaos so you can focus on the work that actually pays.

 - Nico Carrillo, Owner`,
                date: "2026-04-24",
                readTime: "4 min"
            }
        ],
        articleLabels: {
            abstract: "What's at stake",
            technicalSpecs: "Fix this week",
            integrity: "FOCUS",
            integrityValue: "JOBS",
            protocol: "APPROACH",
            protocolValue: "SYSTEM",
            latency: "RESULT",
            latencyValue: "LESS CHAOS",
            downloadPdf: "Print",
            shareEntry: "Share",
            backToArchive: "Back to resources"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            faq: "FAQ",
            articles: "Recursos",
            blueprint: "EMPIEZA AHORA",
            privacy: "Privacidad",
            terms: "Términos",
            strategy: "Llamada de 15 min"
        },
        success: {
            title: "Solicitud ",
            titleItalic: "Recibida.",
            description: "Estamos revisando su solicitud. Esté atento a un correo - le respondemos pronto.",
            founder: "- Nico Carrillo (Carrillo Dynamics)",
            cta: "Volver al Inicio"
        },
        pageTitles: {
            faq: { main: "Operaciones", accent: "FAQ" },
            articles: { main: "Recursos", accent: "del taller" }
        },
        hero: {
            title: "Su negocio está perdiendo clientes por",
            subtitle: "Dinero ganado. Tiempo ahorrado. Menos caos.",
            cta: "Agende su llamada",
            audit: "Agende su llamada",
            badge1: "INGENIERÍA BASADA EN CHICAGO",
            badge2: "SIN RETRASOS DE CARGA",
            badge3: "OPTIMIZADO PARA MÓVILES"
        },
        calculator: {
            title: "Recupere ",
            titleItalic: "Cada Hora.",
            subtitle: "Automatizar sus tareas manuales tiene un impacto directo en sus resultados. Calculamos su ROI potencial antes de escribir una sola línea de código.",
            efficiencyInput: "Entrada de Eficiencia",
            totalPeople: "Personas Totales",
            manualHours: "Horas Manuales / Sem",
            projectedGain: "Ganancia Proyectada",
            manualRecovery: "Recuperación Manual",
            totalHoursRecovered: "Total de Horas Recuperadas",
            capacityImpact: "Impacto de Capacidad",
            scaleMonitor: "Monitor de Escalabilidad",
            growthPotential: "Potencial de Crecimiento",
            summaryTemplate: "Recuperar {ftu} FTU significa liberar la capacidad real de más de {wholeFtu} operador(es) adicional(es) a tiempo completo. No solo ahorramos tiempo; recuperamos la capacidad productiva de su equipo sin añadir un solo dólara su nómina.",
            bookStrategy: "Llamada de 15 min",
            successTitle: "Análisis Completado.",
            successSub: "Su desglose de ROI personalizado ha sido diseñado. Descargue el PDF y reserve su sesión a continuación.",
            operationalStress: "Estrés Operativo"
        },
        privacyPolicy: {
            title: "Política de Privacidad",
            titleMain: "Política de",
            titleAccent: "Privacidad",
            lastUpdated: "Última actualización: 25 de septiembre de 2026",
            sections: [
                {
                    title: "01. Quiénes somos",
                    content: "Carrillo Dynamics LLC (\"Carrillo Dynamics,\" \"nosotros\") construye sistemas y automatizaciones para negocios de servicios locales. Estamos en Chicago, Illinois. Contacto: engineering@carrillodynamics.com."
                },
                {
                    title: "02. Qué recopilamos",
                    content: "Recopilamos la información que usted elige compartir: nombre, correo, datos de empresa y notas que envía por email o al agendar en nuestro calendario (Calendly). Si navega nuestros sitios, nuestros proveedores de hosting pueden recopilar datos técnicos estándar (IP, navegador, páginas vistas) por seguridad y rendimiento."
                },
                {
                    title: "03. Cómo usamos la información",
                    content: "Usamos su información para responder consultas, agendar llamadas de 15 min, entregar proyectos, mejorar los sitios y cumplir obligaciones legales. No vendemos su información personal."
                },
                {
                    title: "04. Compartir datos",
                    content: "Usamos procesadores de confianza para operar el negocio (por ejemplo hosting, correo y Calendly). Solo procesan datos según sea necesario. Podemos divulgar información si la ley lo exige."
                },
                {
                    title: "05. Sitios demo y de portafolio",
                    content: "Los sitios de oficios en subdominios como hvac.carrillodynamics.com, plumbing.carrillodynamics.com y demos relacionados son demos de demostración y portafolio hechos por Carrillo Dynamics. No son negocios de clientes en operación. Los teléfonos en esos demos son ficticios (por ejemplo números 555). Los enlaces de reserva y engineering@carrillodynamics.com contactan a Carrillo Dynamics, no a una empresa de oficio independiente."
                },
                {
                    title: "06. Cookies y analítica",
                    content: "Los sitios pueden usar cookies esenciales. Si usamos herramientas de analítica, sirven para entender tráfico agregado. Puede controlar cookies en su navegador."
                },
                {
                    title: "07. Conservación y seguridad",
                    content: "Conservamos registros de proyectos y consultas el tiempo necesario para la relación y requisitos legales; luego los eliminamos o anonimizamos. Tomamos medidas razonables de seguridad, pero ningún sistema en línea es perfecto."
                },
                {
                    title: "08. Sus opciones",
                    content: "Escriba a engineering@carrillodynamics.com para solicitar acceso, corrección o eliminación de datos personales, según la ley aplicable. Si agendó por Calendly, también puede gestionar esa reserva allí."
                },
                {
                    title: "09. Menores",
                    content: "Nuestros servicios están dirigidos a negocios y adultos. No recopilamos a sabiendas información de menores de 13 años."
                },
                {
                    title: "10. Cambios",
                    content: "Podemos actualizar esta política. La fecha de \"Última actualización\" cambiará cuando lo hagamos. Seguir usando los sitios implica aceptar la política revisada."
                },
                {
                    title: "11. Contacto",
                    content: "Preguntas de privacidad: engineering@carrillodynamics.com. Carrillo Dynamics LLC, Chicago, IL, Estados Unidos."
                }
            ]
        },
        termsOfService: {
            title: "Términos de Servicio",
            titleMain: "Términos de",
            titleAccent: "Servicio",
            lastUpdated: "Última actualización: 25 de septiembre de 2026",
            sections: [
                {
                    title: "01. Acuerdo",
                    content: "Al usar carrillodynamics.com, demo.carrillodynamics.com, subdominios demo de oficios relacionados, o al agendar una llamada, usted acepta estos Términos. Si no está de acuerdo, no use los sitios ni los servicios."
                },
                {
                    title: "02. Qué hacemos",
                    content: "Carrillo Dynamics LLC diseña y construye sistemas y automatizaciones para negocios de servicios. El alcance, honorarios y plazos se definen en una propuesta o acuerdo por proyecto. Una llamada gratuita de 15 min no crea un proyecto de pago hasta que ambas partes acuerden por escrito (incluido el correo)."
                },
                {
                    title: "03. Sitios demo y de portafolio",
                    content: "Los demos de oficios (incluyendo HVAC, plomería, eléctrico, residuos, techado, grúas y paisajismo bajo carrillodynamics.com) son ejemplos de sistemas que podemos construir. No son negocios en operación de empresas independientes, salvo que indiquemos lo contrario. Nombres, reseñas, direcciones y teléfonos 555 son solo para demostración. No confíe en ese contenido como oferta real de servicio, licencias o seguros."
                },
                {
                    title: "04. Sin servicio real en demos",
                    content: "Formularios, chats y reservas en demos pueden simular flujos de un taller. Enviar un formulario demo no crea un contrato con una empresa de oficio ni garantiza respuesta de un técnico de campo."
                },
                {
                    title: "05. Propiedad intelectual",
                    content: "Salvo que un acuerdo de proyecto firmado diga lo contrario: (a) Carrillo Dynamics es dueño de los demos, marca y herramientas previas; (b) tras el pago completo del trabajo a medida entregado, usted es dueño de los entregables descritos en ese acuerdo; (c) no puede copiar, revender ni republicar nuestros demos o contenido de marketing sin permiso escrito."
                },
                {
                    title: "06. Uso aceptable",
                    content: "No puede hacer mal uso de los sitios (seguridad, scraping abusivo, spam en formularios o fines ilegales)."
                },
                {
                    title: "07. Descargos",
                    content: "Los sitios y demos se ofrecen \"tal cual\". No garantizamos operación ininterrumpida ni sin errores. Los resultados de proyectos de automatización varían y no están garantizados."
                },
                {
                    title: "08. Límite de responsabilidad",
                    content: "En la máxima medida permitida por la ley de Illinois, Carrillo Dynamics LLC no responde por daños indirectos, incidentales, especiales, consecuentes o lucro cesante por el uso de los sitios o servicios. La responsabilidad total por reclamos relacionados con los sitios se limita a cien dólares estadounidenses (USD $100), y por trabajo de proyecto pagado a los honorarios que nos pagó por ese proyecto en los tres meses previos al reclamo."
                },
                {
                    title: "09. Indemnización",
                    content: "Usted acepta indemnizar y mantener indemne a Carrillo Dynamics LLC frente a reclamos por mal uso de los sitios o incumplimiento de estos Términos."
                },
                {
                    title: "10. Ley aplicable",
                    content: "Estos Términos se rigen por las leyes del Estado de Illinois. Las disputas se resolverán en tribunales estatales o federales de Illinois, salvo que un acuerdo de proyecto diga otra cosa."
                },
                {
                    title: "11. Cambios y contacto",
                    content: "Podemos actualizar estos Términos; la fecha de \"Última actualización\" cambiará. Preguntas: engineering@carrillodynamics.com."
                }
            ]
        },
        faqs: [
            {
                q: "¿Cuál es el costo real de perder leads?",
                a: "Para talleres ocupados, incluso una fuga pequeña (llamadas fuera de horario, seguimiento lento, trabajos que nunca se agendan) puede costar decenas de miles al año. Construimos sistemas y tableros de dueño que atrapan esos trabajos antes de que se vayan con la competencia."
            },
            {
                q: "¿Cómo impacta la \"Regla de los 60 Segundos\" en el ROI?",
                a: "Un lead contactado en menos de 60 segundos tiene muchas más probabilidades de agendar. Configuramos respuestas automáticas para que su taller suela ser el primero en devolver la llamada - de día o de noche - sin que alguien viva pegado al teléfono."
            },
            {
                q: "¿Podemos tomar más trabajos sin contratar más personal de oficina?",
                a: "Sí. Cuando el intake, el despacho y el seguimiento dejan de vivir en notas adhesivas y mensajes de texto, su equipo actual puede manejar más volumen con menos caos."
            },
            {
                q: "¿Reemplazan nuestro CRM o herramientas actuales?",
                a: "Por lo general no. Conectamos y automatizamos alrededor de lo que ya usa para que las herramientas coincidan con cómo opera su taller - no solo un sitio web bonito encima."
            },
            {
                q: "¿Qué tan pronto veremos resultados?",
                a: "Las primeras victorias suelen verse en un par de semanas. Empezamos por los puntos de mayor fricción - llamadas perdidas, intake lento, seguimientos que mueren - para que sienta la diferencia rápido."
            },
            {
                q: "¿Qué hace realmente Carrillo Dynamics?",
                a: "Somos ingenieros de operaciones y automatización. Diseñamos y entregamos sistemas para negocios de servicios locales: de la captación al tablero de dueño, no presentaciones. Reserve 15 minutos y mapeamos el baseline de su oficio."
            },
            {
                q: "¿Trabajan en inglés y español?",
                a: "Sí. Sistemas, flujos y conversaciones pueden ir en inglés, español o ambos - una ventaja real en muchos mercados de oficios locales."
            }
        ],
        articles: [
            {
                id: "60-second-lead-rule",
                title: "La Regla de los 60 Segundos",
                description: "Cuanto más rápido responde, más trabajos agenda. Por eso importa el primer minuto.",
                content: `### La velocidad gana trabajos

Cuando un dueño de casa necesita plomería, HVAC o grúa, rara vez espera con paciencia. Llama al siguiente taller. Los que contestan en menos de un minuto agendan más trabajo que los que devuelven la llamada después.

### Dónde se pierden los minutos

El hueco suele ser aburrido: alguien tiene que notar el pedido, abrir una pantalla, escribir detalles y marcar. Para cuando eso pasa, el cliente ya habló con otro.

### Qué hacer esta semana

Mida cuánto tarda desde la primera llamada o formulario hasta una respuesta humana real. Si pasa del minuto con frecuencia, arregle primero la captación. Automatice el traspaso para que su equipo reciba los datos al instante y pueda contestar mientras el cliente aún decide.`,
                date: "2026-04-01",
                readTime: "4 min"
            },
            {
                id: "scaling-without-hiring",
                title: "Escale Sin Contratar Más Oficina",
                description: "Tome más trabajos sin ahogar la oficina en papeleo y seguimientos.",
                content: `### Más camiones no deberían significar más caos

Muchos talleres crecen sumando técnicos y luego descubren que la oficina no da abasto. Se acumulan cotizaciones. Se caen seguimientos. La agenda se vuelve un incendio diario.

### Lo repetitivo es el impuesto

Copiar detalles entre pantallas, perseguir confirmaciones y rehacer las mismas actualizaciones a mano se come el día. Ese trabajo no genera dinero. Solo evita que el taller se caiga.

### Crezca el trabajo, no la sobrecarga

Automatice lo repetitivo: captación, recordatorios, estados y traspasos al campo. Su cuadrilla se mantiene en trabajos pagados. Su oficina se mantiene liviana. Gana capacidad sin contratar otra persona solo para sostener el proceso.`,
                date: "2026-04-07",
                readTime: "4 min"
            },
            {
                id: "stop-losing-leads",
                title: "Deje de Perder Trabajos",
                description: "La mayoría ya paga por la demanda. La fuga está en lo que pasa después de la primera llamada.",
                content: `### Pagó por el lead. ¿Guardó el trabajo?

Se culpa al marketing cuando bajan los ingresos. A menudo el problema es más silencioso: entró la llamada y no pasó nada sólido. Sin ventana agendada. Sin seguimiento. Sin visibilidad del dueño.

### Encuentre la caída

Recorra un trabajo desde el primer contacto hasta la factura pagada. Anote cada traspaso. Llamadas fuera de horario perdidas, cotizaciones a medias y seguimientos olvidados suelen ser donde desaparece el dinero.

### Cierre el hueco

Ajuste la captación para que cada pedido sea un trabajo rastreado. Haga los seguimientos automáticos. Tenga un tablero de dueño para ver qué está abierto, qué está atorado y qué está listo para facturar. Conserve los trabajos que ya pagó por atraer.`,
                date: "2026-04-07",
                readTime: "5 min"
            },
            {
                id: "true-cost-manual-entry",
                title: "El Costo Real de Copiar y Pegar",
                description: "Retipear a mano parece barato hasta que una dirección mala manda el camión al otro lado de la ciudad.",
                content: `### Parecen 30 segundos

Copiar nombre, teléfono y dirección de un formulario a otra pantalla se siente inofensivo. Multiplíquelo por cada ticket, cada día, y se vuelve horas de admin sin pagar.

### Los typos salen caros

Un dígito mal puede mandar a la cuadrilla a la calle equivocada. Ahora quema tiempo de camión, paciencia del cliente y nómina por un error que nadie quiso cometer.

### Deje de reescribir el mismo trabajo

Capture los datos una vez y deje que viajen: formulario a tablero a técnico. Datos limpios significan despacho más rápido, menos llamadas de vuelta y menos caos entre oficina y campo.`,
                date: "2026-04-12",
                readTime: "4 min"
            },
            {
                id: "audit-your-operations",
                title: "Audite su Taller en Busca de Fugas",
                description: "Un recorrido simple para encontrar dónde se caen trabajos, tiempo y dinero.",
                content: `### Mapee un trabajo de punta a punta

Elija un trabajo real de la semana pasada. Escriba cada paso desde el primer contacto hasta el pago. Si necesita tres personas para explicarlo, el proceso ya es demasiado frágil.

### Detecte la fricción

Busque reescritura, esperas a que alguien recuerde un seguimiento, o técnicos que llaman a la oficina por detalles que ya deberían estar en su teléfono. Esos momentos son fugas.

### Mida lo que importa

¿Cuánto tarda una solicitud nueva en tener respuesta real? ¿Cuánto tarda en salir una cotización? ¿Con qué frecuencia quedan trabajos abiertos sin siguiente paso? Si la respuesta depende de la memoria, automatice el disparador y libere a su equipo para el trabajo que sí paga.`,
                date: "2026-04-18",
                readTime: "5 min"
            },
            {
                id: "after-hours-jobs",
                title: "Deje de Perder Trabajos Fuera de Horario",
                description: "De noche y el fin de semana es cuando muchos clientes llaman. Así los talleres conservan esos trabajos en vez de perdérselos.",
                content: `### La demanda no cierra a las 5

Una llamada de sin calefacción a las 9pm y una tubería rota el domingo no esperan al lunes. Si su taller queda callado después de las 5, otro está agendando el trabajo.

### El buzón de voz no es captación

Una llamada perdida a un buzón lleno no es un trabajo capturado. El cliente sigue. A la mañana está persiguiendo gente que ya contrató a un competidor.

### Cubra las horas sin vivir pegado al teléfono

Use un camino fuera de horario que capture el pedido, lo agende o lo encole, y avise a la persona correcta. La mañana debería empezar con trabajos ya asegurados, no con una pila de desconocidos. Así se gana dinero mientras el taller está cerrado.`,
                date: "2026-04-28",
                readTime: "4 min"
            },
            {
                id: "engineering-philosophy",
                title: "Por Qué Construí Esto",
                description: "El campo me enseñó el caos. La ingeniería me enseñó a cortarlo. Por eso existe Carrillo Dynamics.",
                content: `### Crecí en el trabajo

No empecé detrás de una laptop. He hecho paisajismo, mecánica y mejoras en rascacielos. Sé lo que se siente cuando el teléfono no para, el camión ya va tarde y la oficina sostiene el día con notas adhesivas.

### El caos sale caro

La mayoría de los talleres no fallan porque las cuadrillas no sepan trabajar. Fallan porque la captación, el seguimiento y los traspasos se fugan dinero cada semana. Se escapan trabajos. Se quema tiempo. El dueño termina siendo el pegamento de un proceso roto.

### Sistemas que se ganan su lugar

Empecé Carrillo Dynamics para construir lo aburrido que mantiene a los talleres pagados: captación que asegura el trabajo, tableros que le devuelven el día y flujos que recortan lo repetitivo sin convertir su negocio en un proyecto de laboratorio.

### El punto

No estoy aquí para venderle un sitio bonito ni un pitch de moda. Estoy aquí para ayudarle a ganar más dinero, ahorrar tiempo y operar con menos caos, para que se enfoque en el trabajo que sí paga.

 - Nico Carrillo, Owner`,
                date: "2026-04-24",
                readTime: "4 min"
            }
        ],
        articleLabels: {
            abstract: "Qué está en juego",
            technicalSpecs: "Arregle esta semana",
            integrity: "ENFOQUE",
            integrityValue: "TRABAJOS",
            protocol: "MÉTODO",
            protocolValue: "SISTEMA",
            latency: "RESULTADO",
            latencyValue: "MENOS CAOS",
            downloadPdf: "Imprimir",
            shareEntry: "Compartir",
            backToArchive: "Volver a recursos"
        }
    }
};
