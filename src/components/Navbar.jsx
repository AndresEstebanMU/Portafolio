'use client'


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import Link from "next/link";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import React from 'react';
import { Bebas_Neue } from 'next/font/google';


const bebas = Bebas_Neue({  weight: '400', subsets: ['latin'] });

// agregar classname

const NavBar = () => {

  
  /*const menuItems = [
    "Home",
    "Acerca de mí",
    "Proyectos",
    "Contacto",
  ];*/

  


  return (
    <Navbar isBordered className="bg-red-900 static" >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className={bebas.className}>
          {/* <AcmeLogo /> */}
          <p href="/" className="font-bold text-2xl">Portafolio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 md:pr-8 sm:pr-2" justify="end">
        <NavbarBrand className={`${bebas.className} flex justify-center md:pr-16 sm:pr-2`}>
          {/* <AcmeLogo /> */}
          <Link href="/" className=" text-3xl font-black">Portafolio</Link>
        </NavbarBrand>
        <NavbarItem isActive className={bebas.className}>
          <Link href="/projects" className=" md:ml-40 sm:ml-30 text-2xl" >
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

      <NavbarMenu className="w-fit" >
        {/* {menuItems.map((item, index) => ( */}
          <NavbarMenuItem className={bebas.className}>
            <Link
              className="w-full text-xl"
              color="white"
              href="/"
              size="lg"
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
