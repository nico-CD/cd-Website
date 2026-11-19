import { useTranslation } from "@/components/LanguageProvider";

/** Lightweight logo-based before→after graphic. CSS only; respects reduced motion. */
export function BullArc({ className = "" }: { className?: string }) {
  const { lang } = useTranslation();

  const before = lang === "en" ? "Stressed. Broke." : "Estresado. En rojo.";
  const after = lang === "en" ? "Calm. Paid." : "Tranquilo. Pagado.";

  return (
    <div className={`bull-arc relative mx-auto w-full max-w-lg ${className}`.trim()} aria-hidden>
      <div className="bull-arc__stage relative aspect-square w-full">
        <div className="bull-arc__pane bull-arc__pane--before absolute inset-0 flex flex-col items-center justify-center">
          <div className="bull-arc__ring bull-arc__ring--before absolute inset-[8%] rounded-full border border-red-500/25" />
          <img
            src="/bull_PNGs/vect.bull.svg"
            alt=""
            width={320}
            height={320}
            className="bull-arc__bull bull-arc__bull--before relative z-10 h-[58%] w-[58%] object-contain"
            decoding="async"
          />
          <p className="tech-mono relative z-10 mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-red-400/90">
            {before}
          </p>
        </div>

        <div className="bull-arc__pane bull-arc__pane--after absolute inset-0 flex flex-col items-center justify-center">
          <div className="bull-arc__ring bull-arc__ring--after absolute inset-[8%] rounded-full border border-[#10b981]/35" />
          <img
            src="/bull_PNGs/vect.bull.svg"
            alt=""
            width={320}
            height={320}
            className="bull-arc__bull bull-arc__bull--after relative z-10 h-[58%] w-[58%] object-contain"
            decoding="async"
          />
          <p className="tech-mono relative z-10 mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10b981]">
            {after}
          </p>
        </div>
      </div>
    </div>
  );
}
