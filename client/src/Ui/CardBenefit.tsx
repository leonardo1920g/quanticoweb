interface CardBenefitProps {
    Icon: React.ElementType;
    name: string;
    description: string;
    color: string;
}

export const CardBenefit = ({ Icon, name, description, color }: CardBenefitProps) => {
    // Aseguramos que el color sea válido, y generamos uno más transparente para el fondo
    const hexColor = color;
    const backgroundColor = `${hexColor}0A`;

    return (
        <div
            className="w-3/5 p-8 rounded-2xl border text-center transition-all duration-300 min-h-[300px] flex flex-col justify-center"
            style={{
                borderColor: hexColor,
                backgroundColor,
                backdropFilter: "blur(10px)",
                boxShadow: `0 0 20px ${hexColor}`,
            }}
        >
            <div className="relative mb-4 flex items-center justify-center w-20 h-20 mx-auto">
                <Icon className="w-16 h-16 z-10"/>

                {/* Órbitas animadas */}
                <span
                    className="absolute rounded-full animate-orbit1"
                    style={{ backgroundColor: hexColor, width: "6px", height: "6px" }}
                />
                <span
                    className="absolute rounded-full animate-orbit2"
                    style={{ backgroundColor: hexColor, width: "6px", height: "6px" }}
                />
                <span
                    className="absolute rounded-full animate-orbit3"
                    style={{ backgroundColor: hexColor, width: "6px", height: "6px" }}
                />
            </div>

            <h3 className="text-2xl font-semibold mb-2" style={{ color: hexColor }}>
                {name}
            </h3>
            <p className="text-sm text-white">{description}</p>

            <style jsx>{`
                .animate-orbit1,
                .animate-orbit2,
                .animate-orbit3 {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform-origin: 0 0;
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
                        transform: rotate(240deg) translateX(45px) rotate(0deg);
                    }
                    100% {
                        transform: rotate(600deg) translateX(45px) rotate(-360deg);
                    }
                }

                .animate-orbit1 {
                    animation: orbit1 6s linear infinite;
                }
                .animate-orbit2 {
                    animation: orbit2 8s linear infinite;
                }
                .animate-orbit3 {
                    animation: orbit3 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default CardBenefit;
