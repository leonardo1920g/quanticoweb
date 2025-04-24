'use client';

import { useState } from 'react';
import BackgroundNet from '@/Ui/BackgroundNet';
import { DataBenefits } from '@/Data/DataBenefits';
import CardBenefit from '@/Ui/CardBenefit';

const Benefits = () => {
    const [selected, setSelected] = useState(DataBenefits[0]);

    const handleSelect = (item: any) => {
        setSelected(item);
    };

    const others = DataBenefits.filter((b) => b.id !== selected.id);
    const left = others.slice(0, 2);
    const right = others.slice(2);

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <BackgroundNet />
            <div className="relative z-10 text-white p-20 text-center">
                <h2 className="text-4xl font-bold mb-6 text-teal-400 filter drop-shadow-[0_0_10px_#5FFFE6]">
                    Conoce los beneficios de trabajar con Quantico
                </h2>
                <p className="text-lg mb-15">
                    Sumérgete en el mundo digital con el respaldo de nuestras herramientas y servicios diseñados para transformar tu empresa.
                </p>
                <p className="text-lg text-[#BFFF00] mb-5">
                    Descubre cómo puedes impulsar tu crecimiento, expandir tu presencia global y llevar tu evolución digital al siguiente nivel.
                </p>

                <div className="p-[2px] bg-white w-5/6 rounded-2xl mb-10 mx-auto"></div>

                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10">
                    {/* Lado Izquierdo */}
                    <div className="flex flex-col gap-8 items-end">
                        {left.map((item) => {
                            const Icon = item.Icon;
                            const borderColor = item.color;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => handleSelect(item)}
                                    className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform duration-300 w-32 text-center"
                                >
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_#5FFFE6]"
                                        style={{ borderColor: borderColor }}
                                    >
                                        <Icon className="w-10 h-10"/>
                                    </div>
                                    <p className="mt-2 text-sm font-light whitespace-nowrap">{item.Name}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Card Central */}
                    <CardBenefit
                        Icon={selected.Icon}
                        name={selected.Name}
                        description={selected.Description}
                        color={selected.color}
                    />

                    {/* Lado Derecho */}
                    <div className="flex flex-col gap-8 items-start">
                        {right.map((item) => {
                            const Icon = item.Icon;
                            const borderColor = item.color;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => handleSelect(item)}
                                    className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform duration-300 w-32 text-center"
                                >
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-300 hover:filter hover:drop-shadow-[0_0_8px_#5FFFE6]"
                                        style={{ borderColor: borderColor }}
                                    >
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <p className="mt-2 text-sm font-light whitespace-nowrap">{item.Name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
