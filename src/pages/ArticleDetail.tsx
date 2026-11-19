import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "../components/LanguageProvider";
import { ArrowLeft, ArrowRight, Clock, Calendar, Printer, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import ArticleSidebar from "../components/ArticleSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEOManager from "../components/SEOManager";
import { Button } from "../components/ui/button";
import { DEMO_HUB_URL } from "@/data/trades";

const insightImages: Record<string, { webp: string; png: string }> = {
  "60-second-lead-rule": { webp: "/insights/insight-1.webp", png: "/insights/insight-1.png" },
  "scaling-without-hiring": { webp: "/insights/insight-2.webp", png: "/insights/insight-2.png" },
  "stop-losing-leads": { webp: "/insights/insight-3.webp", png: "/insights/insight-3.png" },
  "true-cost-manual-entry": { webp: "/insights/insight-4.webp", png: "/insights/insight-4.png" },
  "audit-your-operations": { webp: "/insights/insight-5.webp", png: "/insights/insight-5.png" },
  "after-hours-jobs": { webp: "/insights/insight-7.webp", png: "/insights/insight-7.png" },
  "engineering-philosophy": { webp: "/insights/insight-6.webp", png: "/insights/insight-6.png" },
};

const ArticleDetail = () => {
  const { id } = useParams();
  const { t, lang } = useTranslation();
  const navigate = useNavigate();
  const [eggPressed, setEggPressed] = useState(false);

  const articleIndex = t.articles.findIndex((a) => a.id === id);
  const article = articleIndex >= 0 ? t.articles[articleIndex] : undefined;
  const prev = articleIndex > 0 ? t.articles[articleIndex - 1] : null;
  const next =
    articleIndex >= 0 && articleIndex < t.articles.length - 1
      ? t.articles[articleIndex + 1]
      : null;
  const isPhilosophy = article?.id === "engineering-philosophy";

  useEffect(() => {
    setEggPressed(false);
  }, [id]);

  const handlePrint = () => window.print();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: article?.title,
          text: article?.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert(lang === "en" ? "Link copied to clipboard." : "Enlace copiado al portapapeles.");
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8 font-sans">
        <div className="space-y-6 text-center">
          <h1 className="font-display text-4xl font-black uppercase tracking-tighter text-foreground">
            {lang === "en" ? "Resource not found" : "Recurso no encontrado"}
          </h1>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-[#10b981] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === "en" ? "Back to resources" : "Volver a recursos"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans selection:bg-[#10b981]/10">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-[0.22] print:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 24 0 L 0 0 0 24' fill='none' stroke='%2310b981' stroke-width='0.6' stroke-opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />
      <SEOManager title={article.title} description={article.description} type="article" />
      <Navbar />

      <div className="relative flex min-h-screen flex-col bg-background pt-20 lg:flex-row">
        <ArticleSidebar />

        <main className="relative flex-1 overflow-x-hidden lg:ml-80">
          <div className="relative z-10 mx-auto max-w-6xl space-y-16 px-6 py-12 md:px-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-14"
            >
              <div className="print-brand mb-6 hidden items-center justify-between border-b-2 border-[#10b981] pb-3 print:flex">
                <div className="flex items-center gap-2">
                  <img src="/bull_PNGs/vect.bull.svg" alt="" className="h-7 w-7" />
                  <p className="font-display text-sm font-black uppercase tracking-tight text-[#067a4f]">
                    Carrillo <span className="text-[#10b981]">Dynamics</span>
                  </p>
                </div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#067a4f]">
                  carrillodynamics.com/resources
                </p>
              </div>

              <div className="space-y-6 border-l-4 border-[#10b981] pl-6 md:pl-8">
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#10b981] transition-colors hover:text-foreground print:hidden"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  {t.articleLabels.backToArchive}
                </Link>

                <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter text-foreground break-words sm:text-5xl md:text-6xl">
                  {article.title}
                </h1>

                <div className="hidden space-y-2 print:block">
                  <p className="border border-[#10b981]/50 bg-[#ecfdf5] p-3 text-[10pt] font-medium leading-snug text-[#064e3b]">
                    <span className="mb-1 block font-mono text-[8pt] font-bold uppercase tracking-[0.14em] text-[#067a4f]">
                      {t.articleLabels.abstract}
                    </span>
                    {article.description}
                  </p>
                  <p className="border border-[#10b981]/50 bg-[#ecfdf5] p-3 text-[10pt] font-medium leading-snug text-[#064e3b]">
                    <span className="mb-1 block font-mono text-[8pt] font-bold uppercase tracking-[0.14em] text-[#067a4f]">
                      {t.articleLabels.technicalSpecs}
                    </span>
                    {article.takeaway}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 border-t border-[#27272A] pt-6 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-[#10b981]" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-[#10b981]" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
                <div className="space-y-10 lg:col-span-8">
                  {insightImages[article.id] && (
                    <div className="overflow-hidden border border-[#27272A] bg-black">
                      <picture>
                        <source srcSet={insightImages[article.id].webp} type="image/webp" />
                        <img
                          src={insightImages[article.id].png}
                          alt={article.title}
                          width={1200}
                          height={630}
                          loading="lazy"
                          decoding="async"
                          className="mx-auto h-auto max-h-[520px] w-full object-contain"
                        />
                      </picture>
                    </div>
                  )}

                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className="mb-8 text-lg leading-relaxed text-zinc-300 md:text-xl md:leading-relaxed" {...props} />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="mb-5 mt-14 font-display text-2xl font-black uppercase tracking-tight text-foreground md:text-3xl"
                          {...props}
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul className="mb-8 list-disc space-y-3 pl-6" {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li className="text-lg text-zinc-300" {...props} />
                      ),
                      h1: ({ node, ...props }) => <h1 className="hidden" {...props} />,
                      h2: ({ node, ...props }) => (
                        <h2
                          className="mb-6 mt-16 font-display text-3xl font-black tracking-tight text-foreground"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>

                <aside className="space-y-8 lg:col-span-4 print:hidden">
                  <div className="space-y-4 border border-[#10b981]/40 bg-[#0c0c0e]/90 p-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#10b981]">
                      {t.articleLabels.abstract}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-zinc-300">
                      {article.description}
                    </p>
                  </div>

                  <div className="space-y-4 border border-[#10b981]/40 bg-[#0c0c0e]/90 p-6">
                    {isPhilosophy ? (
                      <>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#10b981]">
                          {lang === "en" ? "Do not press" : "No pulse"}
                        </h4>
                        {!eggPressed ? (
                          <button
                            type="button"
                            onClick={() => setEggPressed(true)}
                            className="inline-flex w-full items-center justify-center rounded-md border border-[#10b981]/40 bg-[#10b981]/10 px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#34d399] transition-colors hover:border-[#10b981]/70 hover:bg-[#10b981]/18"
                          >
                            {lang === "en" ? "Press this anyway" : "Púlselo igual"}
                          </button>
                        ) : (
                          <div className="space-y-3">
                            <p className="text-sm font-medium leading-relaxed text-zinc-300">
                              {lang === "en"
                                ? "Nice. You ignore bad instructions. Operators do that. Now go secure some jobs."
                                : "Bien. Ignora instrucciones malas. Los operadores hacen eso. Ahora vaya a asegurar trabajos."}
                            </p>
                            <button
                              type="button"
                              onClick={() => navigate("/book")}
                              className="inline-flex w-full items-center justify-center rounded-md bg-[#10b981] px-4 py-3 text-sm font-bold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-[#0ea672]"
                            >
                              {lang === "en" ? "Book a call" : "Agende su llamada"}
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#10b981]">
                          {t.articleLabels.technicalSpecs}
                        </h4>
                        <p className="text-sm font-medium leading-relaxed text-zinc-300">
                          {article.takeaway}
                        </p>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={handlePrint}
                      variant="outline"
                      className="h-12 w-full justify-start rounded-md border-[#10b981]/40 text-xs font-bold uppercase tracking-widest hover:bg-[#10b981]/10"
                    >
                      <Printer className="mr-3 h-4 w-4 text-[#10b981]" />
                      {t.articleLabels.downloadPdf}
                    </Button>
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="h-12 w-full justify-start rounded-md border-[#10b981]/40 text-xs font-bold uppercase tracking-widest hover:bg-[#10b981]/10"
                    >
                      <Share2 className="mr-3 h-4 w-4 text-[#10b981]" />
                      {t.articleLabels.shareEntry}
                    </Button>
                  </div>
                </aside>
              </div>

              <div className="flex flex-col gap-3 border-t border-[#27272A] pt-8 sm:flex-row sm:justify-between print:hidden">
                {prev ? (
                  <Link
                    to={`/resources/${prev.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-400 transition-colors hover:text-[#10b981]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {prev.title}
                  </Link>
                ) : (
                  <span />
                )}
                {next && (
                  <Link
                    to={`/resources/${next.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-400 transition-colors hover:text-[#10b981] sm:text-right"
                  >
                    {next.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <section className="relative overflow-hidden border border-[#10b981]/25 bg-gradient-to-br from-[#10251c] via-[#0c0c0e] to-[#0c0c0e] p-8 print:hidden md:p-12">
                <div className="pointer-events-none absolute -right-10 bottom-[-20%] opacity-[0.07]">
                  <img src="/bull_PNGs/vect.bull.svg" alt="" className="h-56 w-56 object-contain" />
                </div>
                <div className="relative z-10 max-w-2xl space-y-5">
                  <h2 className="font-display text-3xl font-black uppercase tracking-tighter text-foreground md:text-5xl">
                    {lang === "en"
                      ? "Losing jobs? We got your back."
                      : "¿Perdiendo trabajos? Cuenta con nosotros."}
                  </h2>
                  <p className="text-lg font-medium text-zinc-400">
                    {lang === "en"
                      ? "Book a call and we map a system and owner board for your shop."
                      : "Agende una llamada y mapeamos un sistema y tablero de dueño para su taller."}
                  </p>
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <Button
                      onClick={() => navigate("/book")}
                      className="h-14 rounded-md bg-[#10b981] px-8 text-sm font-bold uppercase tracking-wider text-zinc-950 hover:bg-[#0ea672]"
                    >
                      {lang === "en" ? "Book a call" : "Agende su llamada"}
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                    <a
                      href={DEMO_HUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 items-center justify-center rounded-md border border-white/15 px-6 text-sm font-semibold uppercase tracking-wide text-zinc-200 transition-colors hover:border-[#10b981]/50 hover:text-white"
                    >
                      {lang === "en" ? "Try a demo" : "Prueba un demo"}
                    </a>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ArticleDetail;
