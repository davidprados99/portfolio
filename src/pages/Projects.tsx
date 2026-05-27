import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import PortfolioImg from '../assets/portfolio_image.png';
import rehabLogo from '../assets/logo_Rehab&Move.png';


const projects = [    {
        id: 1,
        title: "Terminal Portfolio",
        date: "Mayo 2026",
        description: (
            <>
                Migración y rediseño completo de un portfolio web legacy hacia una arquitectura moderna SPA (Single Page Application). 
                Diseño UI/UX fuertemente inspirado en interfaces de terminal retro, con animaciones personalizadas y despliegue continuo automatizado.
            </>
        ),
        imageSrc: PortfolioImg,
        technologies: [ 'React', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'GitHub Actions'],
        githubUrl: "https://github.com/davidprados99/portfolio",
        demoUrl: "https://davidprados99.github.io/portfolio/",
        status: "COMPLETADO"
    },
    {
        id: 2,
        title: "Rehab & Move",
        date: "Mayo 2026",
        description: (
            <>
                Sistema integral *Full-Stack* para el seguimiento y gestión de rehabilitación física (Proyecto de Fin de Grado). 
                Consta de una aplicación de escritorio para la gestión clínica, un portal web para el seguimiento de pacientes y una API robusta en el backend, todo desplegado en la nube.
            </>
        ),
        imageSrc: rehabLogo,
        technologies: [ 'PySide6', 'FastAPI', 'PostgreSQL', 'AWS RDS', 'AWS Elastic Beanstalk'],
        githubUrl: "https://github.com/davidprados99/Rehab-Move_Project",
        demoUrl: "https://rehab-move-project.vercel.app/login",
        status: "COMPLETADO"
    },

];

export const Projects: React.FC = () => {
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Cabecera */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                &gt; Mis_Proyectos
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block">
                    [ {projects.length} ARCHIVOS ENCONTRADOS ]
                </span>
            </h1>

            {/* Contenedor de Proyectos */}
            <div className="space-y-12">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        date={project.date}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        technologies={project.technologies}
                        githubUrl={project.githubUrl}
                        demoUrl={project.demoUrl}
                        status={project.status}
                    />
                ))}
            </div>
        </div>
    );
};