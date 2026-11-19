import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/components/LanguageProvider";
import { BullArc } from "@/components/sections/BullArc";

interface HeroProps {
  onContactClick?: () => void;
}

const DEMO_HUB = "https://demo.carrillodynamics.com";

const Hero = (_props: HeroProps) => {
  const { lang, t } = useTranslation();

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-background px-6 pb-16 pt-32 transition-colors duration-300 md:pb-24 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_25%,rgba(16,185,129,0.12),transparent_50%),radial-gradient(ellipse_at_90%_60%,rgba(16,185,129,0.07),transparent_45%),linear-gradient(to_bottom,transparent_45%,hsl(240_5.9%_3.5%)_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <p className="tech-mono mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#10b981]/90">
            Carrillo Dynamics
          </p>

          <h1 className="font-display uppercase leading-[0.95]">
            <span className="block text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {lang === "en" ? "You're losing jobs?" : "¿Está perdiendo trabajos?"}
            </span>
            <span className="mt-1 block text-4xl font-bold tracking-tight text-[#10b981] sm:text-5xl lg:text-6xl md:mt-2">
              {lang === "en" ? "We got your back." : "Cuenta con nosotros."}
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base font-medium leading-snug text-zinc-300 md:mt-6 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:max-w-none">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-md bg-[#10b981] px-8 py-4 text-lg font-bold uppercase text-zinc-950 transition-colors hover:bg-[#0ea672]"
            >
              {lang === "en" ? "Book a call" : "Agende su llamada"}
            </Link>
            <a
              href={DEMO_HUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-200 transition-colors hover:border-[#10b981]/50 hover:text-white"
            >
              {lang === "en" ? "Try a live demo" : "Probar un demo"}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <BullArc />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
