import { Link } from "react-router"
import pizzaData from '../../pizzas.json'


export default function Contenu () {

    return(

        <>
            {pizzaData.map((pizzaData) => (
                <div 
                    key={pizzaData.name} 
                    className="cardLink"
                >
                    <div className="cardOne">
                        <div className="cardImg">
                            <img src={pizzaData.image} alt="" />
                        </div>

                    </div>

                </div>
            ))}
        
        </>
    )
}