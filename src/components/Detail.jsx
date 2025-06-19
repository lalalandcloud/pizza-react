import { Link, useParams } from 'react-router-dom'
import './Detail.css'
import pizzaData from '../../pizzas.json'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Cart from './Cart'


export default function Detail(){


    const params = useParams();
    
    const {name} = useParams();

    const [openIngredients, setOpenIngredients] = useState(true)
    const [openAdd, setOpenAdd] = useState(true)
       
    const pizza = pizzaData.find(pizza => pizza.name.toLowerCase() === name?.toLowerCase())
    const ingredients = useSelector(state => state.ingredient)
    const panier = useSelector (state => state.panier)

    const availableIngredients = ingredients.filter(ingredient => 
        !pizza.ingredients?.some(pizzaIngredient => 
            pizzaIngredient.name === ingredient.name
        )
    )

    return(

        <div className='detail-a'>
            <Link 
                to='/'
                className='link-back'
            >
                <p>Retour</p>
            </Link>
           <div className='detail-glo'>
                <div className='detail-img'>
                    <img src={pizza.image} alt="" />
                </div>

                <div className='detail-text'>
                    <div className='detail-text-header'>
                        <h3>{pizza.name}</h3>
                        <h5>{pizza.price}</h5>
                    </div>
                    <p>{pizza.description}</p>


                                    <div className='dropdown'>

                                        <button onClick={() => setOpenIngredients(!openIngredients)}>
                                            Ingrédients
                                        </button>

                                        {openIngredients && pizza &&(
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
                                    <div className='dropdown'>

                                        <button onClick={() => setOpenAdd(!openAdd)}>
                                            Ingrédients à ajouter
                                        </button>

                                        {openAdd && availableIngredients && (
                                            <div className='dropdown-content'>
                                                {availableIngredients.map((ingredient, index) => (
                                                    <div key={index} className='dropdown-item'>
                                                        <span>{ingredient.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        
                                        )}
                                    </div>


                    <div className='detail-ajout'>
                        <button>Ajouter au panier €{pizza.price}</button>
                    </div>

                </div>
                <Cart />
            </div> 
            
        </div>    


    )
}