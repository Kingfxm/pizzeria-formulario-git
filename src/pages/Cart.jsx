import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = ({cart, deleteCart, addCant, sustCant}) => {
  return (
    <>
    <Header 
            title="¡Pizzería Mamma Mía!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!" 
        />
    <div>
      <h1 className='pt-3 pb-4 mt-3'>Carrito</h1>
      {cart.length === 0 ? (<p>No hay pizzas en el carrito</p>) : (cart.map((pizza) => 
      <div>
        <div className="card mb-3" key={pizza.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title text-start">{pizza.name}</h2>
                <p className="card-text text-start">{pizza.desc}</p>
              <div className='d-inline d-flex'>
                <p className="card-text text-start ">Ingredientes:&nbsp;</p>
                <ul className='ingredientes-lista'>{(pizza.ingredients).map((ingredient, index) =>
                <li key={index}>{(ingredient)}</li>)}
                </ul>
              </div>
              <div className='text-start d-inline d-flex mt-2'>
                  <h5 className='pe-4'>Cantidad: <span>{pizza.cant}</span></h5>
                  <h5 className='pe-4'>Total: $ {((pizza.price * pizza.cant).toLocaleString('de'))}</h5>
                  <button className='btn btn-primary ps-3 pe-3 me-3' onClick={() => sustCant(pizza)}>-</button>
                  <button className='btn btn-primary ps-3 pe-3 me-3' onClick={() => addCant(pizza)}>+</button>
                  <button className='btn btn-danger' onClick={() => deleteCart(pizza.id)}>Eliminar</button>
              </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        ))}
          <h2 className='text-end' style={{display:cart.length === 0 ? "none" : ""}}>Total a pagar: ${((cart.reduce((acc,pizza) => acc + pizza.price * pizza.cant, 0))).toLocaleString('de')}
          <Link to="/cart" className='btn btn-primary btn-lg ms-4 mb-1'>Ir a Pagar</Link></h2>
          <Link to="/" className='btn btn-dark btn-lg mb-4'>Volver a la página principal</Link>
    </div>
  </>
  )
}

export default Cart
