import { Link, useParams } from "react-router-dom";
import { useTranslation } from "./LanguageProvider";
import { cn } from "@/lib/utils";
import { DEMO_HUB_URL } from "@/data/trades";

const ArticleSidebar = () => {
  const { lang, t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  return (
    <aside className="fixed bottom-0 left-0 top-24 hidden w-80 overflow-y-auto border-r border-[#27272A] bg-background p-8 transition-colors duration-300 lg:block">
      <div className="space-y-8">
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">
            {lang === "en" ? "Resources" : "Recursos"}
          </h3>
          <nav className="space-y-1">
            {t.articles.map((article) => (
              <Link
                key={article.id}
                to={`/resources/${article.id}`}
                className={cn(
                  "block border-l-2 px-4 py-3 text-sm font-bold uppercase tracking-tight transition-all",
                  id === article.id
                    ? "border-[#10b981] bg-[#10b981]/10 text-foreground"
                    : "border-transparent text-zinc-500 hover:border-[#27272A] hover:text-foreground"
                )}
              >
                {article.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#27272A] pt-8">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">
            {lang === "en" ? "Next step" : "Siguiente paso"}
          </h3>
          <nav className="space-y-4">
            <Link
              to="/book"
              className="block px-4 text-xs font-black uppercase tracking-[0.1em] text-[#10b981] transition-colors hover:text-[#34d399]"
            >
              {lang === "en" ? "Book a call" : "Agende su llamada"}
            </Link>
            <a
              href={DEMO_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 text-xs font-black uppercase tracking-[0.1em] text-zinc-400 transition-colors hover:text-[#10b981]"
            >
              {lang === "en" ? "Try a demo" : "Prueba un demo"}
            </a>
            <Link
              to="/faq"
              className="block px-4 text-xs font-black uppercase tracking-[0.1em] text-zinc-400 transition-colors hover:text-[#10b981]"
            >
              {t.nav.faq}
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
