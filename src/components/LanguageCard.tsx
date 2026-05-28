import React from 'react';

export interface LanguageCardProps {
    language: string;
    level: string;
    certification?: string; 
    description: string;
    flagSrc: string;
}

export const LanguageCard: React.FC<LanguageCardProps> = ({
    language,
    level,
    certification,
    description,
    flagSrc
}) => {
    return (
        <div className="group relative flex items-center justify-between border border-phosphor-green/30 p-5 bg-black hover:border-phosphor-green transition-colors duration-300">
            
            {/* Corner*/}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Language Info */}
            <div className="flex-1 pr-4">
                <h3 className="text-xl font-bold text-white group-hover:text-phosphor-green transition-colors tracking-widest">
                    &gt; {language}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2 items-center">
                    <span className="text-xs bg-phosphor-green/10 text-phosphor-green border border-phosphor-green/30 px-2 py-1 font-bold">
                        [ NIVEL: {level} ]
                    </span>
                    {certification && (
                        <span className="text-xs border border-dashed border-phosphor-green/50 text-phosphor-green/80 px-2 py-1 flex items-center gap-1">
                            <span className="text-zinc-500">CERTIFICACIÓN:</span> {certification}
                        </span>
                    )}
                </div>
                <p className="text-xs text-zinc-500 mt-3 uppercase tracking-wider">
                    sys.info: {description}
                </p>
            </div>

            {/* Flag Container */}
            <div className="w-16 h-12 md:w-24 md:h-16 shrink-0 border border-dashed border-phosphor-green/40 p-1 bg-zinc-950 flex items-center justify-center">
                <img 
                    src={flagSrc} 
                    alt={`Bandera de ${language}`} 
                    className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
            </div>
            
        </div>
    );
};