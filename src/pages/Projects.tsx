import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import PortfolioImg from '../assets/portfolio_image.png';
import rehabLogo from '../assets/logo_Rehab&Move.png';
import machineLearningImg from '../assets/machine_learning_img.jpg';
import bigDataImg from '../assets/Big_Data_img.jpg';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../locales/translations';


export const Projects: React.FC = () => {
        const { lang } = useLanguage();
        const t = translations[lang].projects;

        const projects = [    {
        id: 1,
        title: t.p1_Title,
        date: t.p1_Month,
        description: (
            <>
                {t.p1_Desc}
            </>
        ),
        imageSrc: PortfolioImg,
        technologies: [ 'React', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'GitHub Actions', 'Formspree API '],
        githubUrl: "https://github.com/davidprados99/portfolio",
        demoUrl: "https://davidprados99.github.io/portfolio/",
        status: t.status.Done
    },
    {
        id: 2,
        title: t.p2_Title,
        date: t.p2_Month,
        description: (
            <>
                {t.p2_Desc}
            </>
        ),
        imageSrc: rehabLogo,
        technologies: [ 'Python', 'FastAPI', 'PySide6', 'Matplotlib', 'TypeScript', 'React', 'Tailwind CSS v4', 'PostgreSQL', 'AWS RDS', 'AWS Elastic Beanstalk', 'Vercel', 'GitHub Actions'],
        githubUrl: "https://github.com/davidprados99/Rehab-Move_Project",
        demoUrl: "https://rehab-move-project.vercel.app/login",
        status: t.status.Done
    },
    {
        id: 3,
        title: t.p3_Title,
        date: t.p3_Month,
        description: (
            <>
                {t.p3_Desc}
            </>
        ),
        imageSrc: machineLearningImg,
        technologies: [ 'Python', 'Scikit-learn', 'Random Forest', 'Regresión Logística', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
        githubUrl: "https://github.com/davidprados99/Proyecto_final_IA",
        demoUrl: "",
        status: t.status.Done
    },
    {
        id: 4,
        title: t.p4_Title,
        date: t.p4_Month,
        description: (
            <>
                {t.p4_Desc}
            </>
        ),
        imageSrc: bigDataImg,
        technologies: [ 'AWS S3', 'AWS Athena', 'AWS Glue','AWS EMR con Spark', 'Power BI', 'SQL'],
        githubUrl: "https://github.com/davidprados99/proyecto_final_BigData",
        demoUrl: "",
        status: t.status.Done
    },

];
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Cabecera */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                {t.title}
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
                    [ {projects.length} {t.subtitle} ]
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