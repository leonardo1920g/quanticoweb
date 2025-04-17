'use client';

import React, { useState } from 'react';
import { DataTools } from '@/Data/DataTools';
import CardTools from '@/Ui/CardTools';

const Tools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 4;

  const handleSelectTool = (toolId: string) => {
    setSelectedTool(toolId === selectedTool ? null : toolId);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const scrollRight = () => {
    if (currentIndex < Math.floor(DataTools.length / itemsPerPage)) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentTools = DataTools.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);
  const selectedToolData = DataTools.find((tool) => tool.id === selectedTool);

  return (
    <section className="pb-20 bg-[#01001E]">
      <div className=" px-5 text-center">
        <p className="text-lg text-teal-400 mb-20">
          Estas son algunas de nuestras herramientas para mejorar el desarrollo de tu empresa
        </p>

        {/* Controles */}
        <div className="relative mb-10">
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 z-10"
          >
            ◀
          </button>

          <CardTools
            tools={currentTools}
            onSelectTool={handleSelectTool}
            selectedToolId={selectedTool}
          />

          <button
            onClick={scrollRight}
            disabled={currentIndex >= Math.floor(DataTools.length / itemsPerPage)}
            className="absolute right-0 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/30 text-white p-2 rounded-full hover:bg-white/50 z-10"
          >
            ▶
          </button>
        </div>

        {/* Descripción */}
        {selectedToolData && (
          <div className="mt-8 flex flex-col items-center px-15">
            <span className="text-teal-400 text-3xl mb-4">•</span>
            <div className="bg-[#020054] p-6 rounded-md w-full">
              <h3 className="text-teal-400 text-xl font-semibold mb-4">{selectedToolData.name}</h3>
              <p className="text-white">{selectedToolData.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;