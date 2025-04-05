import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterPolicies2 = () => {

    const pathname = usePathname();

    return (

        <div className="flex flex-col items-center justify-center gap-10">

            <p className="text-2xl text-teal-400 font-bold ">Políticas</p>

            <ul className="flex flex-col items-start justify-center gap-3 text-lg">
                {
                    [
                        {href: "/terminosycondiciones", label: "Términos y Condiciones."},
                        {href: "/politicasdeprivacidad", label: "Políticas de privacidad."},
                        {href: "/politicasdecookies", label: "Políticas de cookies."},
                        {href: "/politicasdesoportetecnico", label: "Políticas de soporte técnico."},
                        {href: "/politicasdeusoaceptable", label: "políticas de uso aceptable."},

                    ].map (({href, label}) => (

                        <li key={href}>
                            <Link
                            href={href}
                            className={`inline-block transition-transform duration-300 active:scale-95 active:shadow-inner 
                                ${pathname === href ? "text-teal-400 scale-110" : "text-white hover:text-teal-400 hover:scale-110"}`
                            }
                            >
                                {label}
                            </Link>                            
                        </li>

                    ))
                }
            </ul>
        </div>
    )
};

export default FooterPolicies2;