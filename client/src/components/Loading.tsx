'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev < 3 ? prev + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!showLoading) return null;

  const dots = '.'.repeat(dotCount).padEnd(3, '\u00A0'); // Espacios duros para evitar salto del texto

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#1e2a47] to-zinc-950 font-sans">
      <div className="flex flex-col items-center relative text-center">
        {/* Logo con animación */}
        <div className="relative w-40 h-40 flex items-center justify-center fade-loop">
          <Image
            src="/images/iconoQuantico3d.png"
            alt="Logo Quantico"
            width={128}
            height={128}
            className="relative z-10"
          />
          <div className="absolute w-[220px] h-[220px] animate-spin-slow">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-[#BFFF00] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateX(100px) translateY(-50%)`,
                  transformOrigin: 'center',
                }}
              />
            ))}
          </div>
        </div>

        {/* Texto de carga */}
        <div className="mt-14 text-[#BFFF00] text-4xl font-bold tracking-wide whitespace-pre font-sans">
          Cargando{dots}
        </div>

        {/* Frase inspiradora */}
        <p className="mt-4 text-lg font-medium filter drop-shadow-[0_0_10px_#5FFFE6] text-[#5FFFE6]">
          Impulsamos tu futuro, transformando digitalmente.
        </p>

        {/* Barra de carga */}
        <div className="mt-6 w-64 h-3 bg-[#1f1f3d] rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-[#5FFFE6] animate-progress-bar" />
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }

        .fade-loop {
          animation: fadeInOut 2.5s ease-in-out infinite;
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-progress-bar {
          animation: fillBar 8s linear forwards;
        }

        @keyframes fillBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;