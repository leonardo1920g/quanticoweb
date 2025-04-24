'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BackgroundLoading from '@/Ui/BackgroundLoading'; // Asegúrate de que la ruta sea correcta

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    // Temporizador para desaparecer el loader
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 8000); // 8 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev < 3 ? prev + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const dots = '.'.repeat(dotCount).padEnd(3, '\u00A0');

  return (
    <>
      {/* Loader en pantalla */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center font-sans transition-opacity duration-1000 ease-out ${
          showLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Fondo animado */}
        <BackgroundLoading />

        {/* Contenido del loader */}
        <div className="flex flex-col items-center relative text-center z-10 mt-41">
          {/* Logo centrado */}
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <Image
              src="/images/iconoQuantico3d.png"
              alt="Logo Quantico"
              width={200}  // Tamaño aumentado
              height={200} // Tamaño aumentado
              className="relative z-10"
            />
          </div>

          {/* Texto de carga */}
          <div className="mt-10 text-[#BFFF00] text-4xl font-bold tracking-wide whitespace-pre font-sans">
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
    </>
  );
};

export default Loading;