import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";

const HowItWorks = () => {
  const { lang } = useTranslation();

  const steps =
    lang === "en"
      ? [
          {
            n: "01",
            title: "Try a demo",
            description: "Open a live shop in your trade and see intake and the owner board for yourself.",
          },
          {
            n: "02",
            title: "Book a call",
            description: "We map what your shop needs — no pitch deck, just the real gaps.",
          },
          {
            n: "03",
            title: "We build your system",
            description: "Money made. Time saved. You run the work; we handle the busywork.",
          },
        ]
      : [
          {
            n: "01",
            title: "Pruebe un demo",
            description: "Abra un taller en vivo de su oficio y vea la captación y el tablero de dueño.",
          },
          {
            n: "02",
            title: "Agende su llamada",
            description: "Mapeamos lo que su taller necesita — sin pitch, solo las fallas reales.",
          },
          {
            n: "03",
            title: "Construimos su sistema",
            description: "Dinero ganado. Tiempo ahorrado. Usted corre el trabajo; nosotros lo repetitivo.",
          },
        ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <img
          src="/bull_PNGs/vect.bull.svg"
          alt=""
          className="h-[640px] w-[640px] object-contain"
          decoding="async"
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[#10b981]/12 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {lang === "en" ? "How we work" : "Cómo trabajamos"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium text-zinc-400 md:text-lg">
            {lang === "en"
              ? "Simple path. No theater."
              : "Camino simple. Sin teatro."}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div key={step.n} className="contents">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.45 }}
                className="relative flex flex-col border border-[#27272A] bg-gradient-to-b from-[#10b981]/[0.07] to-transparent px-7 py-9 text-center md:px-8 md:py-10"
              >
                <span className="mb-5 font-display text-4xl font-black tracking-tighter text-[#10b981]/90 md:text-5xl">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-black uppercase tracking-tight text-zinc-100 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-zinc-400 md:text-lg">
                  {step.description}
                </p>
              </motion.article>

              {index < steps.length - 1 && (
                <div
                  className="hidden items-center justify-center self-center text-[#10b981]/80 md:flex"
                  aria-hidden
                >
                  <span className="h-px w-5 bg-[#10b981]/35 lg:w-8" />
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center md:mt-28">
          <p className="mb-6 font-display text-2xl font-black tracking-tight text-foreground md:text-4xl">
            {lang === "en" ? "Ready for a custom build?" : "¿Listo para un build a medida?"}
          </p>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-md bg-[#10b981] px-8 py-4 text-sm font-black uppercase tracking-wider text-zinc-950 transition-colors hover:bg-[#0ea672] md:text-base"
          >
            {lang === "en" ? "Book a call →" : "Agende su llamada →"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
