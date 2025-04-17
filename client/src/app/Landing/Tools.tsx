'use client';

import React, { useState } from 'react';
import { DataTools } from '@/Data/DataTools';
import CardTools from '@/Ui/CardTools';

const Tools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const itemsPerPage = 4;
  const totalItems = DataTools.length;

  const handleSelectTool = (toolId: string) => {
    setSelectedTool(toolId === selectedTool ? null : toolId);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setIsSliding(true);
      setCurrentIndex(currentIndex - 1);
      setSelectedTool(null); // Cierra la ventana de descripción al navegar
    }
  };

  const scrollRight = () => {
    if (currentIndex < Math.floor(totalItems / itemsPerPage)) {
      setIsSliding(true);
      setCurrentIndex(currentIndex + 1);
      setSelectedTool(null); // Cierra la ventana de descripción al navegar
    }
  };

  const currentTools = DataTools.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);
  const selectedToolData = DataTools.find((tool) => tool.id === selectedTool);

  React.useEffect(() => {
    if (isSliding) {
      const timeout = setTimeout(() => {
        setIsSliding(false);
      }, 300); // El tiempo de la transición debe coincidir con la duración de la animación
      return () => clearTimeout(timeout);
    }
  }, [isSliding]);

  return (
    <section className="pb-20 bg-[#01001E]">
      <div className="px-5 text-center">
        <p className="text-lg text-teal-400 mb-20">
          Estas son algunas de nuestras herramientas para mejorar el desarrollo de tu empresa
        </p>

        {/* Controles de paginación */}
        <div className="relative mb-10">
          {/* Flecha izquierda solo visible si no estamos en la primera página */}
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className={`absolute left-0 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 z-10 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : ''}`}
          >
            ◀
          </button>

          <div
            className={`transition-transform duration-300 ${isSliding ? 'transform translate-x-[-100%]' : ''}`}
          >
            <CardTools
              tools={currentTools}
              onSelectTool={handleSelectTool}
              selectedToolId={selectedTool}
            />
          </div>

          {/* Flecha derecha solo visible si no estamos en la última página */}
          <button
            onClick={scrollRight}
            disabled={currentIndex >= Math.floor(totalItems / itemsPerPage)}
            className={`absolute right-0 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 z-10 ${currentIndex >= Math.floor(totalItems / itemsPerPage) ? 'opacity-0 pointer-events-none' : ''}`}
          >
            ▶
          </button>
        </div>

        {/* Descripción de la herramienta seleccionada */}
        {selectedToolData && (
          <div className="mt-8 flex flex-col items-center px-15">
            <div className="bg-transparent border-[#BFFF00] border-3 p-6 rounded-md w-full">
              <h3 className="text-[#BFFF00] text-xl font-semibold mb-4">{selectedToolData.name}</h3>
              <p className="text-white">{selectedToolData.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;