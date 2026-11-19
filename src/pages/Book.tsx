import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOManager from "@/components/SEOManager";
import { useTranslation } from "@/components/LanguageProvider";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { ArrowRight } from "lucide-react";

const Book = () => {
  const { lang } = useTranslation();
  const [calendlyHeight, setCalendlyHeight] = useState(900);

  useEffect(() => {
    const syncHeight = () => {
      setCalendlyHeight(window.innerWidth < 640 ? 980 : window.innerWidth < 768 ? 860 : 700);
    };
    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, []);

  const steps =
    lang === "en"
      ? [
          {
            n: "01",
            title: "The audit",
            description: "We map your current bottlenecks and workflows.",
          },
          {
            n: "02",
            title: "The plan",
            description: "We map a system for your trade: demo baseline, skin, and owner board.",
          },
          {
            n: "03",
            title: "The build",
            description: "We engineer, test, and launch on your domain after kickoff.",
          },
        ]
      : [
          {
            n: "01",
            title: "La auditoría",
            description: "Mapeamos sus flujos de trabajo y cuellos de botella actuales.",
          },
          {
            n: "02",
            title: "El plan",
            description: "Mapeamos un sistema para su oficio: baseline del demo, marca y tablero de dueño.",
          },
          {
            n: "03",
            title: "El build",
            description: "Ingeniería, pruebas y lanzamiento en su dominio después del kickoff.",
          },
        ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-[#10b981]/10">
      <SEOManager
        title={lang === "en" ? "Book a call" : "Agende su llamada"}
        description={
          lang === "en"
            ? "Book a 15-minute call. We map bottlenecks and lock a system baseline for your trade."
            : "Agende una llamada de 15 minutos. Mapeamos cuellos de botella y fijamos el baseline del sistema para su oficio."
        }
      />
      <Navbar />

      <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-4 pb-24 pt-28 sm:px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[#10b981]/12 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
          <img src="/bull_PNGs/vect.bull.svg" alt="" className="h-[560px] w-[560px] object-contain" decoding="async" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mb-6 w-full max-w-4xl px-2 text-center"
        >
          <h1 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-6xl md:text-7xl">
            {lang === "en" ? "Book your" : "Agende su"}{" "}
            <span className="text-[#10b981]">
              {lang === "en" ? "15-min call" : "llamada de 15 min"}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-zinc-400 md:text-xl">
            {lang === "en"
              ? "We map bottlenecks and lock a system baseline for your trade: intake to owner board."
              : "Mapeamos cuellos de botella y fijamos el baseline del sistema para su oficio: captación hasta tablero de dueño."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-4xl overflow-hidden border border-[#27272A] bg-[#09090b]"
        >
          <InlineWidget
            url={`https://calendly.com/nico-carrillodynamics/15-minute-strategy-session?hide_event_type_details=1&hide_gdpr_banner=1&locale=${lang}`}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto mt-20 w-full max-w-5xl"
        >
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl">
              {lang === "en" ? (
                <>
                  What happens <span className="text-[#10b981]">next?</span>
                </>
              ) : (
                <>
                  ¿Qué pasa <span className="text-[#10b981]">después?</span>
                </>
              )}
            </h2>
            <p className="mt-3 text-base font-medium text-zinc-400">
              {lang === "en" ? "Simple path. No bull." : "Camino simple. Sin bull."}
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
            {steps.map((step, index) => (
              <div key={step.n} className="contents">
                <article className="flex flex-col border border-[#27272A] bg-gradient-to-b from-[#10b981]/[0.07] to-transparent px-6 py-8 text-center">
                  <span className="mb-4 font-display text-4xl font-black tracking-tighter text-[#10b981]/90">
                    {step.n}
                  </span>
                  <h3 className="font-display text-xl font-black uppercase tracking-tight text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </article>
                {index < steps.length - 1 && (
                  <div className="hidden items-center justify-center self-center text-[#10b981]/80 md:flex" aria-hidden>
                    <span className="h-px w-5 bg-[#10b981]/35" />
                    <ArrowRight className="h-5 w-5 shrink-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;
