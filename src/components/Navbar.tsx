import { motion } from "framer-motion";

import { useTranslation } from "./LanguageProvider";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { lang, setLanguage, t } = useTranslation();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 md:px-8 border-b border-border bg-background/95 backdrop-blur-sm transition-all duration-300"
        >
            <Link 
                to="/"
                className="flex min-w-0 items-center gap-2 sm:gap-4 cursor-pointer group"
            >
                <div className="relative h-9 w-9 shrink-0 overflow-hidden sm:h-10 sm:w-10">
                    <img
                        src="/bull_PNGs/vect.bull.svg"
                        alt="Carrillo Dynamics Logo"
                        className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    />
                </div>
                <span className="truncate text-xs font-black uppercase tracking-[0.15em] text-foreground sm:text-sm sm:tracking-[0.2em]">Carrillo Dynamics</span>
            </Link>

            <div className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-6">
                <nav className="hidden md:flex items-center gap-8 mr-8">
                    <Link to="/resources" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-[#10b981] transition-colors">{t.nav.articles}</Link>
                    <Link to="/faq" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-[#10b981] transition-colors">{t.nav.faq}</Link>
                </nav>

                <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 px-3 sm:px-4 rounded-none border border-zinc-800 hover:border-[#10b981] hover:bg-zinc-900/50 transition-all text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
                    onClick={() => setLanguage(lang === 'en' ? 'es' : 'en')}
                >
                    <span className="sm:hidden">{lang === 'en' ? 'ES' : 'EN'}</span>
                    <span className="hidden sm:inline">{lang === 'en' ? 'VER EN ESPAÑOL' : 'VIEW IN ENGLISH'}</span>
                </Button>
            </div>
        </motion.nav>
    );
};

export default Navbar;

