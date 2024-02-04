'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsImages = () => {
    return (
        <div>
            <motion.div 
            className='flex justify-center items-center mt-9  gap-5'
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
            </motion.div>
            <motion.div 
            className='flex justify-center items-center mt-10 gap-5'
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
            </motion.div>
            <motion.div 
            className='flex justify-center items-center mt-10 gap-5'
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
            </motion.div>
        </div>
    )
}

export default ProjectsImages

