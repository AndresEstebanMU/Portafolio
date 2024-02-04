'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

const ContactM = () => {
  return (
    <div>
        <motion.div
         
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           delay: 0.5,
           ease: [0, 0.71, 0.2, 1.01]
         }}
         className='box w-full flex flex-col gap-5 justify-center items-center  h-screen text-3xl'>
          <p>Todos mis proyectos y contribuciones están disponibles en mi perfil de GitHub:</p>
          <a href="https://github.com/AndresEstebanMU"><FaGithub fontSize={50} /></a>
          <p>Si necesitas mas información sobre mi perfil profesional puedes visitar mi LinkedIn:</p>
          <a href="https://www.linkedin.com/in/andr%C3%A9s-mu%C3%B1oz-96885229a/"><FaLinkedin fontSize={50} /></a>
          <p>O puedes enviar un email directamente a mi direccion de correo: <br /></p>
          <p>andresestebanmu@gmail.com</p>
      </motion.div>
    </div>
  )
}

export default ContactM