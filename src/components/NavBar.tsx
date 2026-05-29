import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';

export const Navbar: React.FC = () => {
    const location = useLocation();
    const { lang, toggleLanguage } = useLanguage();
    const t = translations[lang].navbar;

    const isActive = (path: string) => location.pathname === path;
    return (
        <header className="border-b border-phosphor-green/20 sticky top-0 bg-black/90 backdrop-blur-sm z-50">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/" className="text-phosphor-green font-bold text-xl cursor-pointer hover:opacity-80">
                    DAVID@PRADOS:~# <span className="animate-pulse">_</span>
                </Link>

                <nav className="flex flex-wrap justify-center gap-1 sm:gap-4 text-sm md:text-base">
                    <Link
                        to="/about"
                        className={`px-3 py-1 border transition-colors ${isActive('/about') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        {t.about}
                    </Link>
                    <Link
                        to="/projects"
                        className={`px-3 py-1 border transition-colors ${isActive('/projects') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        {t.projects}
                    </Link>
                    <Link
                        to="/experience"
                        className={`px-3 py-1 border transition-colors ${isActive('/experience') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        {t.experience}
                    </Link>
                    <Link
                        to="/formation"
                        className={`px-3 py-1 border transition-colors ${isActive('/formation') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        {t.formation}
                    </Link>
                    <Link
                        to="/contact"
                        className={`px-3 py-1 border transition-colors ${isActive('/contact') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        {t.contact}
                    </Link>
                </nav>
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-1 text-sm md:text-base border border-phosphor-green/50 text-phosphor-green hover:bg-phosphor-green hover:text-black transition-colors font-bold tracking-widest shrink-0 group"
                >
                    <span>sys.lang='{lang}'</span>
                    <img
                        src={
                            lang === 'ES' ? "https://flagcdn.com/w20/es.png" :
                                lang === 'EN' ? "https://flagcdn.com/w20/gb.png" :
                                    "https://flagcdn.com/w20/fr.png"
                        }
                        alt={`Bandera ${lang}`}
                        className="w-5 h-auto rounded-sm opacity-90 group-hover:grayscale transition-all"
                    />
                </button>
            </div>
        </header>
    );
};