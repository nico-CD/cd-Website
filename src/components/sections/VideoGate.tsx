import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

type TradeLink = {
  id: string;
  labelEn: string;
  labelEs: string;
  hubTrade: string | null;
};

const TRADES: TradeLink[] = [
  { id: "hvac", labelEn: "HVAC", labelEs: "HVAC", hubTrade: "hvac" },
  { id: "plumbing", labelEn: "Plumbing", labelEs: "Plomería", hubTrade: "plumbing" },
  { id: "electrical", labelEn: "Electrical", labelEs: "Eléctrico", hubTrade: "electrical" },
  { id: "waste", labelEn: "Waste", labelEs: "Residuos", hubTrade: "waste" },
  { id: "roofing", labelEn: "Roofing", labelEs: "Techado", hubTrade: "roofing" },
  { id: "construction", labelEn: "Construction", labelEs: "Construcción", hubTrade: "construction" },
  { id: "barber", labelEn: "Barber", labelEs: "Barbería", hubTrade: "barber" },
  { id: "beauty", labelEn: "Beauty", labelEs: "Belleza", hubTrade: "beauty" },
  { id: "towing", labelEn: "Towing", labelEs: "Grúas", hubTrade: "towing" },
  { id: "landscaping", labelEn: "Landscaping", labelEs: "Paisajismo", hubTrade: "landscaping" },
  { id: "cleaning", labelEn: "Cleaning", labelEs: "Limpieza", hubTrade: "cleaning" },
  {
    id: "custom",
    labelEn: "Custom builds as needed",
    labelEs: "A medida según se necesite",
    hubTrade: "custom",
  },
];

function hubTradeUrl(trade: string | null) {
  if (!trade) return DEMO_HUB_URL;
  return `${DEMO_HUB_URL}/?trade=${trade}`;
}

/** Closer with quiet brand + live trade links. Book is the main funnel. */
const VideoGate = () => {
  const { lang } = useTranslation();

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
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative overflow-hidden border border-[#10b981]/25 bg-gradient-to-br from-[#10251c] via-[#0c0c0e] to-[#0c0c0e]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-[#10b981]/55 via-[#10b981]/20 to-transparent" />
          <div className="pointer-events-none absolute -left-16 bottom-[-10%] flex h-[70%] w-[42%] items-center justify-center opacity-[0.05] md:left-auto md:-right-6 md:bottom-[-8%] md:h-[85%] md:w-[38%]">
            <img
              src="/bull_PNGs/vect.bull.svg"
              alt=""
              width={420}
              height={420}
              className="h-full w-full object-contain"
              decoding="async"
            />
          </div>
          <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#10b981]/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#10b981]/10 blur-3xl" />

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

            <div className="relative z-10 border-t border-[#27272A] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <div className="rounded-lg bg-[#0c0c0e]/80 px-3 py-4 backdrop-blur-[2px] md:bg-[#0c0c0e]/75 md:px-4 md:py-5">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  {copy.tradesLabel}
                </p>
                <ul className="grid grid-cols-1 gap-1.5 text-left sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {TRADES.map((trade) => {
                    const label = lang === "es" ? trade.labelEs : trade.labelEn;
                    const isCustom = trade.id === "custom";
                    return (
                      <li key={trade.id} className={isCustom ? "sm:col-span-2 lg:col-span-2" : undefined}>
                        <a
                          href={hubTradeUrl(trade.hubTrade)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group inline-flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm font-semibold tracking-wide transition-colors sm:text-[15px] ${
                            isCustom
                              ? "text-zinc-50 hover:bg-[#10b981]/15 hover:text-[#34d399]"
                              : "text-zinc-100 hover:bg-[#10b981]/10 hover:text-white"
                          }`}
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10b981] transition-transform group-hover:scale-125 group-hover:bg-[#34d399]"
                            aria-hidden
                          />
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGate;
