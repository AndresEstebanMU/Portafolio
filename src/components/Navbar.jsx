'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Tooltip} from "@nextui-org/react";
import Link from "next/link";
import { Bebas_Neue } from 'next/font/google';
import { useEffect, useRef, useState} from "react";
import { usePathname } from "next/navigation";

const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] });

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const renderCount = useRef(0);
  renderCount.current += 1;
  
  useEffect(() => {
    console.log(`El componente Nav se ha renderizado ${renderCount.current} veces`);
  });

  
  return (
    <Navbar 
    isBordered 
    className="bg-red-900 static" 
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden " justify="start" >
        <Tooltip 
        className="text-gray-950"
        content={"Menú"}
        delay={600}
        >
          <NavbarMenuToggle />
        </Tooltip>
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className={bebas.className}>
          
          <Link href="/" className="font-bold text-2xl" /* onClick={() => setIsMenuOpen(false)} */>Portafolio</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 md:pr-8 sm:pr-2" justify="end">
        <NavbarBrand className={`${bebas.className} flex justify-center md:pr-16 sm:pr-2`}>
          <Link href="/" className=" text-3xl font-black">Portafolio</Link>
        </NavbarBrand>
        <NavbarItem isActive className={bebas.className}>
          <Link href="/projects" className="lg:ml-60 md:ml-40 sm:ml-30 text-2xl" >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem isActive className={bebas.className}>
          <Link color="foreground" href="/about" className="text-2xl" >
            Acerca de mi
          </Link>
        </NavbarItem>
       
        <NavbarItem isActive className={bebas.className}>
          <Link color="foreground" href="/contact" className="text-2xl">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      

      <NavbarMenu 
        className="w-fit overflow-hidden" 
      >
        
        
          <NavbarMenuItem  className={bebas.className}>
            <Link
              className="w-full text-xl"
              color="white"
              href="/"
              size="lg"
              /* onClick={() => setIsMenuOpen(false)} */
            >
              Home
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem className={bebas.className}>
            <Link
              className="w-full text-xl"
              color="white"
              href="/projects"
              size="lg"
              /* onClick={() => setIsMenuOpen(false)} */
            >
              Projectos
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem className={bebas.className}>
            <Link
              className="w-full text-xl"
              color="white"
              href="/about"
              size="lg"
              /* onClick={() => setIsMenuOpen(false)} */
            >
              Acerca de mí
            </Link>
          </NavbarMenuItem>
          
          <NavbarMenuItem className={bebas.className}>
            <Link
              className="w-full text-xl"
              color="white"
              href="/contact"
              size="lg"
              /* onClick={() => setIsMenuOpen(false)} */
            >
              Contacto
            </Link>
          </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBar