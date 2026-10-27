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
          alt: "Abstract emerald light paths on a dark industrial field",
        }
      : {
          line: "¿Curioso de verlo en acción? Mira nuestras 11 demos.",
          link: "Abrir demos →",
          alt: "Caminos de luz esmeralda abstractos sobre un campo industrial oscuro",
        };

  return (
    <section
      id="engines"
      className="relative z-10 border-t border-[#27272A] bg-background px-6 py-16 transition-colors duration-300 md:py-24"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="overflow-hidden border border-[#27272A] bg-[#09090b]">
          <img
            src="/images/curiosity-strip.jpg"
            alt={copy.alt}
            className="aspect-[21/9] w-full object-cover object-center"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">{copy.line}</p>
          <a
            href={DEMO_HUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-[#10b981] underline-offset-4 hover:underline"
          >
            {copy.link}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoGate;
