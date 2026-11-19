import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

/** Clean closer. Demos are secondary. Book is the main funnel. */
const VideoGate = () => {
  const { lang } = useTranslation();

  const copy =
    lang === "en"
      ? {
          line: "Pick a trade. Try it live.",
          support: "Eleven live demos. Book a call if it clicks.",
          book: "Book a call",
          tryDemo: "Try a demo",
        }
      : {
          line: "Elija un oficio. Pruébelo en vivo.",
          support: "Once demos en vivo. Agende cuando le convenza.",
          book: "Agende su llamada",
          tryDemo: "Prueba un demo",
        };

  return (
    <section
      id="engines"
      className="relative z-10 border-t border-[#27272A] bg-background px-6 py-16 transition-colors duration-300 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative overflow-hidden border border-[#27272A] bg-[#09090b] px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/70 to-transparent" />
          <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#10b981]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#10b981]/[0.07] blur-3xl" />

          <h2 className="relative font-display text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            {copy.line}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base font-medium text-zinc-400 sm:text-lg">
            {copy.support}
          </p>
          <div className="relative mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-md bg-[#10b981] px-8 py-4 text-base font-bold uppercase text-zinc-950 transition-colors hover:bg-[#0ea672]"
            >
              {copy.book}
            </Link>
            <a
              href={DEMO_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-200 transition-colors hover:border-[#10b981]/50 hover:text-white"
            >
              {copy.tryDemo}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGate;
