'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsImages = () => {
    return (
        <div className='flex md:justify-around md:items-start flex-col md:flex-row items-center md:text-2xl text-xl'>
            <motion.div 
            className='flex flex-col justify-center items-center mt-10 gap-5 md:w-1/3 w-3/4'
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            >
                <a href='https://master--voluble-boba-d82bef.netlify.app/'>
               <Image
                    className='rounded-xl'
                    src="/ventures.png"
                    alt="pagina la botika"
                    width={400}
                    height={400}
                    
                />  
                </a>
                <p>Proyecto Restaurant</p>
                <p className='md:w-3/4 w-fit'>Proyecto desarrollado con React que simula la página de un restaurante. La interfaz se presenta como si el usuario hubiera iniciado sesión con permisos de administrador.</p>
                {/* <a href="https://github.com/AndresEstebanMU/Pagina-Restaurante">Readme</a> */}
            </motion.div>
            
            <motion.div 
            className='flex flex-col justify-center items-center mt-10 gap-5 md:w-1/3 w-3/4'
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            >
              <a href='https://andresestebanmu.github.io/Proyecto3-Grafico/'>
               <Image
                    className='rounded-xl'
                    src="/Pagina-grafico-peliculas.png"
                    alt="pagina la botika"
                    width={400}
                    height={400}
                    
                />  
                </a>
                <p>Gráfico en base a API</p>
                <p className='md:w-3/4 w-fit'> Proyecto de visualización de gráficos de películas y series en emisión, utilizando la API de The Movie Database (TMDb). Las calificaciones de cada obra corresponden al promedio de puntuaciones otorgadas por los espectadores.</p>
            </motion.div>
            <motion.div 
            className='flex flex-col justify-center items-center mt-10  gap-5 md:w-1/3 w-3/4'
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            >
                <a href='https://roaring-tulumba-ba31a3.netlify.app/'>
                <Image
                    className='rounded-xl'
                    src="/botika.png"
                    alt="pagina la botika"
                    width={400}
                    height={400}
                    
                />   
                </a>
                <p>E-Commerce (En Reparación)</p>
                <p className='md:w-3/4 w-fit'>Proyecto de simulación de una tienda online de bebidas de todo tipo. La plataforma ofrece funciones como registro de usuarios, navegación intuitiva por el catálogo de productos, carrito de compras y un proceso de checkout seguro con pasarela de pagos.</p>
            </motion.div>
        </div>
    )
}

export default ProjectsImages

