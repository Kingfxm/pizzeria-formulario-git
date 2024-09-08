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
  {/* const [show, setShow] = useState(true)

  const showHome = () => {
    setShow(false)
  }
  const showCart = () => {
    setShow(true)
  } */}

  return <>

    <Navbar /> 
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<Cart2 />}></Route>
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
