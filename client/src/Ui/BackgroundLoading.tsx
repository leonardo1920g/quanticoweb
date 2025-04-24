'use client';

import { useEffect, useState } from 'react';

export default function BackgroundLoading() {
  const [rings, setRings] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRings((prev) => [...prev, Date.now()]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Aros en expansión */}
      {rings.map((ring, index) => (
        <Ring key={ring} delay={index * 0.5} />
      ))}

      <style jsx>{`
        @keyframes expandTunnel {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
            border-width: 2px; /* Punto central más pequeño */
          }
          50% {
            opacity: 0.6;
          }
          100% {
            width: 250vmax;
            height: 250vmax;
            opacity: 0;
            border-width: 10px; /* El borde se hace más grande al expandirse */
          }
        }

        @keyframes neonGlow {
          0% {
            box-shadow: inset 0 0 8px #00fff7, inset 0 0 20px #00fff7;
          }
          50% {
            box-shadow: inset 0 0 18px #00fff7, inset 0 0 40px #00fff7;
          }
          100% {
            box-shadow: inset 0 0 25px #00fff7, inset 0 0 60px #00fff7;
          }
        }
      `}</style>
    </div>
  );
}

function Ring({ delay }: { delay: number }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="absolute top-1/2 left-1/2 border-[#00fff7] rounded-full animate-neonGlow"
      style={{
        transform: 'translate(-50%, -50%)',
        animation: `expandTunnel 4s ease-out ${delay}s forwards, neonGlow 1.5s ease-in-out infinite`,
        opacity: 0.8,
        borderWidth: '10px', // Mantener el borde visible al final
      }}
    />
  );
}