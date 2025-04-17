'use client';

import React from 'react';

interface Tool {
  id: string;
  name: string;
  description: string;
  image: React.ReactNode;
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
        return (
          <div
            key={tool.id}
            className={`bg-transparent border-3 border-teal-400 py-10 rounded-lg shadow-lg cursor-pointer w-[266px] transition-transform duration-300
              ${isSelected ? 'scale-105' : 'hover:scale-105'}`}
            onClick={() => onSelectTool(tool.id)}
          >
            <div className="flex justify-center mb-10">
              <div className="w-16 h-16">{tool.image}</div>
            </div>
            <h3 className="text-white text-lg font-medium text-center">{tool.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CardTools;