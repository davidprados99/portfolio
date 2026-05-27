import React from 'react';

export interface ProjectCardProps {
    title: string;
    date: string;
    description: React.ReactNode;
    imageSrc: string;
    technologies: string[];
    githubUrl?: string; 
    demoUrl?: string;   
    status?: string;    
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    date,
    description,
    imageSrc,
    technologies,
    githubUrl,
    demoUrl,
    status = "COMPLETADO"
}) => {
    return (
        <div className="group relative flex flex-col md:flex-row gap-6 border border-phosphor-green/30 p-6 bg-black hover:border-phosphor-green transition-colors duration-300">
            
            {/* Corner Decorative Elements */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Principal Content */}
            <div className="flex-1 flex flex-col">
                <div className="border-b border-zinc-800 pb-2 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h2 className="text-2xl font-bold text-white group-hover:text-phosphor-green transition-colors flex items-center gap-3">
                            {title}
                            {/* Status Label */}
                            <span className="text-xs font-normal bg-phosphor-green/20 text-phosphor-green px-2 py-0.5 border border-phosphor-green/30 tracking-widest hidden sm:inline-block">
                                sys.status: {status}
                            </span>
                        </h2>
                        <span className="text-sm text-zinc-500 mt-1 sm:mt-0 font-bold">
                            [{date}]
                        </span>
                    </div>
                </div>
                
                {/* Description */}
                <p className="text-zinc-300 leading-relaxed font-light text-lg mb-6 flex-1">
                    {description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-2 font-bold">
                        [ STACK_TECNOLÓGICO ]
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="text-xs bg-phosphor-green/10 text-phosphor-green border border-phosphor-green/30 px-2 py-1"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800/50 mt-auto">
                    {githubUrl && (
                        <a 
                            href={githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-zinc-400 hover:text-phosphor-green hover:bg-phosphor-green/10 border border-transparent hover:border-phosphor-green px-3 py-1.5 transition-all flex items-center gap-2"
                        >
                            <span>[ &lt;/&gt; ]</span> SOURCE_CODE
                        </a>
                    )}
                    {demoUrl && (
                        <a 
                            href={demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-bold text-black bg-phosphor-green hover:bg-phosphor-green/80 px-3 py-1.5 transition-all flex items-center gap-2"
                        >
                            <span>[ RUN ]</span> LAUNCH_APP
                        </a>
                    )}
                </div>
            </div>

            {/* Project Image */}
            <div className="w-full md:w-56 md:h-56 shrink-0 border border-dashed border-phosphor-green/40 p-2 bg-zinc-950 flex items-center justify-center relative overflow-hidden group-hover:border-phosphor-green/80 transition-colors">
                <a 
                    href={demoUrl || githubUrl || "#"} 
                    target={demoUrl || githubUrl ? "_blank" : "_self"} 
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    onClick={(e) => !(demoUrl || githubUrl) && e.preventDefault()}
                >
                    <img 
                        src={imageSrc} 
                        alt={`Captura del proyecto ${title}`} 
                        className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                </a>
            </div>
        </div>
    );
};