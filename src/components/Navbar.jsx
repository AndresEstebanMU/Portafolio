'use client'


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Tooltip} from "@nextui-org/react";
import Link from "next/link";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { Bebas_Neue } from 'next/font/google';
import { useEffect, /* useState, */ useRef } from "react";
/* import { usePathname } from "next/navigation";  */



const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] });

// agregar classname


const NavBar = () => {

 /*  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)
  const pathname = usePathname();
  const hasInteracted = useRef(false);

  // Cierra el menú solo después de la primera interacción con el toggle
  useEffect(() => {
    if (!hasInteracted.current) return;
    setIsMenuOpen(false);
  }, [pathname]);

  const handleToggle = () => {
    hasInteracted.current = true;
    setIsMenuOpen(prev => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }; */

 

  
  const renderCount = useRef(0);
  
  renderCount.current += 1;
  
  useEffect(() => {
    console.log(`El componente Nav se ha renderizado ${renderCount.current} veces`);
  });
  
  


  return (
    <Navbar isBordered className="bg-red-900 static" /* isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} */ >
      <NavbarContent className="sm:hidden " justify="start" >
        <Tooltip 
        className="text-gray-950"
        content={"Abrir menú"}
        delay={600}
        >
          <NavbarMenuToggle
            /* onClick={handleToggle} */
            /* aria-label={isMenuOpen ? "Close menu" : "Open menu"} */
          />
        </Tooltip>
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className={bebas.className}>
          {/* <AcmeLogo /> */}
          <Link href="/" className="font-bold text-2xl"
            /* onClick={handleCloseMenu} */
          >Portafolio</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 md:pr-8 sm:pr-2" justify="end">
        <NavbarBrand className={`${bebas.className} flex justify-center md:pr-16 sm:pr-2`}>
          {/* <AcmeLogo /> */}
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

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu 
        className="w-fit overflow-hidden" 
        
        /* key={pathname} */
      >
        
        {/* {menuItems.map((item, index) => ( */}
          <NavbarMenuItem  className={bebas.className}>
            <Link
              className="w-full text-xl"
              color="white"
              href="/"
              size="lg"
              /* onClick={handleCloseMenu} */
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
              /* onClick={handleCloseMenu} */
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
              /* onClick={handleCloseMenu} */
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
              /* onClick={handleCloseMenu} */
            >
              Contacto
            </Link>
          </NavbarMenuItem>
        
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBar






// import Link from 'next/link'
// import React from 'react'

// function Navbar() {
//  return (
//     <div className='bg-red-500 p-10 text-white flex flex-row gap-5'>
//         <Link href="/">home</Link>
//         <Link href="/about">about</Link>
//     </div>
//   )
// }

// export default Navbar
