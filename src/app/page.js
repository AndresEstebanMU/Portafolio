import Galeria from "@/components/Galeria";
import TextoHome from "@/components/TextoHome";


// import Image from "next/image";
// import Login from "@/components/Login";

export default function Home() {

 

  return (
    <>
      <div className=" grid grid-cols-1 mx-auto justify-items-center mt-2 md:mt-10 md:grid-cols-2 bg-black overflow-auto">
        {/* <Image src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' alt='blabla' width={300} height={300} className="rounded-xl" /> */}
        {/* <Image src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' alt='blabla' width={300} height={300}  /> */}
        
        <Galeria />
        
        <TextoHome />
      </div>
    </>
  );
  

}


