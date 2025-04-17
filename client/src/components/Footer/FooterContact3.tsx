import { usePathname } from "next/navigation";
import IconLocation from "@/Components_svg/IconLocation";
import IconMail from "@/Components_svg/IconMail";
import IconWhatsapp from "@/Components_svg/IconWhatsapp";

const FooterContact3 = () => {

    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center justify-center gap-10">

            <p className="text-2xl text-teal-400 font-bold ">Contacto</p>

            <p className="text-center text-base font-semibold">
                Nuestro equipo esta para ayudarte en todo momento.
            </p>
                    
            <ul className="flex flex-col items-center justify-center gap-3 text-lg">
                {
                    [
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

                    ].map (({href, label, icon}) => (
                            
                        <li key={href}>

                            <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-3 transition-transform duration-150 ease-out active:scale-95 active:shadow-inner 
                                ${pathname === href ? "text-teal-400 scale-110" : "text-white hover:text-[#BFFF00] hover:scale-110"}`
                            }
                            >
                                {icon}
                                {label}
                            </a>

                        </li>

                    ))
                }
            </ul>
        </div>        
    )
};

export default FooterContact3;