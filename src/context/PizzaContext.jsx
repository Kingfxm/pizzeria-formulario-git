import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export const PizzaContext = createContext()

const PizzaProvider = ({children}) => {
  const {id} = useParams()
  const [pizza, setPizza] = useState([])
    const getData = async() => {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizza.id}`)
        const data = await response.json()
        setPizza(data)
    }

    useEffect(()=>{
        getData()
    },[])


  return (
    <PizzaContext.Provider value = {{pizza}} >
        {children}
    </PizzaContext.Provider>
  )
}

export default PizzaProvider