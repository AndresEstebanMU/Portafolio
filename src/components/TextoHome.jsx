'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';


const TextoHome = () => {
    const handleDescargar = () => {
        const url = '/CURRICULUM VITAE Andrés.doc'; // Ruta al archivo en el directorio public
        window.open(url);
      };
    

    return (
        <motion.div
        className='box p-10 mr-0 lg:mr-80'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
            <div className="flex flex-col gap-5 items-center  text-center text-xl ">
                <Image
                src="/Imagen de perfil.jpg"
                alt="llaves"
                width={50}
                height={50}
                className='rounded-full'
                />
                <p>Recién graduado con entusiasmo de un bootcamp, ofrezco una combinación única de habilidades frescas y una pasión innata por el desarrollo web. Mi enfoque va más allá de las líneas de código; aspira a transformar ideas en experiencias digitales impactantes. Con un compromiso inquebrantable y una mentalidad de aprendizaje continuo, estoy listo para aportar creatividad y soluciones tecnológicas de vanguardia a su equipo. Descubra cómo mi reciente formación y mi dedicación pueden impulsar la innovación en su organización.</p>
                <button onClick={ handleDescargar } className="p-5 bg-red-600 rounded-xl hover:bg-red-700 transition-all w-full xl:w-1/2">Descargar CV</button>
            </div>
        </motion.div>
    )
}

export default TextoHome