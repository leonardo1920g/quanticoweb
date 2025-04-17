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

        return (
          <div
            key={tool.id}
            className={`bg-transparent border-3 py-10 rounded-lg shadow-lg cursor-pointer w-[266px] transition-all duration-300
              ${isSelected 
                ? 'scale-105 border-[#BFFF00] filter drop-shadow-[0_0_10px_#BFFF00]' 
                : 'hover:scale-105 hover:filter hover:drop-shadow-[0_0_10px_#5FFFE6] hover:border-[#5FFFE6] border-teal-400'}`}
            onClick={() => onSelectTool(tool.id)}
          >
            <div className="flex justify-center mb-10 group">
              <IconComponent
                className="w-auto h-16 transition-colors duration-300"
                color={iconColor}
              />
            </div>
            <h3 className="text-white text-lg font-medium text-center">{tool.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CardTools;