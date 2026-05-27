import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const location = useLocation(); 

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="border-b border-phosphor-green/20 sticky top-0 bg-black/90 backdrop-blur-sm z-50">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link to="/" className="text-phosphor-green font-bold text-xl cursor-pointer hover:opacity-80">
                    DAVID@PRADOS:~# <span className="animate-pulse">_</span>
                </Link>

                <nav className="flex flex-wrap justify-center gap-1 sm:gap-4 text-sm md:text-base">
                    <Link
                        to="/about"
                        className={`px-3 py-1 border transition-colors ${isActive('/about') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        [ SOBRE_MÍ ]
                    </Link>
                    <Link
                        to="/projects"
                        className={`px-3 py-1 border transition-colors ${isActive('/projects') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        [ PROYECTOS ]
                    </Link>
                    <Link
                        to="/experience"
                        className={`px-3 py-1 border transition-colors ${isActive('/experience') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        [ EXPERIENCIA ]
                    </Link>
                    <Link
                        to="/education"
                        className={`px-3 py-1 border transition-colors ${isActive('/education') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        [ EDUCACIÓN ]
                    </Link>
                    <Link
                        to="/contact"
                        className={`px-3 py-1 border transition-colors ${isActive('/contact') ? 'bg-phosphor-green text-black border-phosphor-green' : 'border-transparent text-zinc-400 hover:text-phosphor-green'}`}
                    >
                        [ CONTACTO ]
                    </Link>
                </nav>
            </div>
        </header>
    );
};