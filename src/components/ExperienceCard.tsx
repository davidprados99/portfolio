import React from 'react';

// Props for the ExperienceCard component
export interface ExperienceCardProps {
    title: string;
    company: string;
    date: string;
    description: React.ReactNode;
    imageSrc: string;
    link: string;
    hardSkills?: string[]; // Optional array of hard skills related to the experience
    softSkills?: string[]; // Optional array of soft skills related to the experience
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    title,
    company,
    date,
    description,
    imageSrc,
    link,
    hardSkills,
    softSkills
}) => {
    return (
        <div className="group relative flex flex-col md:flex-row gap-6 border border-phosphor-green/30 p-6 bg-black hover:border-phosphor-green transition-colors duration-300">

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Text Content */}
            <div className="flex-1 space-y-4">
                <div className="border-b border-zinc-800 pb-2">
                    <h2 className="text-2xl font-bold text-white group-hover:text-phosphor-green transition-colors">
                        {title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 text-zinc-400">
                        <span className="font-semibold text-phosphor-green/80">@{company}</span>
                        <span className="text-sm bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                            [{date}]
                        </span>
                    </div>
                </div>

                <p className="text-zinc-300 leading-relaxed font-light text-lg">
                    {description}
                </p>
                {/* Optional Skills Section */}
                {(hardSkills || softSkills) && (
                    <div className="mt-6 space-y-4 pt-4 border-t border-zinc-800/50">

                        {/*Hard Skills */}
                        {hardSkills && hardSkills.length > 0 && (
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                                    [ HABILIDADES_TÉCNICAS ]
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {hardSkills.map((skill, index) => (
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

                        {/*Soft Skills */}
                        {softSkills && softSkills.length > 0 && (
                            <div>
                                <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                                    [ COMPETENCIAS_CLAVE ]
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {softSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-zinc-900 text-zinc-400 border border-zinc-700 px-2 py-1"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

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
                        alt={`${company} logo`}
                        className="w-full h-full object-contain grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                </a>
            </div>
        </div>
    );
};