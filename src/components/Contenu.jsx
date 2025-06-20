import { Link } from "react-router-dom"
import pizzaData from '../../pizzas.json'
import './contenu.css'
import Cart from "./Cart"
import { useDispatch } from 'react-redux'
import { addPizza } from '../redux/panierSlice'


export default function Contenu () {
    // test :
    const dispatch = useDispatch()

    return(
        <>
        <div className="d-flex">
        <div className="contenuA">
            <div className="contenuTitle">
                <h3>Pizzas</h3>
            </div>
            {pizzaData.map((pizzaData) => (
                
                <Link 
                    to={`/pizza/${pizzaData.name}`}
                    key={pizzaData.name} 
                    className="cardLink"
                >     

                    <div className="cardImg">
                        <img src={pizzaData.image} alt="" />
                    </div>
                    <div>
                        <h3>{pizzaData.name}</h3>
                        <p>{pizzaData.description}</p>
                    </div>
                    <div className="cardEnd">
                        <p>à partir de <span>€{pizzaData.price}</span> </p>
                        <button className="btnAdd" onClick={() => dispatch(addPizza(pizzaData))}>+</button>
                        {/* <button className="btnAdd">+</button> */}
                    </div>

                </Link>

            ))}
        
        </div>
        <Cart />
        </div>
        </>
    )
}