import Image from "next/image";
import logo from "@/Images/LogoQuantico.png";
import facebook from "@/Images/Facebook.png";
import tiktok from "@/Images/Tik-Tok.png";
import instagram from "@/Images/Instagram.png";

const socialLinks = [

    {
      href: "https://www.facebook.com/quanticowebcreations",
      alt: "Facebook",
      src: facebook,
    },

    {
      href: "https://www.instagram.com/quanticowebcreations/",
      alt: "Instagram",
      src: instagram,
    },

    {
      href: "https://www.tiktok.com/@quanticowebcreations",
      alt: "TikTok",
      src: tiktok,
    },

];
  
const FooterLogo1 = () => {

    return (

        <div className="flex flex-col items-center justify-center gap-5 text-center">

            <Image
            src={logo}
            alt="Logo de la empresa"
            className="h-18 w-auto"
            priority
            />
            
            <p className="text-teal-400 font-medium text-lg">Transformando Digitalmente.</p>
            
            <p className="font-bold text-2xl">Síguenos</p>
  
            <ul className="flex gap-2">
                {socialLinks.map(({ href, alt, src }) => (
                    <li key={alt}>

                        <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ir a ${alt}`}
                        >

                            <Image
                            src={src}
                            alt={alt}
                            className="h-20 w-auto transition-transform duration-150 hover:scale-110 active:scale-95"
                            />

                        </a>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};
  
export default FooterLogo1;