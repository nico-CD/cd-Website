import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "@/components/LanguageProvider";

interface HeroProps {
  onContactClick?: () => void;
}

const DEMO_HUB = "https://demo.carrillodynamics.com";

const Hero = (_props: HeroProps) => {
  const { lang, t } = useTranslation();

  const board = lang === "en"
    ? {
        title: "Owner board",
        live: "Live",
        rows: [
          { name: "Rivera · HVAC", status: "New", money: "Unpaid", tone: "warn" as const },
          { name: "Chen · Leak", status: "Dispatched", money: "Unpaid", tone: "warn" as const },
          { name: "Ortiz · Install", status: "Done", money: "Paid", tone: "ok" as const },
        ],
        strip: ["Paid", "Outstanding", "Pipeline"],
        stripVals: ["$2,480", "$1,150", "$4,900"],
        foot: "Intake → board. Status sticks.",
      }
    : {
        title: "Tablero dueño",
        live: "En vivo",
        rows: [
          { name: "Rivera · HVAC", status: "Nuevo", money: "Sin pagar", tone: "warn" as const },
          { name: "Chen · Fuga", status: "Despachado", money: "Sin pagar", tone: "warn" as const },
          { name: "Ortiz · Instalación", status: "Listo", money: "Pagado", tone: "ok" as const },
        ],
        strip: ["Pagado", "Pendiente", "Pipeline"],
        stripVals: ["$2,480", "$1,150", "$4,900"],
        foot: "Captación → tablero. El estado queda.",
      };

  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-background px-6 pb-16 pt-32 transition-colors duration-300 md:pb-24 md:pt-36">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.55'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(ellipse_at_85%_70%,rgba(16,185,129,0.08),transparent_50%),linear-gradient(to_bottom,transparent_40%,hsl(240_5.9%_3.5%)_100%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent"
        initial={{ top: "18%", opacity: 0 }}
        animate={{ top: ["18%", "78%"], opacity: [0, 0.7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <p className="tech-mono mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#10b981]/90">
            Carrillo Dynamics
          </p>

          <h1 className="uppercase leading-[0.95]">
            <span className="block text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {lang === "en" ? "You're losing leads?" : "¿Está perdiendo leads?"}
            </span>
            <span className="mt-1 block text-4xl font-black tracking-tight text-[#10b981] sm:text-5xl lg:text-6xl md:mt-2">
              {lang === "en" ? "We got your back." : "Cuenta con nosotros."}
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base font-medium leading-snug text-zinc-300 md:mt-6 md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:max-w-none">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-md bg-[#10b981] px-8 py-4 text-lg font-black uppercase text-zinc-950 transition-colors hover:bg-[#0ea672]"
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

        {/* Capability proof: owner board preview (product, not decoration) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="relative w-full"
          aria-hidden
        >
          <div className="absolute -inset-6 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.18),transparent_70%)] blur-2xl" />
          <div className="overflow-hidden border border-[#10b981]/25 bg-[#0c0c0f]/90 shadow-[0_0_0_1px_rgba(16,185,129,0.08)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="tech-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  {board.title}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 tech-mono text-[10px] font-semibold uppercase tracking-wider text-[#10b981]">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#10b981]" />
                {board.live}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-px border-b border-white/10 bg-white/5">
              {board.strip.map((label, i) => (
                <div key={label} className="bg-[#0c0c0f] px-3 py-3">
                  <p className="tech-mono text-[9px] uppercase tracking-wider text-zinc-500">{label}</p>
                  <p className="mt-1 text-sm font-semibold tabular-nums text-white">{board.stripVals[i]}</p>
                </div>
              ))}
            </div>

            <ul className="divide-y divide-white/5">
              {board.rows.map((row, i) => (
                <motion.li
                  key={row.name}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.12, duration: 0.45 }}
                  className="flex items-center justify-between gap-3 px-4 py-3.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{row.name}</p>
                    <p className="tech-mono mt-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
                      {row.status}
                    </p>
                  </div>
                  <span
                    className={
                      row.tone === "ok"
                        ? "tech-mono shrink-0 border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400"
                        : "tech-mono shrink-0 border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400"
                    }
                  >
                    {row.money}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="border-t border-white/10 px-4 py-3">
              <p className="tech-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{board.foot}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
