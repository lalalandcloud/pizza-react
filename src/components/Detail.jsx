import { Link } from 'react-router-dom'
import './Detail.css'
import pizzaData from '../../pizzas.json'

export default function Detail(){

    const pizza = pizzaData.find(pizza => pizza.name === name)

    return(

        <div className='detailA'>
            <Link 
                to='/'
                className='linkBack'
            >
                <p>Retour</p>
            </Link>

            {pizza &&

                <div>
                    <img src={pizza.image} alt="" />
                </div>
                <div>
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>

                    
                </div>
            
            
            }
        </div>    


    )
}