"use client";

import { DataTools } from "@/Data/DataTools";
import { useState } from "react";

const CardTools = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const cardsPerView = 4;
  const cardWidth = 280; // ancho de cada card
  const gap = 32; // espacio entre cards (gap-8 = 32px)

  const totalWidth = cardsPerView * cardWidth + (cardsPerView - 1) * gap;

  const handleNext = () => {
    if (startIndex + cardsPerView < DataTools.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const toggleDescription = (index: number) => {
    setActiveCardIndex(index === activeCardIndex ? null : index);
  };

  return (
    <div
      className="relative mx-auto overflow-visible"
      style={{ width: `${totalWidth}px` }}
    >
      {/* Botón Prev */}
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-[-48px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/30 text-white rounded-full p-2 hover:scale-110 transition"
        >
          ◀
        </button>
      )}

      {/* Botón Next */}
      {startIndex + cardsPerView < DataTools.length && (
        <button
          onClick={handleNext}
          className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/30 text-white rounded-full p-2 hover:scale-110 transition"
        >
          ▶
        </button>
      )}

      {/* Carrusel */}
      <div className="overflow-visible relative">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-8"
          style={{
            transform: `translateX(-${(cardWidth + gap) * startIndex}px)`,
            width: `${(cardWidth + gap) * DataTools.length}px`,
          }}
        >
          {DataTools.map((tool, index) => {
            const isActive = index === activeCardIndex;

            return (
              <div
                key={index}
                className="flex-shrink-0 relative overflow-visible"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="w-full relative overflow-visible z-10">
                  <div
                    className={`bg-transparent border-2 border-teal-400 text-white w-full h-48 rounded-lg flex flex-col items-center justify-between py-4 px-2 cursor-pointer hover:scale-105 transition-all duration-300 ${
                      isActive ? "rounded-b-none" : ""
                    }`}
                    onClick={() => toggleDescription(index)}
                  >
                    <div className="flex items-center justify-center h-2/3">
                      {tool.image}
                    </div>
                    <h3 className="text-center font-bold text-sm">{tool.name}</h3>
                  </div>

                  {isActive && (
                    <div className="bg-gray-200 text-sm text-black p-4 rounded-b-lg absolute top-full left-0 w-full z-20 mt-1">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-200"></div>
                      {tool.description}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardTools;