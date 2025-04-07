import "./globals.css";

import Quantico from "./Landing/Quantico";
import Separator from "./Landing/Separator";
import Services from "./Landing/Services";
import Tools from "./Landing/Tools";

export default function Home() {
  return ( 
    <div className="pt-12">
      <Services/>
      <div className="w-full">
      <Separator/>
      </div>
      <Quantico/>
      <Tools/>
    </div>
  );
}
