import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

const VideoGate = () => {
  const { lang } = useTranslation();

  const revealProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  };

  const copy =
    lang === "en"
      ? {
          titleLead: "Test-drive our",
          titleAccent: "engines.",
          body: "Nine live trade engines. Open one and click through like a real job.",
          cta: "Open demos",
          previewAlt:
            "Collage of nine live trade engines: HVAC, plumbing, electrical, waste, roofing, towing, landscaping, cleaning, and custom",
        }
      : {
          titleLead: "Pruebe nuestros",
          titleAccent: "motores.",
          body: "Nueve motores de oficios en vivo. Abra uno y haga clic como en un trabajo real.",
          cta: "Abrir demos",
          previewAlt:
            "Collage de nueve motores en vivo: HVAC, plomería, eléctrico, residuos, techado, grúas, paisajismo, limpieza y a medida",
        };

  return (
    <section
      id="engines"
      className="relative z-10 overflow-hidden bg-background px-6 py-32 transition-colors duration-300 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-repeat opacity-[0.4]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%2310b981' stroke-width='0.5' stroke-opacity='0.8'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div className="relative z-10 mx-auto max-w-6xl" {...revealProps}>
        <div className="mb-10 space-y-5 text-center md:mb-12">
          <h2 className="mx-auto text-4xl font-black uppercase leading-none tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {copy.titleLead}{" "}
            <span className="text-[#10b981]">{copy.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            {copy.body}
          </p>
        </div>

        <a
          href={DEMO_HUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={copy.cta}
          className="group relative block w-full overflow-hidden rounded-2xl border border-[#27272A] bg-[#09090b] transition-colors duration-300 hover:border-[#10b981]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* Match collage 16:9 exactly — no object-cover crop, no hover-scale clip */}
          <div className="relative aspect-video w-full overflow-hidden bg-[#09090b]">
            <img
              src="/images/demo-preview.jpg"
              alt={copy.previewAlt}
              className="block h-full w-full object-contain object-center"
            />
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[#27272A] bg-zinc-950/90 px-5 py-4 sm:px-8 sm:py-5">
            <span className="hidden text-sm font-medium text-zinc-400 sm:inline">
              {lang === "en" ? "HVAC · Plumbing · Electrical · +6 more" : "HVAC · Plomería · Eléctrico · +6 más"}
            </span>
            <span className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#10b981] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-zinc-950 transition-colors group-hover:bg-[#0ea672] sm:w-auto">
              {copy.cta}
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default VideoGate;
