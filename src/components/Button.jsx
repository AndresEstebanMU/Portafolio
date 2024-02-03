'use client'
import React, { useState } from 'react'

const Button = () => {
    const [count, setCount] = useState(0)

  return (
    <>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </>
  )
}

export default Button