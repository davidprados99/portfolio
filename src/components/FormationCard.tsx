import React from 'react';

export interface FormationCardProps {
    title: string;
    institution: string;
    date: string;
    grade?: string; 
    achievements?: string; 
    skills?: string[]; 
    imageSrc: string;
    link?: string;
    status: string; 
}

export const FormationCard: React.FC<FormationCardProps> = ({
    title,
    institution,
    date,
    grade,
    achievements,
    skills,
    imageSrc,
    link,
    status
}) => {
    return (
        <div className="group relative flex flex-col md:flex-row gap-6 border border-phosphor-green/30 p-6 bg-black hover:border-phosphor-green transition-colors duration-300">
            
            {/* Corner */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Principal content */}
            <div className="flex-1 space-y-4">
                <div className="border-b border-zinc-800 pb-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h2 className="text-2xl font-bold text-white group-hover:text-phosphor-green transition-colors">
                            {title}
                        </h2>
                        <span className="text-sm font-normal bg-phosphor-green/20 text-phosphor-green px-2 py-0.5 border border-phosphor-green/30 tracking-widest mt-2 sm:mt-0 w-fit">
                            sys.status: {status}
                        </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 text-zinc-400">
                        <span className="font-semibold text-phosphor-green/80">@{institution}</span>
                        <span className="text-sm bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                            [{date}]
                        </span>
                    </div>
                </div>

                {/* Notes and Achievements */}
                {(grade || achievements) && (
                    <div className="flex flex-col gap-1 my-2">
                        {grade && (
                            <p className="text-zinc-300 font-mono text-sm">
                                <span className="text-zinc-500">NOTA_MEDIA:</span> {grade}
                            </p>
                        )}
                        {achievements && (
                            <p className="text-phosphor-green/90 font-mono text-sm">
                                <span className="text-zinc-500">LOGRO_DESTACADO:</span> {achievements}
                            </p>
                        )}
                    </div>
                )}

                {/* Hard Skills */}
                {skills && skills.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-zinc-800/50">
                        <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                            [ CONOCIMIENTOS_ADQUIRIDOS ]
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span 
                                    key={index} 
                                    className="text-xs bg-phosphor-green/10 text-phosphor-green border border-phosphor-green/30 px-2 py-1"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Image Container */}
            <div className="w-full md:w-40 h-40 shrink-0 border border-dashed border-phosphor-green/40 p-2 bg-zinc-950 flex items-center justify-center relative overflow-hidden group-hover:border-phosphor-green/80 transition-colors">
                <a href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full">
                    <img
                        src={imageSrc}
                        alt={`${institution} logo`}
                        className="w-full h-full object-contain grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                </a>
            </div>
        </div>
    );
};