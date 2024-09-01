import { useState } from 'react'
import { ReactDOM } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import './assets/css/style.css'
import Home from './pages/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Cart2 from './pages/Cart2'

function App() {
  const [cart, setCart] = useState([])
  {/* const [show, setShow] = useState(true)

  const showHome = () => {
    setShow(false)
  }
  const showCart = () => {
    setShow(true)
  } */}

  const addCart = (pizza) => {
    const itemCart = cart?.find(item => item.id === pizza.id)
  
    if (itemCart) {
      setCart(cart?.map(item =>
        item.id === pizza.id ? {...item, cant: item.cant + 1} : item))
    }
    else {
      setCart([...cart, {...pizza, cant: 1}])
    }
  }

  const deleteCart = (id) => {
    setCart(cart?.filter(item => item.id !== id))
  }

  const addCant = (pizza) => {
    setCart(cart?.map(item => item.id === pizza.id ? {...item, cant: item.cant + 1} : item))
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

    <Navbar /*showHome={showHome} showCart={showCart} */cart={cart} /> 
    <Routes>
      <Route path='/' element={<Home cart={cart} addCart={addCart} />}></Route>
      <Route path='/cart' element={<Cart2 cart={cart} sustCant={sustCant} addCant={addCant} deleteCart={deleteCart}/>}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/pizza/p001' element={<Pizza />}></Route>
      <Route path='/*' element={<NotFound />}></Route>
    </Routes>
    
    {/* {
    show ? (<Home showHome={showHome} addCart={addCart}/>) : (<Cart showCart={showCart} cart={cart} sustCant={sustCant} 
      addCant={addCant} deleteCart={deleteCart}/>)
    }

    <Login />
    <Register /> 
    <Pizza /> */}
    <Footer />
  </>
  
}

export default App
