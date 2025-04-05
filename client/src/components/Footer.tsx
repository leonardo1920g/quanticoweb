"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import facebook from "../Images/Facebook.png";
import tiktok from "../Images/Tik-Tok.png";
import instagram from "../Images/Instagram.png";
import logofooter from "../Images/LogoFooter.png";
import logo from "../Images/LogoQuantico.png";
import IconLocation from "../Components_svg/IconLocation";
import IconMail from "../Components_svg/IconMail";
import IconWhatsapp from "../Components_svg/IconWhatsapp";

const Footer = () => {

    const pathname = usePathname();

    return (
        <footer className="bg-gradient-to-b from-zinc-950 to-slate-900 shadow-[0px_-7px_20px_#22d3ee] px-20 pt-20 pb-5">
            <div className="grid grid-cols-3 gap-10">

                {/* Primera columna */}
                <div className="flex flex-col items-center justify-center gap-5">
                    <Image
                        src={logo} 
                        alt="Logo de la empresa" 
                        className="h-18 w-auto" 
                    />
                    <p className="text-teal-400 font-medium text-lg">Transformando Digitalmente.</p>
                    <p className="font-bold text-2xl">Síguenos</p>
                    
                    <ul className="flex gap-2">
                        <li>
                            <a
                                href="https://www.facebook.com/quanticowebcreations"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={facebook} 
                                    alt="facebook" 
                                    className="h-20 w-auto transition-transform duration-150 hover:scale-110 active:scale-95" 
                                />
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.instagram.com/quanticowebcreations/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={instagram} 
                                    alt="instagram" 
                                    className="h-20 w-auto transition-transform duration-150 hover:scale-110 active:scale-95" 
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.tiktok.com/@quanticowebcreations"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={tiktok}
                                    alt="TikTok"
                                    className="h-20 w-auto transition-transform duration-150 hover:scale-110 active:scale-95"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Segunda columna */}
                <div className="flex flex-col items-center justify-center gap-10">

                    <p className="text-2xl text-teal-400 font-bold ">Políticas</p>

                    <ul className="flex flex-col items-start justify-center gap-3 text-lg">
                        {[
                            {href: "/terminosycondiciones", label: "Términos y Condiciones."},
                            {href: "/politicasdeprivacidad", label: "Políticas de privacidad."},
                            {href: "/politicasdecookies", label: "Políticas de cookies."},
                            {href: "/politicasdesoportetecnico", label: "Políticas de soporte técnico."},
                            {href: "/politicasdeusoaceptable", label: "políticas de uso aceptable."},

                        ].map(({href, label}) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`inline-block transition-transform duration-300 active:scale-95 active:shadow-inner ${
                                        pathname === href
                                          ? "text-teal-400 scale-110"
                                          : "text-white hover:text-teal-400 hover:scale-110"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tercera columna */}
                <div className="flex flex-col items-center justify-center gap-10">

                    <p className="text-2xl text-teal-400 font-bold ">
                        Contacto
                    </p>

                    <p className="text-center text-base font-semibold">
                        Nuestro equipo esta para ayudarte en todo momento.
                    </p>
                    
                    <ul className="flex flex-col items-center justify-center gap-3 text-lg">
                        {[
                            {   
                                href: "https://www.google.com/maps/place/Colombia", 
                                label: "Colombia.", 
                                icon: <IconLocation className="h-6 w-auto buzz-animation"/>
                            },
                            {
                                href: "mailto:contacto@quanticowebcreations.pro", 
                                label: "Contacto@quanticowebcreations.pro", 
                                icon: <IconMail className="h-4 w-auto buzz-animation"/>
                            },
                            {
                                href: "https://wa.me/573137691347?text=Hola%20Quantico%2C%20quisiera%20más%20información.", 
                                label: "+57 313 769 1347", 
                                icon: <IconWhatsapp className="h-5 w-auto buzz-animation"/>
                            },

                        ].map(({href, label, icon}) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-3 transition-transform duration-150 ease-out active:scale-95 active:shadow-inner ${
                                        pathname === href 
                                          ? "text-teal-400 scale-110" 
                                          : "text-white hover:text-teal-400 hover:scale-110"
                                    }`}
                                >
                                    {icon}
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            {/* Línea de derechos reservados */}
            <div className="flex justify-center gap-3 pt-15 font-medium text-base">

                <p>Copyright &copy; 2024 |</p>

                <Image
                    src={logofooter} 
                    alt="Logo del footer" 
                    className="h-5 w-auto buzz-animation" 
                />
                
                <p>| Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
