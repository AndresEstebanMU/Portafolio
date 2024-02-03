'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbDiamonds } from "react-icons/tb";

const CardAbout = () => {
  return (
    <motion.div 
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }} className='flex flex-row w-full h-screen justify-center items-center px-28 gap-5'>
        <Image 
              src="/Imagen de perfil.jpg"
              alt="descripcion"
              width={250}
              height={250}
              className='rounded-3xl'
          />
          <div className='m-48 text-xl text-center '>
            
            <p>¡Hola! Soy Andrés Muñoz, un apasionado desarrollador web fullstack con experiencia en la creación de soluciones digitales innovadoras. Mi enfoque abarca tanto el desarrollo del lado del cliente como del servidor, y me destaco por mi habilidad para crear aplicaciones web robustas y funcionales.</p>
            <p className='mt-10 text-left'>Habilidades Clave:</p><br />
            <div className='flex flex-row text-left'>
              <TbDiamonds className='mr-5 mt-1' /> 
              <span>Desarrollo web fullstack con conocimientos en HTML5, CSS5, Git y GitHub colaborativo,<br /> JavaScript, NodeJS, React JS, Vite, Next.js, Tailwind CSS, Express JS y MongoDB</span>
            </div>
            <div className='flex flex-row'>
              <TbDiamonds className='mr-5 mt-1' />  
              <span> Implementación de soluciones escalables</span>
            </div> 
            <div className='flex flex-row'> 
              <TbDiamonds className='mr-5 mt-1' /> 
              <span>Colaboración en equipo y comunicación efectiva</span>
            </div>  
            <div className=' w-full flex gap-5 justify-center p-10 '>
              <a href="https://github.com/AndresEstebanMU"><FaGithub fontSize={30} /></a>
              <a href="https://www.linkedin.com/in/andr%C3%A9s-mu%C3%B1oz-96885229a/"><FaLinkedin fontSize={30} /></a>
            </div>
          </div>
      </motion.div>
  )
}

export default CardAbout