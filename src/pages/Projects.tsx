import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import PortfolioImg from '../assets/portfolio_image.png';
import rehabLogo from '../assets/logo_Rehab&Move.png';
import machineLearningImg from '../assets/machine_learning_img.jpg';
import bigDataImg from '../assets/Big_Data_img.jpg';


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
        technologies: [ 'Python', 'FastAPI', 'PySide6', 'Matplotlib', 'TypeScript', 'React', 'Tailwind CSS v4', 'PostgreSQL', 'AWS RDS', 'AWS Elastic Beanstalk', 'Vercel', 'GitHub Actions'],
        githubUrl: "https://github.com/davidprados99/Rehab-Move_Project",
        demoUrl: "https://rehab-move-project.vercel.app/login",
        status: "COMPLETADO"
    },
    {
        id: 3,
        title: "Proyecto Machine Learning",
        date: "Septiembre 2025 - Enero 2026",
        description: (
            <>
                Desarrollo de Machine Learning (Proyecto de Final de Especialización IA) para predecir la probabilidad de padecer dolor lumbar a partir de datos fisiológicos y anatómicos. El proyecto incluye la limpieza y análisis de datos, la implementación de varios modelos de clasificación (Random Forest, Regresión Logística) y la visualización de resultados para identificar los factores más relevantes asociados al dolor lumbar.
            </>
        ),
        imageSrc: machineLearningImg,
        technologies: [ 'Python', 'Scikit-learn', 'Random Forest', 'Regresión Logística', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
        githubUrl: "https://github.com/davidprados99/Proyecto_final_IA",
        demoUrl: "",
        status: "COMPLETADO"
    },
    {
        id: 4,
        title: "Proyecto Big Data",
        date: "Enero 2025 - Junio 2025",
        description: (
            <>
                Este proyecto tiene como objetivo realizar un análisis completo sobre lesiones de futbolistas profesionales entre los años 2019 y 2023 de la Premier League utilizando tecnologías de Big Data en AWS y visualización con Power BI.
            </>
        ),
        imageSrc: bigDataImg,
        technologies: [ 'AWS S3', 'AWS Athena', 'AWS Glue','AWS EMR con Spark', 'Power BI', 'SQL'],
        githubUrl: "https://github.com/davidprados99/proyecto_final_BigData",
        demoUrl: "",
        status: "COMPLETADO"
    },

];

export const Projects: React.FC = () => {
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Cabecera */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                &gt; Mis_Proyectos
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
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