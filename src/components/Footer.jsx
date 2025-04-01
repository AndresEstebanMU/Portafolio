import React from 'react'
import { Grenze_Gotisch } from 'next/font/google';

const footerFont = Grenze_Gotisch({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className='border-gray-900 border-t-2 p-1 md:p-3 text-center bg-black text-white fixed bottom-0 w-full text-2xl font-semibold'  >
        <p className={footerFont.className}>andresestebanmu@gmail.com</p>
    </div>
  )
}

export default Footer