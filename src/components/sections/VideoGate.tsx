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
            "Night service call — the kind of trade shop engine you can test-drive live",
        }
      : {
          titleLead: "Pruebe nuestros",
          titleAccent: "motores.",
          body: "Nueve motores de oficios en vivo. Abra uno y haga clic como en un trabajo real.",
          cta: "Abrir demos",
          previewAlt:
            "Llamada de servicio nocturna — el tipo de motor de oficio que puede probar en vivo",
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
          className="group relative block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-video">
            <img
              src="/images/demo-preview.jpg"
              alt={copy.previewAlt}
              className="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* Atmosphere + CD brand wash — keeps the photo, kills nested-UI noise */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/45 to-zinc-950/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/70 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.28),_transparent_55%)]" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8 md:p-10">
              <span className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#10b981] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-zinc-950 shadow-[0_12px_40px_-8px_rgba(16,185,129,0.65)] transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:bg-[#0ea672]">
                {copy.cta}
                <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default VideoGate;
