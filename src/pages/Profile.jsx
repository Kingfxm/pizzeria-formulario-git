import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'

const Profile = () => {
  const {user, logout} = useContext(UserContext)
  return (
    <>
    <Header 
            title="¡Pizzería Mamma Mía!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!" 
        />
    <div className='mt-4 text-start container '>
      <div className='justify-content-center row'>
        <div className='col-10'>

        <h2><svg className='profileicon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>Mi Perfil</h2>
        <p>Email: {user}</p>
        <Link to="/login" onClick={()=>logout()} type='button' className='btn btn-primary mb-5 btn-lg'>Cerrar sesión</Link>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Profile
