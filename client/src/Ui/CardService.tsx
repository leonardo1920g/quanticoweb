"use client";

import { useState, useEffect } from "react";
import { DataService } from "@/Data/DataServices";
import Image from "next/image";
import Link from "next/link";

const CardService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Avanzar automáticamente cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % DataService.length);
      setFade(true);
    }, 300); // duración del fade-out
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? DataService.length - 1 : prev - 1
      );
      setFade(true);
    }, 300); // duración del fade-out
  };

  const service = DataService[currentIndex];

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          key={service.image.src}
          src={service.image}
          alt={service.title}
          fill
          className={`object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
        />

        {/* Gradiente inferior izquierdo */}
        <div
          className="absolute bottom-0 left-0 w-[700px] h-full"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 90%, transparent 100%)",
          }}
        ></div>

        
      </div>

      {/* Contenido */}
      <div className="relative z-10 px-20 py-5 max-w-[50%] text-white flex flex-col justify-around h-full">
        <h2 className="text-5xl font-bold text-teal-400">{service.title}</h2>
        <h3 className="text-2xl font-medium">{service.subtitle}</h3>
        <p className="text-xl mt-2 text-teal-400 font-medium">
          {service.characteristics}
        </p>

        <div className="p-[2px] bg-white w-96 rounded-2xl"></div>

        <p className="text-base">{service.description}</p>

        <div className="flex justify-center items-center gap-10 mt-4">
          <Link
            href={service.href}
            className="flex justify-center items-center font-semibold bg-teal-500 w-40 py-2 rounded text-base hover:bg-teal-400 transition"
          >
            Ver más
          </Link>

          <Link
            href="/contacto"
            className="flex justify-center items-center font-semibold bg-white text-black w-40 py-2 rounded text-base hover:bg-gray-300 transition"
          >
            Contactar
          </Link>
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-4 w-10 h-10 top-1/2 transform -translate-y-1/2  bg-white/30 text-white rounded-full p-2 hover:bg-white/50"
      >
        ◀
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50"
      >
        ▶
      </button>
    </div>
  );
};

export default CardService;