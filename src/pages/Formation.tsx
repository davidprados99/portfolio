import React from 'react';
import { FormationCard } from '../components/FormationCard';
import { LanguageCard } from '../components/LanguageCard';
import uaxLogo from '../assets/uax_logo.png';
import uocLogo from '../assets/uoc_logo.png';
import ucmLogo from '../assets/ucm_logo.jpg';

const formationData = [
    {
        id: 1,
        title: "Grado en Ingeniería Informática",
        institution: "Universitat Oberta de Catalunya (UOC)",
        date: "Septiembre 2026 - Presente",
        status: "INCOMING",
        skills: ['Iniciación a las Matemáticas', 'Lógica', 'Fundamentos de Programación'],
        link: "https://www.uoc.edu",
        imageSrc: uocLogo,
    },
    {
        id: 2,
        title: "Técnico Superior en D.A.M.",
        institution: "Universidad Alfonso X El Sabio",
        date: "Septiembre 2024 - Junio 2026",
        grade: "9,9/10",
        achievements: "Calificación de 10 en la defensa del Proyecto Final (Rehab & Move).",
        status: "COMPLETADO",
        skills: ['Desarrollo Web', 'Interfaces', 'Bases de Datos', 'Java', 'Python', 'React', 'Programación de hilos y procesos','Inglés Técnico'],
        link: "https://www.uax.es",
        imageSrc: uaxLogo
    },
    {
        id: 3,
        title: "Especialización en Big Data & IA",
        institution: "Universidad Alfonso X El Sabio",
        date: "Septiembre 2024 - Enero 2026",
        grade: "9,3/10",
        status: "COMPLETADO",
        skills: ['Machine Learning', 'Big Data', 'Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'AWS'],
        link: "https://www.uax.es",
        imageSrc: uaxLogo,
    },
    {
        id: 4,
        title: "Grado en Fisioterapia",
        institution: "Universidad Complutense de Madrid",
        date: "Septiembre 2017 - Junio 2021",
        status: "COMPLETADO",
        grade: "8,5/10",
        skills: ['Anatomía', 'Biomecánica', 'Razonamiento Clínico', 'Metodología Científica'],
        link: "https://www.ucm.es",
        imageSrc: ucmLogo,
    }
];

const languagesData = [
    {
        id: 1,
        language: "ESPAÑOL",
        level: "NATIVO",
        description: "Competencia nativa",
        flagSrc: "https://flagcdn.com/w160/es.png", 
    },
    {
        id: 2,
        language: "INGLÉS",
        level: "B2 - Avanzado",
        description: "Competencia profesional completa",
        flagSrc: "https://flagcdn.com/w160/gb.png", 
    },
    {
        id: 3,
        language: "FRANCÉS",
        level: "B2 - Avanzado",
        description: "Competencia profesional completa",
        flagSrc: "https://flagcdn.com/w160/fr.png",
        certification: "DELF B2"
    }
];

export const Formation: React.FC = () => {
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Cabecera */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                &gt; Base_Educativa
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
                    [ {formationData.length} REGISTROS ACADÉMICOS ]
                </span>
            </h1>

            {/* Contenedor de Educación */}
            <div className="space-y-8">
                {formationData.map((edu) => (
                    <FormationCard
                        key={edu.id}
                        title={edu.title}
                        institution={edu.institution}
                        date={edu.date}
                        grade={edu.grade}
                        achievements={edu.achievements}
                        skills={edu.skills}
                        imageSrc={edu.imageSrc}
                        link={edu.link}
                        status={edu.status}
                    />
                ))}
            </div>

            <h2 className="text-2xl md:text-3xl text-phosphor-green font-normal mt-12 mb-8 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                &gt; Módulos_Lingüísticos
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
                    [ {languagesData.length} IDIOMAS ]
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languagesData.map((lang) => (
                    <LanguageCard
                        key={lang.id}
                        language={lang.language}
                        level={lang.level}
                        description={lang.description}
                        certification={lang.certification}
                        flagSrc={lang.flagSrc}
                    />
                ))}
            </div>
        </div>
    );
};