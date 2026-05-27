import React from 'react';
import { ExperienceCard } from '../components/ExperienceCard';
import UstLogo from '../assets/ust_logo.jpg';
import QuironLogo from '../assets/quiron_logo.png';
import EmeraLogo from '../assets/emera_logo.png';
import FisiomaxLogo from '../assets/fisiomax_logo.png';

const experiences = [
    {
        id: 1,
        title: "RPA Developer",
        company: "UST Spain & LATAM",
        date: "Octubre 2025 - Presente",
        description: (
            <>
                Desarrollo y mantenimiento de automatizaciones de procesos mediante <span className="border-b border-dashed border-phosphor-green/70 pb-0.5">Python</span> y <span className="border-b border-dashed border-phosphor-green/70 pb-0.5">AutoHotkey v1</span> en entorno bancario.
                Encargado de optimizar flujos de trabajo, reducir tiempos de ejecución y minimizar errores manuales en operativas del sistema.
            </>
        ),
        imageSrc: UstLogo,
        link: 'https://www.ust.com/es',
        hardSkills: ['Python', 'AutoHotkey v1','Selenium', 'Automatización de Procesos', 'JSON', 'XPath', 'Git / Bitbucket', 'Google Workspace APIs'],
        softSkills: ['Resolución de Problemas', 'Trabajo en Equipo', 'Comunicación Efectiva', 'Gestión del Tiempo', 'Pensamiento crítico', 'Responsabilidad']
    },
    {
        id: 2,
        title: "Fisioterapeuta autónomo",
        company: "Quirón Prevención",
        date: "Marzo 2024 - Octubre 2025",
        description: 
            <>
                Tratamientos privados de fisioterapia para trabajadores de DHL, enfocados en la prevención y el tratamiento de lesiones laborales, en colaboración con Quirón Prevención.
            </>,
        imageSrc: QuironLogo,
        link: 'https://www.quironprevencion.com/es',
        hardSkills: ['Terapia Manual', 'Ejercicio Terapéutico', 'Rehabilitación de Lesiones', 'Prevención de Lesiones Laborales'],
        softSkills: ['Empatía', 'Comunicación', 'Gestión del Tiempo', 'Adaptabilidad', 'Resolución de Problemas', 'Actitud Positiva']
    },
    {
        id: 3,
        title: "Fisioterapeuta geriátrico",
        company: "Emera España",
        date: "Enero 2023 - Marzo 2024",
        description: 
            <>
                Procesos de fisioterapia geriátrica para ancianos en residencias de mayores, con el objetivo de mejorar su calidad de vida, movilidad y bienestar general, trabajando en estrecha colaboración con equipos multidisciplinares.
            </>,
        imageSrc: EmeraLogo,
        link: 'https://emera-group.es/',
        hardSkills: ['Fisioterapia Neurológica y Geriátrica', 'Ejercicio Terapéutico', 'Rehabilitación de Lesiones', 'Prevención de Caídas en Personas Mayores'],
        softSkills: ['Trabajo en Equipo', 'Comunicación', 'Empatía', 'Paciencia', 'Asistencia sanitaria', 'Responsabilidad']
    },
    {
        id: 4,
        title: "Fisioterapeuta clínico",
        company: "Clínica Fisiomax Parla",
        date: "Octubre 2021 - Diciembre 2022",
        description: 
            <>
                Atención integral a pacientes en diversas patologías, con énfasis en la rehabilitación física y el alivio del dolor.
            </>,
        imageSrc: FisiomaxLogo,
        link: 'https://www.fisioterapiaparlafisiomax.com/',
        hardSkills: ['Ejercicio Terapéutico', 'Terapia Manual', 'Rehabilitación de Lesiones', 'Diagnóstico Físico', 'Planificación de Tratamiento'],
        softSkills: ['Empatía', 'Comunicación', 'Paciencia', 'Responsabilidad', 'Trabajo en Equipo', 'Resolución de Problemas']
    }
];

export const Experience: React.FC = () => {
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Cabecera */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                &gt; Mi_Experiencia
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10">
                    [ {experiences.length} REGISTROS ]
                </span>
            </h1>

            {/* Contenedor de las tarjetas usando el nuevo componente */}
            <div className="space-y-8">
                {experiences.map((exp) => (
                    <ExperienceCard
                        key={exp.id}
                        title={exp.title}
                        company={exp.company}
                        date={exp.date}
                        description={exp.description}
                        imageSrc={exp.imageSrc}
                        link={exp.link}
                        hardSkills={exp.hardSkills}
                        softSkills={exp.softSkills}
                    />
                ))}
            </div>
        </div>
    );
};