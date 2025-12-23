'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import ventures from '../assets/ventures.webp'
import novaMarket from '../assets/Novamarket.webp'
import botika from '../assets/botika.webp'
/* import { TbComponentsOff } from 'react-icons/tb'; */

const ProjectsImages = () => {

    return (
        <div className='flex lg:justify-around lg:items-start flex-col lg:flex-row items-center lg:text-2xl text-xl  gap-10 pb-28'>
            <motion.div
                className='flex flex-col justify-center items-center mt-10 lg:w-1/4 w-5/6  '
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} style={{ transformStyle: 'preserve-3d' }}
            >
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-center'
                    href='https://nova-market-rose.vercel.app/'>
                    <Image
                        className='rounded-xl w-full h-auto '
                        src={novaMarket}
                        alt="Gráficos"
                        width={400}
                        height={400}
                        priority={true}
                    />

                    <p>E-commerce con Nextjs</p>
                    <p > NovaMarket es una plataforma de comercio electrónico desarrollada como proyecto. Simula un marketplace real donde los usuarios pueden registrarse, comprar productos y acceder a un panel de vendedor para gestionar y publicar sus propios artículos.
                    <br />
                    El proyecto destaca por el uso de Inngest para el manejo de eventos en segundo plano y Clerk para una autenticación robusta y segura.<br />

                    Funcionalidades Clave<br />
                    Experiencia de Compra: Catálogo de productos, carrito de compras funcional y checkout.<br />
                    Autenticación Segura: Gestión de usuarios completa (Login, Registro, Perfil) potenciada por Clerk.<br />
                    Panel de Vendedor: Área dedicada donde los usuarios con rol de vendedor pueden crear, editar y eliminar sus productos.<br />
                    Eventos Asíncronos: Integración con Inngest para manejar procesos en background de forma eficiente.<br />
                    Diseño Responsivo: Interfaz moderna y adaptable a móviles construida con Tailwind CSS.</p>
                </a>
            </motion.div>

            <motion.div
                className='flex flex-col justify-center items-center mt-10  lg:w-1/4 w-5/6 '
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} style={{ transformStyle: 'preserve-3d' }}
            >
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-center'
                    href='https://master--voluble-boba-d82bef.netlify.app/'>
                    <Image
                        className='rounded-xl w-full h-auto '
                        src={ventures}
                        alt="restaurante"
                        width={400}
                        height={400}
                        priority={true}

                    />

                    <p>Proyecto Restaurant</p>
                    <p >Proyecto desarrollado con React que simula la página de un restaurante. La interfaz se presenta como si el usuario hubiera iniciado sesión con permisos de administrador.<br />
                        Creada con React, Nodejs y la API guarda y trae información desde Firebase
                    </p>
                    {/* <a href="https://github.com/AndresEstebanMU/Pagina-Restaurante">Readme</a> */}
                </a>
            </motion.div>

            <motion.div
                className='flex flex-col justify-center items-center mt-10   lg:w-1/4 w-5/6 '
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} style={{ transformStyle: 'preserve-3d' }}
            >
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-center '
                    href='https://roaring-tulumba-ba31a3.netlify.app/'>
                    <Image
                        className='rounded-xl w-full h-auto '
                        src={botika}
                        alt="pagina la botika"
                        width={400}
                        height={400}
                        priority={true}
                    />

                    <p>E-Commerce</p>
                    <p >Proyecto de simulación de una tienda online de bebidas de todo tipo. La plataforma ofrece funciones como registro de usuarios, navegación intuitiva por el catálogo de productos, carrito de compras y un proceso de checkout seguro con pasarela de pagos.<br />
                    El frontend de la aplicación fue creado con React y su backend funciona con Nodejs, Express y MongoDB</p>
                </a>
            </motion.div>
        </div>
    )
}

export default ProjectsImages