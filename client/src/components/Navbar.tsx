"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../Images/LogoQuantico.png"

const Navbar = () => {

    const pathname = usePathname();
    return (
        
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-slate-900 to-zinc-950 shadow-[0px_7px_20px_#22d3ee] text-white flex justify-between py-3 px-20">

            <h1 className="font-bold text-xl">
                <Link href={'/'}>
                    <Image 
                    src={logo} 
                    alt="Logo de la empresa" 
                    className="h-13 w-auto" 
                    />
                    
                </Link>
            </h1>

            <ul className="flex items-center justify-center gap-8 font-semibold text-lg">
                {[
                    { href: "/", label: "Inicio" },
                    { href: "/blog", label: "Blog" },
                    { href: "/servicios", label: "Servicios" },
                    { href: "/empresa", label: "Empresa" },
                    { href: "/contacto", label: "Contácto" },
                ].map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`inline-block transition-transform duration-300 ${
                                pathname === href ? "text-teal-400 scale-110" : "text-white hover:text-[#BFFF00] hover:scale-110"
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>  

        </nav>      
        
    )
};

export default Navbar;