'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsImages = () => {
    return (
        <div className='flex justify-around items-center @md:flex-col'>
            <motion.div 
            className='flex flex-col justify-center items-center mt-10 gap-5'
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
            </motion.div>
            <motion.div 
            className='flex flex-col justify-center items-center mt-10 gap-5'
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
            </motion.div>
            <motion.div 
            className='flex flex-col justify-center items-center mt-9  gap-5'
            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            >
                <a href='https://roaring-tulumba-ba31a3.netlify.app/'>
                <Image
                    className='rounded-xl'
                    src="/botika.png"
                    alt="pagina la botika"
                    width={410}
                    height={410}
                    
                />   
                </a>
                <p>E-Commerce (En Reparación)</p>
            </motion.div>
        </div>
    )
}

export default ProjectsImages

