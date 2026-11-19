import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/components/LanguageProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import SEOManager from "@/components/SEOManager";

const insightImages: Record<string, { webp: string; png: string }> = {
  "60-second-lead-rule": { webp: "/insights/insight-1.webp", png: "/insights/insight-1.png" },
  "scaling-without-hiring": { webp: "/insights/insight-2.webp", png: "/insights/insight-2.png" },
  "stop-losing-leads": { webp: "/insights/insight-3.webp", png: "/insights/insight-3.png" },
  "true-cost-manual-entry": { webp: "/insights/insight-4.webp", png: "/insights/insight-4.png" },
  "audit-your-operations": { webp: "/insights/insight-5.webp", png: "/insights/insight-5.png" },
  "after-hours-jobs": { webp: "/insights/insight-7.webp", png: "/insights/insight-7.png" },
  "engineering-philosophy": { webp: "/insights/insight-6.webp", png: "/insights/insight-6.png" },
};

const ArticlesPage = () => {
  const { lang, t } = useTranslation();
  const [featured, ...rest] = t.articles;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-[#10b981]/10">
      <SEOManager
        title={lang === "en" ? "Resources" : "Recursos"}
        description={
          lang === "en"
            ? "Practical guides to keep more jobs, save time, and cut chaos in your shop."
            : "Guías prácticas para conservar más trabajos, ahorrar tiempo y reducir el caos en su taller."
        }
      />
      <Navbar />

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center opacity-[0.04]">
        <img src="/bull_PNGs/vect.bull.svg" alt="" className="h-[720px] w-[720px] object-contain" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.45'/%3E%3C/svg%3E")`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative space-y-12"
        >
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-6xl md:text-7xl">
              {t.pageTitles.articles.main}{" "}
              <span className="text-[#10b981]">{t.pageTitles.articles.accent}.</span>
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 md:text-xl">
              {lang === "en"
                ? "Money made. Time saved. Less chaos. Practical reads for shop owners."
                : "Dinero ganado. Tiempo ahorrado. Menos caos. Lecturas prácticas para dueños de taller."}
            </p>
          </div>

          {featured && (
            <Link
              to={`/resources/${featured.id}`}
              className="group grid overflow-hidden border border-[#10b981]/25 bg-gradient-to-br from-[#10251c] via-[#0c0c0e] to-[#0c0c0e] transition-colors hover:border-[#10b981]/45 md:grid-cols-[1.1fr_0.9fr]"
            >
              {insightImages[featured.id] && (
                <div className="min-h-[220px] border-b border-[#27272A] bg-black md:min-h-full md:border-b-0 md:border-r">
                  <picture>
                    <source srcSet={insightImages[featured.id].webp} type="image/webp" />
                    <img
                      src={insightImages[featured.id].png}
                      alt={featured.title}
                      width={1200}
                      height={630}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </div>
              )}
              <div className="flex flex-col justify-between space-y-8 p-8 md:p-10">
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#10b981]">
                    {lang === "en" ? "Featured" : "Destacado"}
                  </p>
                  <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-[#34d399] md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="text-base font-medium leading-relaxed text-zinc-400 md:text-lg">
                    {featured.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
                    <Clock className="h-3.5 w-3.5 text-[#10b981]" />
                    {featured.readTime}
                  </span>
                  <ArrowRight className="h-5 w-5 text-zinc-400 transition-all group-hover:translate-x-1 group-hover:text-[#10b981]" />
                </div>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {rest.map((article) => (
              <Link
                key={article.id}
                to={`/resources/${article.id}`}
                className="group flex h-full flex-col justify-between border border-[#27272A] bg-[#0c0c0e]/90 p-7 transition-colors hover:border-[#10b981]/40 md:p-8"
              >
                <div className="space-y-4">
                  {insightImages[article.id] && (
                    <div className="h-40 overflow-hidden border border-[#27272A] bg-black">
                      <picture>
                        <source srcSet={insightImages[article.id].webp} type="image/webp" />
                        <img
                          src={insightImages[article.id].png}
                          alt={article.title}
                          width={1200}
                          height={630}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </picture>
                    </div>
                  )}
                  <h2 className="font-display text-2xl font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-[#10b981] md:text-3xl">
                    {article.title}
                  </h2>
                  <p className="line-clamp-3 text-base font-medium leading-relaxed text-zinc-400">
                    {article.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-[#27272A] pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                    <Clock className="h-3.5 w-3.5 text-[#10b981]/80" />
                    {article.readTime}
                  </span>
                  <ArrowRight className="h-5 w-5 text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-[#10b981]" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
