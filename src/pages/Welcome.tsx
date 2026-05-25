import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from '../components/Typewriter';

export const Welcome: React.FC = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    const navigate = useNavigate();

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black text-phosphor-green p-4">
            <div className="w-full max-w-4xl min-h-87 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl md:text-6xl font-normal mb-6 tracking-wider">
                        <span>&gt; </span>
                        <Typewriter
                            text="Te doy la bienvenida a mi portfolio"
                            speed={100}
                            onComplete={() => setShowSubtitle(true)}
                        />
                        <span className="animate-pulse">|</span>
                    </h1>
                    <div className="min-h-16">
                        {showSubtitle && (
                            <p className="text-xl md:text-2xl text-phosphor-green/80 leading-relaxed font-light">
                                <Typewriter text="Soy David, programador multiplataforma y estudiante de ingeniería." speed={50} />
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <hr className="border-phosphor-green/30 my-8" />
                    <button
                        onClick={() => navigate('/about')}
                        className="group flex items-center gap-2 bg-transparent text-xl text-phosphor-green border border-phosphor-green px-5 py-2.5 font-mono transition-all duration-200 hover:bg-phosphor-green hover:text-black cursor-pointer rounded-none"
                    >
                        <span>[ RUN ]</span>
                        <span>Ver portfolio</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">&lt;--</span>
                    </button>
                </div>
            </div>
        </main>
    );
};