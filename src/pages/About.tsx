import React from 'react';
import fotoMia from '../assets/FotoMia.png'; 
import {translations} from '../locales/translations';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
    const { lang } = useLanguage();
    const t = translations[lang].about;
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Title section */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                {t.title}
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
                    [ {t.subtitle} ]
                </span>
            </h1>

            {/* Main container: On mobile in reverse column (image above, text below), on PC in row */}
            <div className="flex flex-col-reverse md:flex-row items-start gap-10">
                
                {/* Text block */}
                <div className="flex-1 space-y-6">
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        {t.p1_1}<a href="https://www.uax.es" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">{t.p1_uax}</a>{t.p1_2} <a href="https://www.ust.com" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">{t.p1_ust}</a>{t.p1_3} <span className="border-b border-dashed border-phosphor-green/70 pb-0.5">{t.p1_tech}</span>
                    </p> 
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        {t.p2_1}<a href="https://www.uoc.edu" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">{t.p2_uoc}</a>{t.p2_2}
                    </p>
                    
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        {t.p3}
                    </p>
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        {t.p4_1}<a href="https://www.ucm.es" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">{t.p4_ucm}</a>{t.p4_2}
                    </p>
                </div>

                {/* Image block */}
                {/* shrink-0 allow the image to maintain its size. sticky do the image stay in place while scrolling on PC */}
                <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 border-2 border-phosphor-green/50 p-2 mx-auto md:mx-0 md:sticky md:top-24">
                    <img 
                        src={fotoMia} 
                        alt="David Prados" 
                        // Retro filter: black and white with high contrast. On hover, it returns to its original color.
                        className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
        </div>
    );
};