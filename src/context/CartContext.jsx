import React from 'react'
import { createContext,useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const checkout = async(e) => {
      e ? e.preventDefault() : ""
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method:"POST",
        headers:{"Content-Type" : "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({cart : cart})
      })
      const data = await response.json()
      localStorage.setItem("cart", JSON.stringify(cart))
      alert("¡Se ha completado la compra!")
    }
    
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

      const [envio,setEnvio] = useState(0)
      const totalitems = cart?.reduce((acc,pizza) => acc + pizza.cant, 0)
      const total = cart?.reduce((acc,pizza) => acc + pizza.price * pizza.cant, 0)
      const totalformat = total?.toLocaleString('de');

  return (
    <CartContext.Provider value = {{cart,addCant,addCart,sustCant,deleteCart,envio,setEnvio,totalitems,total,totalformat,checkout}} >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
