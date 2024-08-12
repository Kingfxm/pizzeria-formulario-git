import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
    const pizzas = [
        {img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c", name:"Napolitana", ingredients:["mozzarella", "tomates", "jamón", "orégano"], price:5950},
        {img:"https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab", name:"Española", ingredients:["mozzarella", "gorgonzola", "parmesano", "provolone"], price:6950},
        {img:"https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3", name:"Pepperoni", ingredients:["mozzarella", "pepperoni", "orégano"], price: 6950}
        ]

    return (
        <>
        <Header
            title="¡Pizzería Mamma Mía!"
            descripcion="¡Tenemos las mejores pizzas que podrás encontrar!" 
        />
        
        <div className='container mt-3'>
            <div className='row'>
            {pizzas.map((pizza,index)=>(
                <div className='col-md-4' key={index}>
                    <CardPizza {...pizza}/>
                </div>
        ))}
        </div>
      </div>
        </>
    )
}

export default Home