import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";

const Home = ({showHome, addCart}) => {
    
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