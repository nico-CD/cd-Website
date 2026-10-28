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
      setCalendlyHeight(window.innerWidth < 640 ? 980 : window.innerWidth < 768 ? 860 : 700);
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

  const revealProps = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  };

  const copy =
    lang === "en"
      ? {
          title: "Watch the demo.",
          titleAccent: "Book a call.",
          subtitle:
            "A short walk-through of the trade sites we build for local shops. Then book 15 minutes or open the live demos.",
          videoTitle: "Carrillo Dynamics demo walk-through",
          bookPrimary: "Book a 15-min call",
          demosEyebrow: "Want to click around first?",
          demosBody: "Open CD Demos and try eleven live trade sites yourself.",
          openHub: "Open CD Demos",
          bookTitleLead: "Book Your",
          bookTitleAccent: "15-Min Call",
          bookBody:
            "15 minutes to map bottlenecks and sketch a site and owner board for your shop.",
          langToggle: "ES",
        }
      : {
          title: "Vea el demo.",
          titleAccent: "Agende una llamada.",
          subtitle:
            "Un recorrido corto de los sitios de oficios que construimos para talleres locales. Luego reserve 15 minutos o abra los demos en vivo.",
          videoTitle: "Recorrido demo de Carrillo Dynamics",
          bookPrimary: "Agendar llamada de 15 min",
          demosEyebrow: "¿Prefiere explorar primero?",
          demosBody: "Abra Demos CD y pruebe once sitios de oficios en vivo.",
          openHub: "Abrir Demos CD",
          bookTitleLead: "Agende Su",
          bookTitleAccent: "Llamada de 15 Min",
          bookBody:
            "15 minutos para mapear cuellos de botella y bosquejar un sitio y tablero de dueño para su taller.",
          langToggle: "EN",
        };

  const scrollToBook = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-[#10b981]/10 transition-colors duration-300">
      <SEOManager isNoindex={true} />

      <header className="sticky top-0 z-50 flex h-14 items-center border-b border-foreground/10 bg-background/80 px-4 backdrop-blur-md sm:h-16 sm:px-6">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <img
              src="/bull_PNGs/vect.bull.svg"
              alt=""
              className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
            />
            <span className="truncate font-black text-base tracking-tighter sm:text-lg">
              CARRILLO <span className="text-[#10b981]">DYNAMICS</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLanguage(lang === "en" ? "es" : "en")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/20 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider hover:border-[#10b981] hover:text-[#10b981]"
          >
            <Languages className="h-3.5 w-3.5" />
            {copy.langToggle}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <div
          className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.3]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Path: Watch → Book → optional demos */}
        <section className="relative px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              {copy.title}{" "}
              <span className="text-[#10b981]">{copy.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              {copy.subtitle}
            </p>

            <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#18181B]">
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
              className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#10b981] px-5 py-3.5 text-sm font-black uppercase tracking-wider text-zinc-950 transition-colors hover:bg-[#0ea672] sm:w-auto sm:px-8"
            >
              {copy.bookPrimary}
            </button>
          </div>
        </section>

        <section
          id="book"
          className="relative z-10 scroll-mt-20 border-t border-foreground/10 px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-12"
        >
          <motion.div className="relative z-10 mx-auto w-full max-w-full md:max-w-4xl" {...revealProps}>
            <div className="mb-3 space-y-2 text-center sm:mb-4">
              <h2 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
                {copy.bookTitleLead}{" "}
                <span className="italic text-[#10b981]">{copy.bookTitleAccent}</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm font-medium text-muted-foreground sm:text-base">
                {copy.bookBody}
              </p>
            </div>

            <InlineWidget
              url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang === "en" ? "en" : "es"}`}
              styles={{
                height: `${calendlyHeight}px`,
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
          </motion.div>
        </section>

        <section className="relative z-10 border-t border-foreground/10 px-4 py-12 sm:px-6 sm:py-16">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#10b981]">
              {copy.demosEyebrow}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              {copy.demosBody}
            </p>
            <a
              href={hubHome}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-[#10b981]/40 px-5 py-3.5 text-sm font-black uppercase tracking-wider text-[#10b981] transition-colors hover:bg-[#10b981]/10 sm:w-auto sm:px-8"
            >
              {copy.openHub}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Start;
