import React, { useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import {PizzasContext} from "../context/PizzasContext";


const Home = ({addCart}) => {
    const {pizzas} = useContext(PizzasContext)

    return (
        <>
        <Header 
            title="¡Pizzería Mamma Mía!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!" 
        />
        <h1 className="mt-4">Pizzas</h1>
        <div className='container mt-3'>
            <div className='row' >
            {pizzas.map((pizza, index)=>(
                <div className='col-md-4' key={index}>
                    <CardPizza key={pizza.id} pizza={pizza} addCart={addCart}/>
                </div>
        ))}
            </div>
        </div>
        </>
    )
}

export default Home