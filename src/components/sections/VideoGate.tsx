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
          line: "See it on your trade.",
          support: "Eleven live shops. Same system.",
          book: "Book a call",
          tryDemo: "Try a demo",
        }
      : {
          line: "Véalo en su oficio.",
          support: "Once talleres en vivo. El mismo sistema.",
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
        className="relative z-10 mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="border border-[#27272A] bg-[#09090b] px-6 py-12 text-center sm:px-10 sm:py-14">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            {copy.line}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base font-medium text-zinc-400 sm:text-lg">
            {copy.support}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
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
