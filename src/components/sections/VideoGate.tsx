import { motion } from "framer-motion";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

/** Soft curiosity strip. Demos are secondary. Book is the main funnel. */
const VideoGate = () => {
  const { lang } = useTranslation();

  const copy =
    lang === "en"
      ? {
          line: "Curious to see it in action? Check out our 11 demos.",
          link: "Open demos →",
          alt: "Carrillo Dynamics bull mark with an emerald motion trail",
        }
      : {
          line: "¿Curioso de verlo en acción? Mira nuestras 11 demos.",
          link: "Abrir demos →",
          alt: "Marca del toro de Carrillo Dynamics con estela esmeralda",
        };

  return (
    <section
      id="engines"
      className="relative z-10 border-t border-[#27272A] bg-background px-6 py-16 transition-colors duration-300 md:py-24"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative overflow-hidden border border-[#27272A] bg-[#09090b]">
          <picture>
            <source srcSet="/images/curiosity-strip.webp" type="image/webp" />
            <img
              src="/images/curiosity-strip.jpg"
              alt={copy.alt}
              width={1280}
              height={549}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full object-cover object-[78%_center] sm:aspect-[21/9] sm:object-center"
            />
          </picture>
          {/* Mobile needs a heavier scrim — white type sits on the light bull mark otherwise. */}
          <div
            className="pointer-events-none absolute inset-0 bg-black/70 sm:bg-gradient-to-t sm:from-black/85 sm:via-black/40 sm:to-transparent sm:bg-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-5 pb-7 pt-16 text-center sm:px-10 sm:pb-10">
            <div className="mx-auto w-full max-w-2xl rounded-xl bg-black/55 px-4 py-4 backdrop-blur-[2px] sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
              <p className="text-center text-base font-semibold leading-snug text-white sm:text-lg sm:font-medium sm:leading-relaxed md:text-2xl">
                {copy.line}
              </p>
              <a
                href={DEMO_HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-bold text-[#10b981] underline-offset-4 hover:underline sm:mt-4 md:text-base"
              >
                {copy.link}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGate;
