'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';


const TextoHome = () => {
    const handleDescargar = () => {
        const url = '/Curriculum-2025-C.pdf'; // Ruta al archivo en el directorio public
        window.open(url);
      };
    

  
    return (
        <motion.div
        className='box p-5 mr-0 2xl:mr-80 xl:mr-52 lg:mr-0 md:mr-10 '
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
            <div className="flex flex-col gap-5 items-center  text-center text-xl md:text-3xl  text-white ">
                <Image
                src="/IMG_20241023_172352.jpg"
                alt="Mi imagen"
                width={100}
                className='rounded-full w-auto h-auto'
                height={0}
                
                priority={true}
                />
                {/* <p>Ofrezco una combinación única de habilidades frescas y una pasión innata por el desarrollo web. Mi enfoque va más allá de las líneas de código, aspira a transformar ideas en experiencias digitales impactantes. Con un compromiso inquebrantable y una mentalidad de aprendizaje continuo, estoy listo para aportar creatividad y soluciones tecnológicas de vanguardia a su equipo. Descubra cómo mi formación y dedicación pueden impulsar la innovación en su proyecto.</p> */}
                <p>En la programación, finalmente encontré una plataforma creativa que se alinea con mis habilidades, despertando en mí una inmensa curiosidad por seguir avanzando y descubrir hasta dónde puede llevarme este camino. <br />
                Conoce más sobre mí.</p>
                <button onClick={ handleDescargar } className="p-5 bg-red-900 rounded-xl hover:bg-red-800 transition-all w-3/4 xl:w-1/2">Descargar CV</button>
            </div>
        </motion.div>
    )
}

export default TextoHome