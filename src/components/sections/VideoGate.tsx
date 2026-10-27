import { motion } from "framer-motion";
import { useTranslation } from "@/components/LanguageProvider";
import { DEMO_HUB_URL } from "@/data/trades";

/** Soft curiosity strip — demos are secondary; Book is the main funnel. */
const VideoGate = () => {
  const { lang } = useTranslation();

  const copy =
    lang === "en"
      ? {
          line: "Curious to see it in action? Check out our 11 demos.",
          link: "Open demos →",
        }
      : {
          line: "¿Curioso de verlo en acción? Mira nuestras 11 demos.",
          link: "Abrir demos →",
        };

  return (
    <section
      id="engines"
      className="relative z-10 border-t border-[#27272A] bg-background px-6 py-16 transition-colors duration-300 md:py-20"
    >
      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
          {copy.line}
        </p>
        <a
          href={DEMO_HUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm font-bold text-[#10b981] underline-offset-4 hover:underline"
        >
          {copy.link}
        </a>
      </motion.div>
    </section>
  );
};

export default VideoGate;
