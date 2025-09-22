import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Economica } from 'next/font/google';



const generalFont = Economica({ weight:'400', subsets: ['latin'] });


export const metadata = {
  title: "Portafolio Desarrollo Web Fullstack | Andrés Muñoz",
  description: "Portafolio Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" >
      <body className={`${generalFont.className} grid grid-rows-[auto_1fr_auto] min-h-screen`} >
          <Providers >
            <NavBar />
            <main className="overflow-auto">
              {children}
            </main>
            <Footer />
          </Providers>  
          {/*chiledren es la página en si, es el body */}
      </body>
    </html>
  );
}



// <div className="min-h-screen flex flex-col">   
//   <div className="flex-grow">{children}</div>
// </div>