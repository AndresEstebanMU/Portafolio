import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Desarrollo Web Fullstack | Andrés Muñoz",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
          <Providers>
            <NavBar />
          
            {children}
          </Providers>
          {/*chiledren es la página en si, es el body */}

          <Footer />

        
      </body>
    </html>
  );
}



// <div className="min-h-screen flex flex-col">   
//   <div className="flex-grow">{children}</div>
// </div>