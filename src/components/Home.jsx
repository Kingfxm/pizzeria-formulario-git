import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { useState, useEffect } from "react";
// import { pizzas } from "../data/pizzas";

const Home = ({showHome, addCart}) => {
    const [pizzas, setPizzas] = useState([])
    const getData = async() => {
        const respuesta = await fetch("http://localhost:5000/api/pizzas")
        const data = await respuesta.json()
        setPizzas(data)
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <>
        <Header 
            title="¡Pizzería Mamma Mía!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!" 
        />
        
        <div className='container mt-3'>
            <div className='row' >
            {pizzas.map((pizza, index)=>(
                <div className='col-md-4' key={index}>
                    <CardPizza key={pizza.id} showHome={showHome} pizza={pizza} addCart={addCart}/>
                </div>
        ))}
            </div>
        </div>
        </>
    )
}

export default Home