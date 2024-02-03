// import Login from "@/components/Login";
import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-cols-1 h-screen w-full justify-items-center items-center md:grid-cols-2">
      <Image src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' alt='blabla' width={300} height={300} className="rounded-xl" />
      {/* <Image src='https://nextui.org/_next/image?url=%2Fimages%2Fhero-card.webp&w=256&q=75' alt='blabla' width={300} height={300}  /> */}

      <div className="flex flex-col gap-5 items-center text-center">
        <p>Lorem ipsum dolor bal bla dbskfkjdgjhbsoefs ekrnfojbg djgiwn gwr jefgwn egpw g</p>
        <button className="p-5 bg-red-600 rounded-xl hover:bg-red-700 transition-all w-full xl:w-1/2">Descargar CV</button>
      </div>
    </div>
  );
}
