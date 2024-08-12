import React from 'react'
import { useState } from 'react'



const Register = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmar, setConfirmar] = useState('')

const validar = () => {
    if (!email || !password || !confirmar){
        alert("Debe llenar todos los campos")
    }
    else if (password.length < 6){
        alert("La contraseña debe tener al menos 6 carácteres")
    }
    else if (password !== confirmar) {
        alert("Las contraseñas no coinciden")
    }
    else alert("¡Registro exitoso!")
}


  return (
    <div className='pb-5 pt-5 text-start'>
        <form onSubmit={validar}>
            <h2><svg className="formicons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l362.8 0c-5.4-9.4-8.6-20.3-8.6-32l0-128c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7l-91.4 0zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z"/></svg>Registrate</h2>
            <p>Email</p>
            <input className='inputs form-control' type="email" placeholder='Ingrese su Email'
            onChange={(e)=>setEmail(e.target.value)} />
            <p>Contraseña</p>
            <input className='inputs form-control' type="password" placeholder='Ingrese su contraseña'
            onChange={(e)=>setPassword(e.target.value)}/>
            <p>Confirmar contraseña</p>
            <input className='inputs form-control' type="password" placeholder='Confirmar contraseña'
            onChange={(e)=>setConfirmar(e.target.value)} />
            <br />
            <button type='submit' className='btn btn-primary'>Register</button>
        </form>
    </div>
  )
}

export default Register
