"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {

    const pathname = usePathname();
    return (
        <footer className="bg-gradient-to-b from-zinc-950 to-slate-900 shadow-[0px_-7px_20px_#22d3ee] px-20 pt-20 pb-5">
            <div className="grid grid-cols-3 gap-10">

                {/* Primera columna */}
                <div className="flex flex-col items-center justify-center gap-5">
                    <p>Logo</p>
                    <p className="text-teal-400 font-semibold">Transformando Digitalmente.</p>
                    <p className="font-bold text-2xl">Síguenos</p>
                    
                    <ul className="flex gap-5">
                        <li>
                            <Link href="/"><p>f</p></Link>
                        </li>
                        <li>
                            <Link href="/"><p>f</p></Link>
                        </li>
                        <li>
                            <Link href="/"><p>f</p></Link>
                        </li>
                        <li>
                            <Link href="/"><p>f</p></Link>
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
                                    className={`inline-block transition-transform duration-300 ${
                                        pathname === href ? "text-teal-400 scale-110" : "text-white hover:text-teal-400 hover:scale-110"
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
                            {href: "/colombia", label: "Colombia."},
                            {href: "/email", label: "Contacto@quanticowebcreations.pro"},
                            {href: "/celular", label: "+57 313 769 1347"},

                        ].map(({href, label}) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`inline-block transition-transform duration-300 ${
                                        pathname === href ? "text-teal-400 scale-110" : "text-white hover:text-teal-400 hover:scale-110"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            {/* Línea de derechos reservados */}
            <div className="flex justify-center gap-3 pt-15 font-medium text-base">
                <p>Copyright &copy; 2024 |</p>
                <p>Logo</p>
                <p>| Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
