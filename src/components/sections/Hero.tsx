import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/components/LanguageProvider";

interface HeroProps {
  onContactClick?: () => void;
}

const Hero = (_props: HeroProps) => {
  const { lang, t } = useTranslation();

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-background px-6 pb-16 pt-36 transition-colors duration-300 md:pb-28 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        <h1 className="uppercase leading-[0.95]">
          <span className="block text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl md:whitespace-nowrap">
            {lang === "en" ? "Less chaos. More capacity." : "Menos caos. Más capacidad."}
          </span>
          <span className="mt-1 block text-4xl font-black tracking-tight text-[#10b981] sm:text-6xl lg:text-7xl md:mt-2 md:whitespace-nowrap">
            {lang === "en" ? "Automate your shop." : "Automatiza tu taller."}
          </span>
        </h1>

        <p className="mx-auto mt-6 mb-12 max-w-3xl text-lg font-medium leading-relaxed text-zinc-300 md:mb-16 md:text-xl">
          {t.hero.subtitle}
        </p>

        <Link
          to="/book"
          className="rounded-xl bg-[#10b981] px-10 py-5 text-xl font-black uppercase text-zinc-950 shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 hover:bg-[#0ea672]"
        >
          {lang === "en" ? "Book a 15-min call" : "Agendar llamada de 15 min"}
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
