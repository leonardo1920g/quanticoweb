import Image from "next/image";
import logofooter from "@/Images/LogoFooter.png"
const FooterCopyright = () => {

    return (
        <div className="flex justify-center gap-3 pt-15 font-medium text-base">

                <p>Copyright &copy; 2024 |</p>

                <Image
                    src={logofooter} 
                    alt="Logo del footer" 
                    className="h-5 w-auto buzz-animation" 
                />
                
                <p>| Todos los derechos reservados.</p>
        </div>
    )
};

export default FooterCopyright;