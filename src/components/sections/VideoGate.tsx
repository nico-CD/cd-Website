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
              className="aspect-[21/9] w-full object-cover object-center"
            />
          </picture>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-8 pt-16 text-center sm:px-10 sm:pb-10">
            <p className="mx-auto w-full max-w-2xl text-center text-lg font-medium leading-relaxed text-white drop-shadow md:text-2xl">
              {copy.line}
            </p>
            <a
              href={DEMO_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-4 inline-flex text-sm font-bold text-[#10b981] underline-offset-4 hover:underline md:text-base"
            >
              {copy.link}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGate;
