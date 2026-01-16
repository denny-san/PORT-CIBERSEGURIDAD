
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingCode: React.FC = () => {
  const [snippets, setSnippets] = useState<{ id: number; text: string; left: string; duration: string; delay: string; opacity: number }[]>([]);

  const dataPool = [
    "0x4A 0x21 0x8C", "192.168.1.105", "TCP_ESTABLISHED", "SYN_SENT",
    "AUTH_SUCCESS", "LOG_DETECTED", "UDP_PORT_SCAN", "AES_256_CBC",
    "DECRYPTING...", "THREAT_LVL: 0", "DDoS_MITIGATED", "BYPASS_ATTEMPT",
    "SQL_INJECT_DET", "SESSION_ID: 884-X", "ROOT_ACCESS", "KERNEL_PANIC"
  ];

  useEffect(() => {
    const newSnippets = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      text: dataPool[Math.floor(Math.random() * dataPool.length)],
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * -20}s`,
      opacity: 0.05 + Math.random() * 0.15
    }));
    setSnippets(newSnippets);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {snippets.map(s => (
        <div
          key={s.id}
          className="absolute whitespace-nowrap font-mono text-[10px] text-white select-none"
          style={{
            left: s.left,
            top: '-10%',
            opacity: s.opacity,
            animation: `driftDown ${s.duration} linear infinite`,
            animationDelay: s.delay
          }}
        >
          {s.text}
        </div>
      ))}
      <style>{`
        @keyframes driftDown {
          0% { transform: translateY(0vh); }
          100% { transform: translateY(120vh); }
        }
      `}</style>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Background Image with low opacity */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
        style={{ backgroundImage: "url('/IMG/DENNY IMG.jpg')" }}
      ></div>

      {/* Fondo de Códigos Flotantes */}
      <FloatingCode />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-20 lg:pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 w-fit rounded border border-accent/20 bg-accent/5 px-4 py-1 animate-in fade-in duration-1000">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent text-[8px] md:text-[10px] font-bold uppercase font-mono tracking-widest">Sistema: Monitoreo Activo</span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter leading-none text-white animate-in slide-in-from-left duration-700">
                Analista de <br />
                <span className="text-muted">Seguridad SOC</span>
              </h1>
              <p className="text-lg md:text-2xl font-medium text-gray-400 border-l-2 border-white pl-4 md:pl-6 py-2 max-w-xl animate-in slide-in-from-left duration-1000 delay-200">
                Defensa de infraestructuras, detección de intrusiones y respuesta ante incidentes.
              </p>
            </div>

            <p className="text-muted text-sm md:text-lg font-light leading-relaxed max-w-xl animate-in fade-in duration-1000 delay-500">
              Especializado en el análisis de amenazas críticas, gestión de logs y arquitectura de seguridad defensiva en tiempo real utilizando herramientas líderes de la industria.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in duration-1000 delay-700">
              <Link
                to="/certifications"
                className="flex-1 sm:flex-none text-center bg-white text-black px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
              >
                Credenciales
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                to="/contact"
                className="flex-1 sm:flex-none text-center border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] transition-all"
              >
                Contacto
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-8 pt-8 border-t border-border animate-in fade-in duration-1000 delay-1000">
              <span className="text-[10px] font-mono font-bold text-muted tracking-widest uppercase shrink-0">Tecnologías:</span>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] md:text-[10px] font-mono font-bold text-gray-500 uppercase">
                <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">Splunk</span>
                <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">Wireshark</span>
                <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">Sentinel</span>
                <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">Crowdstrike</span>
                <span className="hover:text-white transition-colors cursor-default whitespace-nowrap">Python</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-in zoom-in duration-1000 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="relative w-full aspect-video sm:aspect-square rounded-sm overflow-hidden border border-border bg-surface shadow-2xl">
              <div className="bg-surface-light border-b border-border h-8 md:h-10 px-4 flex items-center justify-between">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/10"></div>
                </div>
                <div className="text-[7px] md:text-[9px] font-mono text-muted uppercase tracking-widest">consola — root@soc-terminal</div>
              </div>

              <div className="p-4 md:p-6 font-mono text-[10px] md:text-xs text-gray-400 space-y-2 md:space-y-3 relative h-full">
                <div className="scanline"></div>
                <p><span className="text-white">#</span> escaneo_red --objetivo 10.0.0.45</p>
                <p className="text-gray-600 hidden sm:block">[INFO] Iniciando auditoría de paquetes...</p>
                <div className="space-y-1">
                  <p className="text-white">[+] Puerto 80: ABIERTO (HTTP)</p>
                  <p className="text-white">[+] Puerto 443: ABIERTO (HTTPS)</p>
                </div>
                <div className="text-accent/60 space-y-1">
                  <p>[!] Alerta: Detectado intento de fuerza bruta</p>
                  <p className="hidden md:block">[!] Origen: 185.244.25.12</p>
                </div>

                <div className="mt-4 md:mt-6 p-3 md:p-4 border border-white/5 bg-white/5 rounded-sm">
                  <div className="flex justify-between text-[8px] md:text-[9px] text-muted mb-2 font-bold tracking-widest uppercase">
                    <span>Carga de Red</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-black h-1 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[78%]"></div>
                  </div>
                </div>
                <p className="terminal-blink">█</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
