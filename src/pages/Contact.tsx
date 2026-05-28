import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            
            const response = await fetch('https://formspree.io/f/xwvzajoe', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset(); // Clean form fields after successful submission
                // Reset status to idle after a short delay to allow user to see success message
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="w-full animate-fade-in font-mono pb-12">
            
            {/* Header */}
            <h1 className="text-3xl md:text-5xl text-phosphor-green font-normal mb-10 tracking-wider border-b border-phosphor-green/30 pb-4 flex items-center gap-4">
                &gt; Módulo_Contacto
                <span className="text-sm border border-phosphor-green/50 px-2 py-1 bg-phosphor-green/10 hidden sm:inline-block animate-pulse">
                    [ CONEXIÓN SEGURA ]
                </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12">
                
                {/* Left Column: Information / Logs */}
                <div className="w-full md:w-1/3 space-y-6 text-zinc-400">
                    <p className="text-lg text-zinc-300">
                        ¿Tienes un proyecto en mente o una propuesta laboral? Puedes contactarme a través de los canales de comunicación disponibles o rellenar el formulario de contacto.
                    </p>
                    
                    <div className="border border-zinc-800 bg-zinc-950 p-4 font-mono text-sm">
                        <div className=" border-zinc-800">
                            <p className="mb-2 text-white">Conexiones_Alternativas:</p>
                            <ul className="space-y-2">
                                <li>
                                    <a href="https://www.linkedin.com/in/david-prados-medina-45a804212/" target="_blank" rel="noopener noreferrer" className="hover:text-phosphor-green transition-colors flex items-center gap-2">
                                        <span>[🔗]</span> LINKEDIN
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/davidprados99" target="_blank" rel="noopener noreferrer" className="hover:text-phosphor-green transition-colors flex items-center gap-2">
                                        <span>[💻]</span> GITHUB
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=davidprados99@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-phosphor-green transition-colors flex items-center gap-2">
                                        <span>[📨]</span> MAIL_DIRECTO
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/34608655171" target="_blank" rel="noopener noreferrer" className="hover:text-phosphor-green transition-colors flex items-center gap-2">
                                        <span>[📲]</span> WHATSAPP
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Form */}
                <div className="w-full md:w-2/3">
                    <form onSubmit={handleSubmit} className="border border-phosphor-green/30 p-6 sm:p-8 bg-black relative group hover:border-phosphor-green transition-colors duration-300">
                        
                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-phosphor-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm text-phosphor-green/80 font-bold mb-2">
                                    &gt; IDENTIFICADOR_USUARIO <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    required
                                    className="w-full bg-zinc-950 border border-zinc-700 text-white p-3 focus:outline-none focus:border-phosphor-green focus:bg-black transition-colors"
                                    placeholder="Ej: Manuel Pérez López"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm text-phosphor-green/80 font-bold mb-2">
                                    &gt; DIRECCIÓN_RETORNO (Email) <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    required
                                    className="w-full bg-zinc-950 border border-zinc-700 text-white p-3 focus:outline-none focus:border-phosphor-green focus:bg-black transition-colors"
                                    placeholder="Ej: usuario@servidor.com"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm text-phosphor-green/80 font-bold mb-2">
                                    &gt; CARGA_DE_DATOS (Mensaje) <span className="text-red-500">*</span>
                                </label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    required
                                    rows={5}
                                    className="w-full bg-zinc-950 border border-zinc-700 text-white p-3 focus:outline-none focus:border-phosphor-green focus:bg-black transition-colors resize-y"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>

                            {/* Submit Dinamic Button */}
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className={`w-full py-3 font-bold tracking-widest transition-all border ${
                                    status === 'idle' ? 'bg-transparent border-phosphor-green text-phosphor-green hover:bg-phosphor-green hover:text-black cursor-pointer' :
                                    status === 'submitting' ? 'bg-zinc-800 border-zinc-600 text-zinc-400 cursor-wait' :
                                    status === 'success' ? 'bg-phosphor-green border-phosphor-green text-black' :
                                    'bg-red-900 border-red-500 text-red-200'
                                }`}
                            >
                                {status === 'idle' && '[ ENVIAR_MENSAJE ]'}
                                {status === 'submitting' && 'ENCRIPTANDO_Y_ENVIANDO...'}
                                {status === 'success' && '¡ MENSAJE_ENVIADO !'}
                                {status === 'error' && 'ERROR_EN_LA_CONEXIÓN'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};