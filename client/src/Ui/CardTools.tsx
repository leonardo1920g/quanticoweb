'use client';

import React from 'react';

interface IconProps {
  className: string;
  color: string;
}

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

interface CardToolsProps {
  tools: Tool[];
  onSelectTool: (toolId: string) => void;
  selectedToolId: string | null;
}

const CardTools: React.FC<CardToolsProps> = ({ tools, onSelectTool, selectedToolId }) => {
  return (
    <div className="flex flex-nowrap justify-between px-15">
      {tools.map((tool) => {
        const isSelected = selectedToolId === tool.id;
        const IconComponent = tool.icon;
        const iconColor = isSelected ? '#BFFF00' : '#33D6EC'; // Considera usar variables CSS o constantes para los colores
        const borderColor = isSelected ? '#BFFF00' : '#33D6EC'; // Usamos el mismo color para las bolitas

        return (
          <div
            key={tool.id}
            className={`bg-transparent border-3 border-[#5FFFE6] py-10 rounded-lg shadow-lg cursor-pointer w-[266px] transition-all duration-300
              ${isSelected 
                ? 'scale-105 border-[#BFFF00] filter drop-shadow-[0_0_10px_#BFFF00]' 
                : 'hover:scale-105 hover:filter hover:drop-shadow-[0_0_10px_#5FFFE6] hover:border-[#5FFFE6] border-teal-450'}`}
            onClick={() => onSelectTool(tool.id)}
          >
            <div className="relative flex justify-center mb-10 group">
              {/* Icono */}
              <IconComponent
                className="w-auto h-16 transition-colors duration-300"
                color={iconColor}
              />

              {/* Órbitas animadas */}
              <span
                className="absolute rounded-full animate-orbit1"
                style={{ backgroundColor: borderColor, width: "6px", height: "6px" }}
              />
              <span
                className="absolute rounded-full animate-orbit2"
                style={{ backgroundColor: borderColor, width: "6px", height: "6px" }}
              />
              <span
                className="absolute rounded-full animate-orbit3"
                style={{ backgroundColor: borderColor, width: "6px", height: "6px" }}
              />
            </div>
            <h3 className="text-white text-lg font-medium text-center">{tool.name}</h3>
            <style jsx>{`
              .animate-orbit1,
              .animate-orbit2,
              .animate-orbit3 {
                position: absolute;
                top: 50%;
                left: 50%;
                transform-origin: 0 0;
                animation-timing-function: linear;
              }

              @keyframes orbit1 {
                0% {
                  transform: rotate(0deg) translateX(45px) rotate(0deg);
                }
                100% {
                  transform: rotate(360deg) translateX(45px) rotate(-360deg);
                }
              }

              @keyframes orbit2 {
                0% {
                  transform: rotate(120deg) translateX(45px) rotate(0deg);
                }
                100% {
                  transform: rotate(480deg) translateX(45px) rotate(-360deg);
                }
              }

              @keyframes orbit3 {
                0% {
                  transform: rotate(245deg) translateX(45px) rotate(0deg);
                }
                100% {
                  transform: rotate(600deg) translateX(45px) rotate(-360deg);
                }
              }

              .animate-orbit1 {
                animation: orbit1 6s infinite;
              }
              .animate-orbit2 {
                animation: orbit2 8s infinite;
              }
              .animate-orbit3 {
                animation: orbit3 10s infinite;
              }
            `}</style>
          </div>
          
        );
      })}
    </div>
  );
};

export default CardTools;


