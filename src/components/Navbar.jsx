'use client'


import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import Link from "next/link";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import React from 'react'

const NavBar = () => {

  
  const menuItems = [
    "Acerca de mí",
    "Proyectos",
    "Contacto",
  ];



  return (
    <Navbar disableAnimation isBordered className="bg-red-600">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Portafolio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href="/" className="font-bold text-inherit">Portafolio</Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/about">
            Acerca de mi
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/projects" aria-current="page" color="warning">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
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
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
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
