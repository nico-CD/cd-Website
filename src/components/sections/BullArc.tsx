/** Lightweight logo-based before→after graphic. CSS only; respects reduced motion. */
export function BullArc({ className = "" }: { className?: string }) {
  return (
    <div className={`bull-arc relative mx-auto w-full max-w-lg ${className}`.trim()} aria-hidden>
      <div className="bull-arc__stage relative aspect-square w-full">
        <div className="bull-arc__pane bull-arc__pane--before absolute inset-0 flex items-center justify-center">
          <img
            src="/bull_PNGs/vect.bull.svg"
            alt=""
            width={320}
            height={320}
            className="bull-arc__bull bull-arc__bull--before relative z-10 h-[62%] w-[62%] object-contain"
            decoding="async"
          />
        </div>

        <div className="bull-arc__pane bull-arc__pane--after absolute inset-0 flex items-center justify-center">
          <img
            src="/bull_PNGs/vect.bull.svg"
            alt=""
            width={320}
            height={320}
            className="bull-arc__bull bull-arc__bull--after relative z-10 h-[62%] w-[62%] object-contain"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
