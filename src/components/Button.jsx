'use client'
// import React, { useState } from 'react'

// const Button = () => {
//     const [count, setCount] = useState(0)

//   return (
//     <>
//         <p>Contador: {count}</p>
//         <button onClick={() => setCount(count + 1)}>Aumentar</button>
//     </>
//   )
// }

// export default Button


const Descargar = () => {
  const handleDescargar = () => {
    const url = '/CURRICULUM-VITAE-ANDRÉS.odt'; // Ruta al archivo en el directorio public
    window.open(url);
  };

  return (
    <div>
      
      <button onClick={handleDescargar}>Descargar CV</button>
    </div>
  );
};

export default Descargar;