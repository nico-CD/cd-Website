import { useTranslation } from "@/components/LanguageProvider";

/** Logo-based chaos → control arc. CSS only; respects reduced motion. */
export function BullArc({ className = "" }: { className?: string }) {
  const { lang } = useTranslation();

  const before = lang === "en" ? "Jobs slipping." : "Trabajos se escapan.";
  const after = lang === "en" ? "Jobs locked." : "Trabajos asegurados.";

  return (
    <div className={`bull-arc relative mx-auto w-full max-w-lg ${className}`.trim()}>
      <div className="bull-arc__stage relative aspect-square w-full" aria-hidden>
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
          <p className="bull-arc__caption bull-arc__caption--before relative z-10 mt-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-red-400/90">
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
          <p className="bull-arc__caption bull-arc__caption--after relative z-10 mt-5 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#10b981]">
            {after}
          </p>
        </div>
      </div>
    </div>
  );
}
