import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


function CardPizza({pizza}) {
  const navigate = useNavigate()
  const {addCart} = useContext(CartContext)
  return (
    <>
    <div className='card my-3 mx-1 px-0 py-0'>
      <img src={pizza.img} alt={pizza.name} className='card-img-top' />
      <div className='card-header'>
        <h5 className='card-title text-uppercase pt-2'>{pizza.name}</h5>
      </div>
      <div className='card-body'>
        <h5>Ingredientes:</h5>
        <ul className='ingredientes-lista'>{(pizza.ingredients).map((ingredient, index) =>
          <li key={index}>{(ingredient)}</li>)}
        </ul>
      </div>
      <div className='card-footer'>
          <h4>Precio: $<span>{((pizza.price).toLocaleString("de"))}</span> </h4>
        <div className='d-flex justify-content-around px-5'>
          <button onClick={() => navigate(`/pizza/${pizza.id}`) }className='btn btn-secondary btn-sm ms-4 me-2'>Ver Más<svg className='eye' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg> </button>
          <button className='btn btn-secondary btn-sm me-4 ms-2' onClick={() => addCart(pizza)}>Añadir<svg className='cart' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></button>
        </div>
        <div>
          <Link to="/cart" className='btn btn-secondary btn-sm mt-3 mb-2'>Ir al carrito</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardPizza
