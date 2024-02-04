'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { TbDiamonds } from "react-icons/tb";

const CardAbout = () => {
  return (
    <div className='flex flex-row w-full h-screen justify-center items-center px-28 gap-5'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }} >
        <Image
          src="/Imagen de perfil.jpg"
          alt="descripcion"
          width={500}
          height={500}
          className='rounded-3xl'
        />
        
      </motion.div>
      <motion.div   
      
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className='m-48 text-xl text-center box'>

          <p>¡Hola! Soy Andrés Muñoz, un apasionado desarrollador web fullstack con experiencia en la creación de soluciones digitales innovadoras. Mi enfoque abarca tanto el desarrollo del lado del cliente como del servidor, y me destaco por mi habilidad para crear aplicaciones web robustas y funcionales.</p>
          <p className='mt-10 text-left'>Habilidades Clave:</p><br />
          <div className='flex flex-row text-left'>
            <TbDiamonds className='mr-5 mt-1' />
            <span >Desarrollo web fullstack con conocimientos en HTML5, CSS5, Git y GitHub colaborativo,<br /> JavaScript, NodeJS, React JS, Vite, Next.js, Tailwind CSS, Express JS y MongoDB.</span>
          </div>
          <div className='flex flex-row mt-3'>
            <TbDiamonds className='mr-5 mt-1' />
            <span> Implementación de soluciones escalables.</span>
          </div>
          <div className='flex flex-row mt-3'>
            <TbDiamonds className='mr-5 mt-1' />
            <span>Colaboración en equipo y comunicación efectiva.</span>
          </div>
          {/* <div className=' w-full flex gap-5 justify-center p-10 '>
          <p>Todos mis proyectos y contribuciones están disponibles en mi perfil de GitHub:</p>
          <a href="https://github.com/AndresEstebanMU"><FaGithub fontSize={30} /></a>
          <a href="https://www.linkedin.com/in/andr%C3%A9s-mu%C3%B1oz-96885229a/"><FaLinkedin fontSize={30} /></a>
        </div> */}

        </motion.div>
    </div>
  )
}

export default CardAbout