import { Link } from "react-router"
import pizzaData from '../../pizzas.json'
import './contenu.css'


export default function Contenu () {
    const {id} = useParams()


    return(

        <div className="contenuA">
            <div className="contenuTitle">
                <h3>Pizzas</h3>
            </div>
            {pizzaData.map((pizzaData) => (
                
                <Link to={`/detail/${pizzaData.name}`}>
                
                    
                    <div 
                        key={pizzaData.name} 
                        className="cardLink"
                    >
                        {/* <div className="cardOne"> */}
                        <div className="cardImg">
                            <img src={pizzaData.image} alt="" />
                        </div>
                        <div>
                            <h3>{pizzaData.name}</h3>
                            <p>{pizzaData.description}</p>
                        </div>
                        <div className="cardEnd">
                            <p>à partir de <span>€{pizzaData.price}</span> </p>
                            <button className="btnAdd">+</button>
                        </div>

                        {/* </div> */}

                    </div>
                
                </Link>
            ))}
        
        </div>
    )
}