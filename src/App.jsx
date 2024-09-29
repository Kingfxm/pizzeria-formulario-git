import { useContext, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router'
import './App.css'
import './assets/css/style.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { UserContext } from './context/UserContext'

function App() {
  const {logged} = useContext(UserContext)
  return <>

    <Navbar /> 
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/register' element={logged ? <Navigate to='/' /> : <Register />}></Route>
      <Route path='/login' element={logged ? <Navigate to='/' /> : <Login />}></Route>
      <Route path='/profile' element={logged ? <Profile /> : <Navigate to='/login' />}></Route>
      <Route path='/pizza/:id' element={<Pizza />}></Route>
      <Route path='/*' element={<NotFound />}></Route>
    </Routes>
    <Footer />
  </>
  
}

export default App
