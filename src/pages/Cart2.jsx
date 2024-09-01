import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Cart2 = ({cart, sustCant, addCant, deleteCart}) => {
const [envio,setEnvio] = useState(0)
const totalitems = cart?.reduce((acc,pizza) => acc + pizza.cant, 0)
const total = cart?.reduce((acc,pizza) => acc + pizza.price * pizza.cant, 0)

  return (
    <>
    <Header 
            title="¡Pizzería Mamma Mía!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!" 
        />

    <div>
      <section className="h-100 h-custom">
        <div className="container py-4 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0"><svg className='cartpage' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>Carrito</h1>
                          <h6 className="mb-0 text-muted">{totalitems} Items</h6>
                        </div>
                        <hr className="my-4"></hr>

                        {cart.length === 0 ? (<p>No hay pizzas en el carrito</p>) : (cart.map((pizza) => 
                        <>
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={pizza.img}
                              className="img-fluid rounded-3" alt="Cotton T-shirt"></img>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="fs-5 text-muted">{pizza.name}</h6>
                            
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <button onClick={()=>sustCant(pizza)} className="btn btn-secondary btn-sm me-1 d-inline pt-2 "
                              >-
                            </button>

                            <p className="form-control form-control-sm py-2 d-inline" >{pizza.cant}</p>
        
                            <button onClick={()=>addCant(pizza)} className="btn btn-secondary btn-sm ms-1 d-inline pt-2"
                              >+
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">$ {((pizza.price * pizza.cant).toLocaleString('de'))}</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button onClick={()=>deleteCart(pizza.id)} className='btn btn-danger btn-sm pt-2'><svg className='trashcan' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg></button>
                          </div>
                        </div>
        
                        <hr className="my-4"></hr>
                        </>
                        ))}
        
                        <div className="pt-5">
                            <Link to="/" className='btn btn-secondary btn-lg mb-4'>Volver a la página principal</Link>

                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-body-tertiary">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                        <hr className="my-4"></hr>
        
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">{totalitems} items</h5>
                          <h5>$ {total.toLocaleString("de")}</h5>
                        </div>
        
                        <h5 className="text-uppercase mb-3">Delivery</h5>
        
                        <div className="mb-4 pb-2">
                          <select id='delivery' onChange={(e)=>setEnvio(+e.target.value)} data-mdb-select-init className='form-select'>
                            <option value='0'>Recoger en tienda - $0</option>
                            <option value="2000">Delivery estándar - $2.000</option>
                            <option value="6000">Delivery rápido - $6.000</option>
                          </select>
                        </div>
        
                        <h5 className="text-uppercase mb-3">Código de descuento</h5>
        
                        <div className="mb-5">
                          <div data-mdb-input-init className="form-outline">
                            <input id='codeinput' type="text" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor='codeinput' >Ingresa tu código</label>
                          </div>
                        </div>
        
                        <hr className="my-4"></hr>
        
                        <div className="d-flex-inline justify-content-between mb-5">
                          <h5 className="text-uppercase">Precio total</h5>
                          <h5>$ {((total+envio)).toLocaleString("de")}</h5>
                        </div>
        
                        <button  type="button" className="btn btn-secondary btn-block btn-lg">Ir a pagar</button>
        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>

    </>
  )
}

export default Cart2
