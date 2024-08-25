import { useState } from 'react'
import { ReactDOM } from 'react'
import { useEffect } from 'react'
import './App.css'
import './assets/css/style.css'
import Home from './components/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Pizza from './components/Pizza'

function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const showHome = () => {
    setShow(false)
  }
  const showCart = () => {
    setShow(true)
  }

  const addCart = (pizza) => {
    const itemCart = cart.find(item => item.id === pizza.id)
  
    if (itemCart) {
      setCart(cart.map(item =>
        item.id === pizza.id ? {...item, cant: item.cant + 1} : item))
    }
    else {
      setCart([...cart, {...pizza, cant: 1}])
    }
  }

  const deleteCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const addCant = (pizza) => {
    setCart(cart.map(item => item.id === pizza.id ? {...item, cant: item.cant + 1} : item))
  }

  const sustCant = (pizza) => {
    if (pizza.cant === 1) {
      deleteCart(pizza.id)
    }
    else {
      setCart(cart.map(item => item.id === pizza.id ? {...item, cant: item.cant - 1} : item))
    }
  }

  return <>

    <Navbar showHome={showHome} showCart={showCart} cart={cart}/> 
    
    {
    show ? (<Home showHome={showHome} addCart={addCart}/>) : (<Cart showCart={showCart} cart={cart} sustCant={sustCant} 
      addCant={addCant} deleteCart={deleteCart}/>)
    }

    {/*<Login />
    <Register /> */}
    <Pizza />
    <Footer /> 
  </>
  
}

export default App
