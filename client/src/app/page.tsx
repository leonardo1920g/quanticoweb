import "./globals.css";
import Advantages from "./Landing/Advantages";
import Contact from "./Landing/Contact";
import End from "./Landing/End";

import Quantico from "./Landing/Quantico";
import Separator from "./Landing/Separator";
import Services from "./Landing/Services";
import Team from "./Landing/Team";
import Technologies from "./Landing/Technologies";
import Tools from "./Landing/Tools";
import Customer from "./Landing/Customer";

export default function Home() {
  return ( 
    <div className="pt-12">
      <Services/>
      <div className="w-full overflow-hidden relative">
      <Separator />
       </div>
      <Quantico/>
      <Tools/>
      <Separator />
      <Advantages/>
      <Separator />
      <Technologies/>
      <Separator />
      <Team/>
      <Separator />
      <Customer/>
      <Separator />
      <Contact/>
      <Separator />
      <End/>
    </div>
  );
}
