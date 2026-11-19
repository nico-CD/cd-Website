import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Languages } from "lucide-react";
import { InlineWidget } from "react-calendly";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

/** Unlisted YouTube walk-through for business-card QR scanners. */
const DEMO_VIDEO_ID = "0dcWE4plkrY";

/**
 * QR-only landing. Not linked from the public homepage.
 * Card scanners arrive here directly.
 */
const Start = () => {
  const { lang, setLanguage } = useTranslation();
  const [searchParams] = useSearchParams();
  const [calendlyHeight, setCalendlyHeight] = useState(900);

  useEffect(() => {
    const syncHeight = () => {
      setCalendlyHeight(window.innerWidth < 640 ? 920 : window.innerWidth < 768 ? 780 : 655);
    };
    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, []);

  const hubHome = useMemo(() => {
    const url = new URL(DEMO_HUB_URL);
    ["utm_source", "utm_medium", "utm_campaign", "src", "v"].forEach((key) => {
      const val = searchParams.get(key);
      if (val) url.searchParams.set(key, val);
    });
    return url.toString();
  }, [searchParams]);

  const copy =
    lang === "en"
      ? {
          title: "Watch the demo.",
          titleAccent: "Book a call.",
          subtitle:
            "70-second walkthrough of the systems we engineer for local operators. Then book a call or try our live demos.",
          videoTitle: "Carrillo Dynamics demo walk-through",
          bookPrimary: "Book a call",
          demosEyebrow: "Prefer to try it live?",
          demosBody: "Eleven live shops. Pick your trade, look around, then book if it clicks.",
          openHub: "Try a demo",
          bookTitleLead: "Book your",
          bookTitleAccent: "15-min call",
          bookBody:
            "We'll map the bottlenecks and lock a system baseline for your trade: from intake to owner board to money in your pocket.",
          langToggle: "ES",
        }
      : {
          title: "Vea el demo.",
          titleAccent: "Agende una llamada.",
          subtitle:
            "Recorrido de 70 segundos de los sistemas que diseñamos para operadores locales. Luego agende una llamada o pruebe nuestros demos en vivo.",
          videoTitle: "Recorrido demo de Carrillo Dynamics",
          bookPrimary: "Agende su llamada",
          demosEyebrow: "¿Prefiere probarlo en vivo?",
          demosBody: "Once talleres en vivo. Elija su oficio, mire alrededor y agende si le conviene.",
          openHub: "Prueba un demo",
          bookTitleLead: "Agende su",
          bookTitleAccent: "llamada de 15 min",
          bookBody:
            "Mapearemos los cuellos de botella y fijaremos el baseline del sistema para su oficio: de la captación al tablero de dueño al dinero en el bolsillo.",
          langToggle: "EN",
        };

  const scrollToBook = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-[#10b981]/10">
      <SEOManager isNoindex={true} />

      <header className="sticky top-0 z-50 flex h-14 items-center border-b border-[#27272A] bg-background/90 px-4 backdrop-blur-md sm:h-16 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <img src="/bull_PNGs/vect.bull.svg" alt="" className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
            <span className="truncate font-display text-base font-black tracking-tighter sm:text-lg">
              CARRILLO <span className="text-[#10b981]">DYNAMICS</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLanguage(lang === "en" ? "es" : "en")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-200 transition-colors hover:border-[#10b981]/50 hover:text-[#10b981]"
          >
            <Languages className="h-3.5 w-3.5" />
            {copy.langToggle}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <div
          className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.22]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.45'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-[#10b981]/10 blur-[90px]" />

        <section className="relative px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter sm:text-6xl md:text-7xl">
              <span className="block text-foreground">{copy.title}</span>
              <span className="mt-2 block text-[#10b981]">{copy.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base font-medium leading-relaxed text-zinc-400 sm:text-lg">
              {copy.subtitle}
            </p>

            <div className="relative mt-8 w-full overflow-hidden border border-[#27272A] bg-[#09090b]">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?rel=0`}
                  title={copy.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToBook}
              className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-[#10b981] px-8 py-4 text-base font-bold uppercase text-zinc-950 transition-colors hover:bg-[#0ea672] sm:w-auto"
            >
              {copy.bookPrimary}
            </button>
          </div>
        </section>

        <section
          id="book"
          className="relative z-10 scroll-mt-20 border-t border-[#27272A] px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto w-full max-w-4xl"
          >
            <div className="mb-5 space-y-3 text-center">
              <h2 className="font-display text-4xl font-black uppercase leading-[0.92] tracking-tighter sm:text-5xl md:text-6xl">
                <span className="block text-foreground">{copy.bookTitleLead}</span>
                <span className="mt-2 block text-[#10b981]">{copy.bookTitleAccent}</span>
              </h2>
              <p className="mx-auto max-w-xl text-base font-medium text-zinc-400">
                {copy.bookBody}
              </p>
            </div>

            <div className="border border-[#27272A] bg-[#09090b] leading-[0] [&_iframe]:block">
              <InlineWidget
                url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang === "en" ? "en" : "es"}`}
                styles={{
                  height: `${calendlyHeight}px`,
                  minWidth: "100%",
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                }}
                pageSettings={{
                  backgroundColor: "09090b",
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: "10b981",
                  textColor: "ffffff",
                }}
              />
            </div>
          </motion.div>
        </section>

        <section className="relative z-10 border-t border-[#27272A] px-4 py-14 sm:px-6 sm:py-16">
          <div className="relative z-10 mx-auto grid max-w-4xl overflow-hidden border border-[#10b981]/25 bg-gradient-to-br from-[#10251c] via-[#0c0c0e] to-[#0c0c0e] md:grid-cols-[1.2fr_0.8fr]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/70 to-transparent" />
            <div className="pointer-events-none absolute -right-6 bottom-[-20%] opacity-[0.08]">
              <img src="/bull_PNGs/vect.bull.svg" alt="" className="h-48 w-48 object-contain" decoding="async" />
            </div>
            <div className="relative z-10 space-y-5 px-6 py-10 text-center sm:px-10 md:text-left">
              <h2 className="font-display text-3xl font-black uppercase tracking-tighter text-white sm:text-4xl">
                {copy.demosEyebrow}
              </h2>
              <p className="mx-auto max-w-md text-base font-medium leading-relaxed text-zinc-400 md:mx-0">
                {copy.demosBody}
              </p>
              <a
                href={hubHome}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#10b981] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-[#0ea672] sm:w-auto"
              >
                {copy.openHub}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="relative z-10 border-t border-white/10 px-6 py-8 md:border-l md:border-t-0 md:px-8 md:py-10">
              <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 md:text-left">
                {lang === "en" ? "Available trades" : "Oficios disponibles"}
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm font-semibold text-zinc-200">
                {(lang === "en"
                  ? ["HVAC", "Plumbing", "Electrical", "Waste", "Roofing", "More"]
                  : ["HVAC", "Plomería", "Eléctrico", "Residuos", "Techado", "Más"]
                ).map((trade) => (
                  <li key={trade}>
                    <a
                      href={hubHome}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-[40px] items-center justify-center rounded-md border border-white/15 bg-[#121214]/92 px-2 py-2 transition-colors hover:border-[#10b981]/45 hover:text-white"
                    >
                      {trade}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Start;
