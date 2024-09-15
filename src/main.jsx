import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import PizzasProvider from './context/PizzasContext.jsx'
import PizzaProvider from './context/PizzaContext.jsx'
import CartProvider from './context/CartContext.jsx'
import UserProvider from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzasProvider>
    <CartProvider>
    {/* <PizzaProvider> */}
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
    {/* </PizzaProvider> */}
    </CartProvider>
    </PizzasProvider>
  </React.StrictMode>,
)
