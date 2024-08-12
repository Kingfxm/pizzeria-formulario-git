import { useState } from 'react'
import { ReactDOM } from 'react'
import './App.css'
import './assets/css/style.css'
import Home from './components/Home'
import CardPizza from './components/CardPizza'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return <>
    <Navbar /> 
    <Login />
    <Register />
    {/* <Home /> */}
    <Footer /> 
  </>
  
}

export default App
