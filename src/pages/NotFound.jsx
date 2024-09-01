import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className='notfound'>
    </div>
        <Link to="/" className='btn btn-warning btn-lg notfoundlink'>Volver a la página principal</Link>
    </>
  )
}

export default NotFound
