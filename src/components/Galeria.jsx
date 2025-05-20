'use client'
import { IoLogoHtml5, IoLogoCss3, IoLogoGithub, IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt, FaReact, FaJsSquare } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiVite, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion';

const Galeria = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

  return (
    <div className="ml-0  2xl:ml-80 xl:ml-52 lg:ml-0 md:ml-10 overflow-hidden ">
        <motion.div
         
         variants={container}
         initial="hidden"
         animate="visible"
        className="flex md:flex-row flex-col text-5xl md:text-6xl container border-2 border-gray-900  rounded-xl ">
            <div className="flex flex-row md:flex-col">
                <motion.div className="text-orange-500 item m-1 md:m-5" variants={item}><IoLogoHtml5 /></motion.div>
                <motion.div className="text-blue-300 item m-1 md:m-5" variants={item}><IoLogoCss3 /></motion.div>
                <motion.div className="text-orange-500 item m-1 md:m-5" variants={item}><FaGitAlt /></motion.div>
                <motion.div className="text-white  item m-1 md:m-5" variants={item}><IoLogoGithub /></motion.div>
                <motion.div className="text-yellow-400 item m-1 md:m-5" variants={item}><IoLogoJavascript /></motion.div>
                <motion.div className="text-green-500 item m-1 md:m-5" variants={item}><DiNodejs /></motion.div>
            </div>
            <div className="flex flex-row md:flex-col">
                
                <motion.div className="text-blue-200 item m-1 md:m-5" variants={item}><FaReact /></motion.div>
                <motion.div className="text-yellow-500 item m-1 md:m-5" variants={item}><SiVite /></motion.div>
                <motion.div className="text-white item m-1 md:m-5" variants={item}><SiNextdotjs /></motion.div>
                <motion.div className="text-blue-200  item m-1 md:m-5" variants={item}><SiTailwindcss /></motion.div>
                <motion.div className="text-xs flex items-end item m-1 md:m-5" variants={item}>Express <FaJsSquare className="text-yellow-400" /></motion.div>
                <motion.div className="text-green-500 item m-1 md:m-5" variants={item}><SiMongodb /></motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Galeria