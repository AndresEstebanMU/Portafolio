'use client'


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import Link from "next/link";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import React from 'react'

const NavBar = () => {

  
  const menuItems = [
    "Home",
    "Acerca de mí",
    "Proyectos",
    "Contacto",
  ];



  return (
    <Navbar disableAnimation isBordered className="bg-red-600 static">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p href="/" className="font-bold text-inherit">Portafolio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href="/" className="font-bold text-inherit ">Portafolio</Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/about" className="font-light ml-10">
            Acerca de mi
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/projects" className="font-light" >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" className="font-light">
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

      <NavbarMenu>
        {/* {menuItems.map((item, index) => ( */}
          <NavbarMenuItem >
            <Link
              className="w-full"
              color="white"
              href="/"
              size="lg"
            >
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem >
            <Link
              className="w-full"
              color="white"
              href="/about"
              size="lg"
            >
              Acerca de mí
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem >
            <Link
              className="w-full"
              color="white"
              href="/projects"
              size="lg"
            >
              Projects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem >
            <Link
              className="w-full"
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
