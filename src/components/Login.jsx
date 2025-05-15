/* 'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

const Login = () => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const router = useRouter()

    const handelSubmit = (e) => {
        e.preventDefault();

        if (user === 'hola' && pass === 'hola123') {
            router.push('/about')
            // nos redirige a la ruta que le mencionemos
        }
    }

  return (
    <div>
        <form className="bg-gray-500 p-10 flex flex-column gap-5 text-black" onSubmit={handelSubmit}>
            <input placeholder="user" value={user} onChange={(e) => setUser(e.target.value)} />
            <input placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            <button type="submit">enviar</button>
        </form>
    </div>
  )
}

export default Login */