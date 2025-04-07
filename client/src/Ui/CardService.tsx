"use client";

import { useState, useEffect } from "react";
import { DataService } from "@/Data/DataServices";
import Image from "next/image";
import Link from "next/link";
import logoService from "@/Images/LogoPlano.png";

const CardService = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanzar automáticamente cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DataService.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? DataService.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-xl">
      {/* Contenedor deslizable */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {DataService.map((service, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
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

            {/* Logo */}
            <div className="absolute bottom-4 right-4 z-20">
              <Image
                src={logoService}
                alt="Logo"
                width={300}
                height={300}
                className="pr-10 pb-5"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-4 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 z-30"
      >
        ◀
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 w-10 h-10 top-1/2 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 z-30"
      >
        ▶
      </button>
    </div>
  );
};

export default CardService;