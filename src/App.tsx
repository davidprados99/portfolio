import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { Welcome } from './pages/Welcome';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Formation } from './pages/Formation';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';


const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';

  if (isWelcomePage) return <>{children}</>;

  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col selection:bg-phosphor-green selection:text-black">
      <Navbar />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        sys.status: online // logs: active // © {new Date().getFullYear()} David Prados
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
