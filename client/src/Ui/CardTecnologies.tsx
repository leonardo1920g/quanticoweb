"use client";

import { DataTechnologies } from "@/Data/DataTechnologies";
import { useState } from "react";

type Tool = {
  name: string;
  icon: React.ElementType;
};

type Category = {
  category: string;
  icon: React.ElementType;
  tools: Tool[];
};

const CardTecnologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-10 flex justify-between gap-6">
      {DataTechnologies.map((category: Category, index: number) => {
        const isHovered = hoveredIndex === index;
        const isOtherHovered = hoveredIndex !== null && !isHovered;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center justify-center transition-all duration-500 ease-in-out p-4 rounded-md h-96 ${
              isHovered
                ? "border-3 border-teal-400 w-96 shadow-[0_0_15px_#5FFFE6] bg-[#0D242099] backdrop-blur-sm"
                : isOtherHovered
                ? "flex justify-center items-center opacity-80"
                : "cursor-pointer border-3 border-teal-400 gap-8 w-full hover:shadow-[0_0_15px_#5FFFE6] bg-[#0D242099] backdrop-blur-sm"
            }`}
          >
            {isHovered ? (
              <div className="flex justify-between gap-10 h-96 p-10">
                {/* Icono y categoría */}
                <div className="w-full flex flex-col justify-center items-center gap-5">
                  <category.icon className="text-teal-400 w-20 h-20 filter drop-shadow-[0_0_10px_#5FFFE6]" />
                  <span className="font-semibold text-lg text-center">{category.category}</span>
                </div>

                {/* Lista de herramientas */}
                <div className="grid grid-cols gap-5">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center gap-2">
                      <tool.icon className="text-white w-full h-8 hover:filter hover:drop-shadow-[0_0_10px_#5FFFE6]" />
                    </div>
                  ))}
                </div>
              </div>
            ) : isOtherHovered ? (
              <div className="h-96 flex flex-col justify-center items-center gap-5 w-full">
                <div className="w-1 h-full rounded-full bg-teal-400 filter drop-shadow-[0_0_10px_#5FFFE6]"></div>
                <category.icon className="w-16 h-full filter drop-shadow-[0_0_10px_#5FFFE6]" />
                <div className="w-1 h-full rounded-full bg-teal-400 filter drop-shadow-[0_0_10px_#5FFFE6]"></div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5">
                <category.icon className="w-20 h-20 filter drop-shadow-[0_0_10px_#5FFFE6]" />
                <span className="text-center text-lg font-semibold">{category.category}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CardTecnologies;