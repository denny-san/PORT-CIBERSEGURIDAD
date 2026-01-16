import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('');
    const fullText = "BYPASSING_FIREWALL... ACCESS_GRANTED... ANALYZING_SYSTEM_INTEGRITY... INITIALIZING_SOC_PORTFOLIO...";

    useEffect(() => {
        let currentText = '';
        let i = 0;
        const textInterval = setInterval(() => {
            if (i < fullText.length) {
                currentText += fullText[i];
                setText(currentText);
                i++;
            } else {
                clearInterval(textInterval);
                setTimeout(onComplete, 1000);
            }
        }, 30);

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev < 100) return prev + 1;
                clearInterval(progressInterval);
                return 100;
            });
        }, 40);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono">
            {/* Matrix Background Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-[8px] text-accent whitespace-nowrap"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: '-10%',
                            animation: `matrix ${5 + Math.random() * 10}s linear infinite`,
                            animationDelay: `${Math.random() * -10}s`
                        }}
                    >
                        {Array.from({ length: 50 }).map(() => String.fromCharCode(0x30A0 + Math.random() * 96)).join('')}
                    </div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-md px-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-white text-lg animate-spin">sync</span>
                    <h2 className="text-white text-xs font-bold uppercase tracking-[0.4em]">Cargando Sistema...</h2>
                </div>

                <div className="w-full bg-white/5 border border-white/10 h-1 mb-4 overflow-hidden">
                    <div
                        className="bg-white h-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="flex justify-between text-[10px] text-gray-500 mb-8 font-bold">
                    <span className="animate-pulse">BOOT_SEQUENCE: {progress}%</span>
                    <span>ESTADO: NOMINAL</span>
                </div>

                <div className="bg-white/5 border border-white/5 p-4 rounded-sm min-h-[60px]">
                    <p className="text-[10px] text-white leading-relaxed break-all">
                        <span className="text-accent mr-2">{">"}</span>
                        {text}
                        <span className="terminal-blink">█</span>
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes matrix {
          0% { transform: translateY(0vh); }
          100% { transform: translateY(120vh); }
        }
        .terminal-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
