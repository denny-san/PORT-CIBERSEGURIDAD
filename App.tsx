
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import CV from './pages/CV';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  const navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Perfil', path: '/about' },
    { label: 'Habilidades', path: '/skills' },
    { label: 'Experiencia', path: '/experience' },
    { label: 'Certificados', path: '/certifications' },
    { label: 'Contacto', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden font-body bg-background">
      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px] md:text-[32px]">security</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-sm md:text-lg font-bold font-display uppercase tracking-tighter leading-none">Denny Sánchez</h1>
              <span className="text-muted text-[8px] md:text-[10px] font-mono tracking-widest uppercase">SOC ANALYST</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-white ${isActive ? 'text-white border-b border-white pb-1' : 'text-muted'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/cv"
              className="border border-white/20 hover:bg-white hover:text-black transition-all text-white px-5 py-2 rounded text-[10px] font-bold uppercase tracking-widest"
            >
              CV
            </Link>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Improved Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300 z-50 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted hover:text-white text-xs font-bold uppercase tracking-[0.2em] border-l-2 border-transparent hover:border-white pl-4 transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black text-center py-4 text-[10px] font-bold uppercase tracking-widest mt-4"
            >
              Ver Curriculum
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow relative z-10 w-full overflow-x-hidden">
        {children}
      </main>

      <footer className="border-t border-border bg-black py-10 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[10px] font-mono text-muted uppercase tracking-[0.3em]">
              © 2024 PORTAFOLIO SOC. TODOS LOS SISTEMAS NOMINALES.
            </p>
            <p className="text-[10px] font-mono text-accent uppercase font-bold">
              // ESTADO: PROTEGIDO // ENCRIPTACIÓN: AES-256
            </p>
          </div>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/denny-sanchez-6910b537b/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="text-muted hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">GitHub</a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
