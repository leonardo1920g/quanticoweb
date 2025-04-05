"use client"

import FooterLogo1 from "./FooterLogo1";
import FooterPolicies2 from "./FooterPolicies2";
import FooterContact3 from "./FooterContact3";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {

    return (

        <footer className="bg-gradient-to-b from-zinc-950 to-slate-900 shadow-[0px_-7px_20px_#22d3ee] px-20 pt-20 pb-5">
            
            <div className="grid grid-cols-3 gap-10">

                {/* Primera columna */}
                <FooterLogo1/>

                {/* Segunda columna */}
                <FooterPolicies2/>

                {/* Tercera columna */}
                <FooterContact3/>                

            </div>

            {/* Derechos reservados */}
            <FooterCopyright/>
    
        </footer>
    );
};

export default Footer;
