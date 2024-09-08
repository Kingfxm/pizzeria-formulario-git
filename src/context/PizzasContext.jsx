import React from 'react'
import { createContext, useEffect, useState } from 'react'

export const PizzasContext = createContext()

const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])
    const getData = async() => {
        const response = await fetch("http://localhost:5000/api/pizzas")
        const data = await response.json()
        setPizzas(data)
    }

    useEffect(()=>{
        getData()
    },[])


  return (
    <PizzasContext.Provider value = {{pizzas}} >
        {children}
    </PizzasContext.Provider>
  )
}

export default PizzasProvider
