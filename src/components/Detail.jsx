import { Link, useParams } from 'react-router-dom'
import './Detail.css'
import pizzaData from '../../pizzas.json'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export default function Detail(){


    const params = useParams();
    console.log('All params: ', params);
    
    const {name} = useParams();
    
    // console.log('name from params:', name);
    // console.log('pizzaData:', pizzaData);

    const [open, setOpen] = useState(false)
    const pizza = pizzaData.find(pizza => pizza.name.toLowerCase() === name?.toLowerCase())
    const ingredients = useSelector(state => state.ingredient)
    const panier = useSelector (state => state.panier)

    console.log('pizza: ', pizza);
    console.log('pizza.ingredients: ', pizza.ingredients);
    
    

    return(

        <div className='detailA'>
            <Link 
                to='/'
                className='linkBack'
            >
                <p>Retour</p>
            </Link>
                <div className='dropdown'>

                    <button onClick={() => setOpen(!open)}>
                        Ingrédients
                    </button>

                    {open && pizza &&(
                        <div className='dropdown-content'>
                            {pizza.ingredients?.map((ingredient, index) => (

                                <div key={index} className='dropdown-item'>
                                    <span>{ingredient.icon}</span>
                                    <span>{ingredient.name}</span>
                                </div>
                            ))}
                        </div>
                    
                    )}
                </div>

        </div>    


    )
}