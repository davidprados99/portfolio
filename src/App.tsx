import React from 'react'
import {Typewriter} from './components/Typewriter'

function App() {
  const [showSubtitle, setShowSubtitle] = React.useState(false);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-phosphor-green p-4">

      {/* Title section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-normal mb-6 tracking-wider">
          {/* Add a '>' prefix to simulate a command prompt */}
          <span>&gt; </span>
          <Typewriter 
            text="Te doy la bienvenida a mi portfolio" 
            speed={100} 
            onComplete={() => setShowSubtitle(true)} 
          />
          {/* The blinking cursor at the end */}
          <span className="animate-pulse">|</span>
          {/*wait at the end of the text*/}
        </h1>

        {/* Subtitle section */}
        {showSubtitle && (
          <p className="text-xl md:text-2xl text-phosphor-green/80 leading-relaxed font-light">
            <Typewriter text="Soy David, programador multiplataforma y estudiante de ingeniería." speed={50} />
          </p>
        )}
      </div>

    </main>
  )
}

export default App
