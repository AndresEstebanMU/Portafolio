'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsImages = () => {
    return (
        <div className='flex lg:justify-around lg:items-start flex-col lg:flex-row items-center lg:text-2xl text-xl overflow-hidden gap-10'>
            <motion.div 
            className='flex flex-col justify-center items-center mt-10 gap-5 lg:w-1/4 w-5/6 '
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
            >
                <a 
                className='text-center'
                href='https://master--voluble-boba-d82bef.netlify.app/'>
               <Image
                    className='rounded-xl w-full h-auto '
                    src="/ventures.png"
                    alt="pagina la botika"
                    width={400}
                    height={400}
                    priority={true}
                    
                />  
                
                <p>Proyecto Restaurant</p>
                <p className=' w-fit'>Proyecto desarrollado con React que simula la página de un restaurante. La interfaz se presenta como si el usuario hubiera iniciado sesión con permisos de administrador.</p>
                {/* <a href="https://github.com/AndresEstebanMU/Pagina-Restaurante">Readme</a> */}
                </a>
            </motion.div>
            
            <motion.div 
            className='flex flex-col justify-center items-center mt-10 gap-5 lg:w-1/4 w-5/6 mb-10 '
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
            >
              <a 
              className='text-center'
              href='https://andresestebanmu.github.io/Proyecto3-Grafico/'>
               <Image
                    className='rounded-xl w-full h-auto '
                    src="/Pagina-grafico-peliculas.png"
                    alt="pagina la botika"
                    width={400}
                    height={400}
                    priority={true}
                />  
                
                <p>Gráfico en base a API</p>
                <p className=' w-fit'> Proyecto de visualización de gráficos de películas y series en emisión, utilizando la API de The Movie Database (TMDb). Las calificaciones de cada obra corresponden al promedio de puntuaciones otorgadas por los espectadores.</p>
                </a>
            </motion.div>
            <motion.div 
            className='flex flex-col justify-center items-center mt-10  gap-5 lg:w-1/4 w-5/6 mb-10'
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
            >
                <a 
                className='text-center'
                href='https://roaring-tulumba-ba31a3.netlify.app/'>
                    <Image
                        className='rounded-xl w-full h-auto '
                        src="/botika.png"
                        alt="pagina la botika"
                        width={400}
                        height={400}
                        priority={true}
                    />   
                    
                    <p>E-Commerce</p>
                    <p className='w-fit'>Proyecto de simulación de una tienda online de bebidas de todo tipo. La plataforma ofrece funciones como registro de usuarios, navegación intuitiva por el catálogo de productos, carrito de compras y un proceso de checkout seguro con pasarela de pagos.</p>
                </a>
            </motion.div>
        </div>
    )
}

export default ProjectsImages

