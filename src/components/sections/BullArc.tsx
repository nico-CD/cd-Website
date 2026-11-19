import { useEffect, useState } from "react";
import { useTranslation } from "@/components/LanguageProvider";

const BEATS = {
  en: [
    { before: "Money leaking.", after: "Money kept." },
    { before: "Time burning.", after: "Time saved." },
    { before: "Jobs slipping.", after: "More jobs." },
    { before: "Chaos rising.", after: "Less chaos." },
  ],
  es: [
    { before: "Dinero se fuga.", after: "Dinero cuidado." },
    { before: "Tiempo se quema.", after: "Tiempo ahorrado." },
    { before: "Trabajos se escapan.", after: "Más trabajos." },
    { before: "Caos crece.", after: "Menos caos." },
  ],
} as const;

const CYCLE_MS = 8000;

/** Logo-based chaos → control arc. Captions rotate through the hero sub beats. */
export function BullArc({ className = "" }: { className?: string }) {
  const { lang } = useTranslation();
  const beats = BEATS[lang === "es" ? "es" : "en"];
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setBeat(2);
      return;
    }
    const id = window.setInterval(() => {
      setBeat((i) => (i + 1) % beats.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [beats.length]);

  const { before, after } = beats[beat];

  return (
    <div className={`bull-arc relative mx-auto w-full max-w-lg ${className}`.trim()}>
      <div key={beat} className="bull-arc__stage relative aspect-square w-full" aria-hidden>
        <div className="bull-arc__pane bull-arc__pane--before absolute inset-0 flex flex-col items-center justify-center">
          <div className="bull-arc__haze bull-arc__haze--before" />
          <img
            src="/bull_PNGs/vect.bull.svg"
            alt=""
            width={320}
            height={320}
            className="bull-arc__bull bull-arc__bull--before relative z-10 h-[58%] w-[58%] object-contain"
            decoding="async"
          />
          <p
            key={`before-${beat}`}
            className="bull-arc__caption relative z-10 mt-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-red-400/90"
          >
            {before}
          </p>
        </div>

        <div className="bull-arc__pane bull-arc__pane--after absolute inset-0 flex flex-col items-center justify-center">
          <div className="bull-arc__haze bull-arc__haze--after" />
          <img
            src="/bull_PNGs/vect.bull.svg"
            alt=""
            width={320}
            height={320}
            className="bull-arc__bull bull-arc__bull--after relative z-10 h-[58%] w-[58%] object-contain"
            decoding="async"
          />
          <p
            key={`after-${beat}`}
            className="bull-arc__caption relative z-10 mt-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#10b981]"
          >
            {after}
          </p>
        </div>
      </div>
    </div>
  );
}
