import React from 'react';
import { ExperienceCard } from '../components/ExperienceCard';
import UstLogo from '../assets/ust_logo.jpg';
import QuironLogo from '../assets/quiron_logo.png';
import EmeraLogo from '../assets/emera_logo.png';
import FisiomaxLogo from '../assets/fisiomax_logo.png';
import { translations } from '../locales/translations';
import { useLanguage } from '../context/LanguageContext';



export const Experience: React.FC = () => {
    const { lang } = useLanguage();
    const t = translations[lang].experience;



    const experiences = [
    {
        id: 1,
        title: t.e1_Title,
        company: t.e1_Company,
        date: t.e1_Month,
        description: t.e1_Desc,
        imageSrc: UstLogo,
        link: 'https://www.ust.com/es',
        hardSkills: t.e1_HardSkills,
        softSkills: t.e1_SoftSkills
    },
    {
        id: 2,
        title: t.e2_Title,
        company: t.e2_Company,
        date: t.e2_Month,
        description: t.e2_Desc,
        imageSrc: QuironLogo,
        link: 'https://www.quironprevencion.com/es',
        hardSkills: t.e2_HardSkills,
        softSkills: t.e2_SoftSkills
    },
    {
        id: 3,
        title: t.e3_Title,
        company: t.e3_Company,
        date: t.e3_Month,
        description: t.e3_Desc,
        imageSrc: EmeraLogo,
        link: 'https://emera-group.es/',
        hardSkills: t.e3_HardSkills,
        softSkills: t.e3_SoftSkills
    },
    {
        id: 4,
        title: t.e4_Title,
        company: t.e4_Company,
        date: t.e4_Month,
        description: t.e4_Desc,
        imageSrc: FisiomaxLogo,
        link: 'https://www.fisioterapiaparlafisiomax.com/',
        hardSkills: t.e4_HardSkills,
        softSkills: t.e4_SoftSkills
    }
];
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Header */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                {t.title}
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
                    [ {experiences.length} {t.subtitle} ]
                </span>
            </h1>

            {/* Card container */}
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