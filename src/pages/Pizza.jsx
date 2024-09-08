import React from 'react'
import Header from '../components/Header'
import { useState, useEffect, useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const Pizza = () => {
const {pizza} = useContext(PizzaContext)

  return (
    <>
    <Header 
            title="¡Pizzería Mamma Mía!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!" 
        />
    
    <div>
      <div className="card mb-3 mt-4 mx-4" key={pizza.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={pizza.img} className="img-fluid rounded-start" alt={pizza.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title text-start text-uppercase">{pizza.name}</h2>
                <p className="card-text text-start">{pizza.desc}</p>
                <div className='d-inline d-flex'>
                  <p className="card-text text-start ">Ingredientes:&nbsp;</p>
                  <ul className='ingredientes-lista'>{(pizza.ingredients)?.map((ingredient, index) =>
                  <li key={index}>{(ingredient)}</li>)}
                  </ul>
                </div>
            <h5 className='text-start'>Precio: ${((pizza.price)?.toLocaleString("de"))}</h5>
            </div>
            </div>
            </div>
            </div>
    </div>
  </>
  )
}

export default Pizza
