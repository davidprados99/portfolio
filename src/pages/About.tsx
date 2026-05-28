import React from 'react';
import fotoMia from '../assets/FotoMia.png'; 

export const About: React.FC = () => {
    return (
        <div className="w-full animate-fade-in font-mono">
            {/* Title section */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                &gt; Sobre_mí
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
                    [ ¡BIENVENIDO A MI PORTFOLIO! ]
                </span>
            </h1>

            {/* Main container: On mobile in reverse column (image above, text below), on PC in row */}
            <div className="flex flex-col-reverse md:flex-row items-start gap-10">
                
                {/* Text block */}
                <div className="flex-1 space-y-6">
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        Soy David, Técnico Superior en Desarrollo de Aplicaciones Multiplataforma por la <a href="https://www.uax.es" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">Universidad Alfonso X El Sabio</a>, apasionado por la tecnología y el desarrollo de software. Actualmente trabajo como [ RPA Developer ] en <a href="https://www.ust.com" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">UST Spain & LATAM</a>, donde realizo automatizaciones de procesos a través de <span className="border-b border-dashed border-phosphor-green/70 pb-0.5">Python y AutoHotkey v1.</span>
                    </p> 
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        Además, soy estudiante de Ingeniería Informática en la <a href="https://www.uoc.edu" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">Universitat Oberta de Catalunya</a>, donde estoy ampliando mis conocimientos en áreas como la inteligencia artificial, el desarrollo de software y la programación de sistemas.
                    </p>
                    
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        Me considero una persona curiosa, autodidacta y con una gran pasión por aprender y mejorar constantemente. Me encanta enfrentarme a nuevos desafíos y encontrar soluciones creativas a los problemas. En mi tiempo libre, disfruto explorando nuevas tecnologías y desarrollando proyectos personales. Mi objetivo es seguir creciendo como profesional y contribuir al mundo del software con proyectos innovadores y de calidad.
                    </p>
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
                        Por otro lado, soy Graduado en [ Fisioterapia ] por la <a href="https://www.ucm.es" target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">Universidad Complutense de Madrid</a>, lo que me ha permitido desarrollar habilidades de comunicación, empatía, trabajo en equipo y resolución de problemas, que aplico en mi carrera como programador. Esta combinación de conocimientos en fisioterapia e informática me ha dado una perspectiva única y me permite abordar los desafíos del desarrollo de software desde un enfoque multidisciplinar.
                    </p>
                </div>

                {/* Image block */}
                {/* shrink-0 allow the image to maintain its size. sticky do the image stay in place while scrolling on PC */}
                <div className="w-48 h-48 md:w-72 md:h-72 shrink-0 border-2 border-phosphor-green/50 p-2 mx-auto md:mx-0 md:sticky md:top-24">
                    <img 
                        src={fotoMia} 
                        alt="David Prados" 
                        // Retro filter: black and white with high contrast. On hover, it returns to its original color.
                        className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
        </div>
    );
};