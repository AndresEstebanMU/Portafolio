// import Login from "@/components/Login";

import Galeria from "@/components/Galeria";
import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-cols-1 h-screen w-full justify-items-center items-center md:grid-cols-2">
      {/* <Image src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' alt='blabla' width={300} height={300} className="rounded-xl" /> */}
      {/* <Image src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' alt='blabla' width={300} height={300}  /> */}
      <Galeria />
      <div className="flex flex-col gap-5 items-center text-center">
        <p>Recién graduado con entusiasmo de un bootcamp, ofrezco una combinación única de habilidades frescas y una pasión innata por el desarrollo web. Mi enfoque va más allá de las líneas de código; aspira a transformar ideas en experiencias digitales impactantes. Con un compromiso inquebrantable y una mentalidad de aprendizaje continuo, estoy listo para aportar creatividad y soluciones tecnológicas de vanguardia a su equipo. Descubra cómo mi reciente formación y mi dedicación pueden impulsar la innovación en su organización</p>
        <button className="p-5 bg-red-600 rounded-xl hover:bg-red-700 transition-all w-full xl:w-1/2">Descargar CV</button>
      </div>
      
    </div>
  );
}
