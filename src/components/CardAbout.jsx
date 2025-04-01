'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

import { TbDiamonds } from "react-icons/tb";

const CardAbout = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center px-3 md:px-28 gap-5  lg:flex-row  bg-black mb-10'>
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
          width={150}
          height={150}
          className='rounded-3xl md:m-24 mt-2 '
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
      className=' text-xl lg:text-3xl text-center box lg:m-16 text-white' >

          <p>¡Hola! Soy Andrés Muñoz, desarrollador web fullstack con experiencia en la creación de soluciones digitales. Mi enfoque abarca tanto el desarrollo del lado del cliente como del servidor, y siempre busco crear aplicaciones web robustas y funcionales.</p>
          <p className='mt-6 md:mt-10 text-left'>Habilidades Clave:</p><br />
          <div className='flex flex-row text-left '>
            <TbDiamonds className=' max-w-8 min-w-8' />
            <span className='ml-2 '>Desarrollo web fullstack con conocimientos en HTML5, CSS5, Git y GitHub colaborativo, JavaScript, NodeJS, React JS, Vite, Next.js, Tailwind CSS, Express JS, MongoDB y Firebase.</span>
          </div>
          <div className='flex flex-row mt-3  text-left'>
            <TbDiamonds className='max-w-8 min-w-8' />
            <span className='ml-2 '> Implementación de soluciones escalables.</span>
          </div>
          <div className='flex flex-row mt-3 text-left '>
            <TbDiamonds className='max-w-8 min-w-8' />
            <span className='ml-2 '>Disfruto trabajar en equipo, aportando siempre una actitud colaborativa y proactiva. Priorizo una comunicación efectiva y asertiva para facilitar el trabajo conjunto y alcanzar los objetivos comunes.</span>
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