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
        <div className="d-flex content">
            <div className="contenuA">
                {pizzaData.map((pizzaData) => (
                    <div 
                        key={pizzaData.name} 
                        className="cardLink"
                    >
                        {/* <div className="cardOne"> */}
                        <div className="cardImg">
                            <img src={pizzaData.image} alt="" />
                        </div>
                        <div className="p-2">
                            <h3 className="m-0">{pizzaData.name}</h3>
                            {/* <p>{pizzaData.description}</p> */}
                        </div>
                        <div className="cardEnd">
                            <p className="p-2 m-0">à partir de <span>€{pizzaData.price}</span> </p>
                            <div>
                                <button className="btnAdd" onClick={() => dispatch(addPizza(pizzaData))}>+</button>
                            </div>
                        </div>

                        {/* </div> */}

                    </div>
                ))}
            
            </div>
            <div className="div-cart">
                <Cart />
            </div>
        </div>
        </>
    )
}