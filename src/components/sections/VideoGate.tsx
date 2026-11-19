import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

const TRADES_EN = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Waste",
  "Roofing",
  "Construction",
  "Barber",
  "Beauty",
  "Towing",
  "Landscaping",
  "Cleaning",
] as const;

const TRADES_ES = [
  "HVAC",
  "Plomería",
  "Eléctrico",
  "Residuos",
  "Techado",
  "Construcción",
  "Barbería",
  "Belleza",
  "Grúas",
  "Paisajismo",
  "Limpieza",
] as const;

/** Closer with trade proof. Book is the main funnel. */
const VideoGate = () => {
  const { lang } = useTranslation();
  const trades = lang === "es" ? TRADES_ES : TRADES_EN;

  const copy =
    lang === "en"
      ? {
          line: "Pick a trade. Try it live.",
          support: "Eleven live demos. Book a call if it clicks.",
          book: "Book a call",
          tryDemo: "Try a demo",
          tradesLabel: "Available trades",
        }
      : {
          line: "Elija un oficio. Pruébelo en vivo.",
          support: "Once demos en vivo. Agende si le conviene.",
          book: "Agende su llamada",
          tryDemo: "Prueba un demo",
          tradesLabel: "Oficios disponibles",
        };

  return (
    <section
      id="engines"
      className="relative z-10 border-t border-[#27272A] bg-background px-6 py-16 transition-colors duration-300 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.35'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative overflow-hidden border border-[#27272A] bg-[#0c0c0e]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent" />

          <div className="relative grid gap-10 px-6 py-12 sm:px-10 sm:py-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-14 md:px-12 md:py-16">
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {copy.line}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-zinc-400 sm:text-lg md:mx-0">
                {copy.support}
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:justify-start">
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

            <div className="relative border-t border-[#27272A] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {copy.tradesLabel}
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-left sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2">
                {trades.map((trade) => (
                  <li
                    key={trade}
                    className="text-sm font-medium tracking-wide text-zinc-300 sm:text-[15px]"
                  >
                    {trade}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGate;
