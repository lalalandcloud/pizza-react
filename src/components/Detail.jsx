import { Link, useParams } from 'react-router-dom'
import './Detail.css'
import pizzaData from '../../pizzas.json'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export default function Detail(){

    const [open, setOpen] = useState(false)
    const {name} = useParams()
    const pizza = pizzaData.find(pizza => pizza.name === name)
    const ingredients = useSelector(state => state.ingredients)

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

                    {open &&(
                        <div className='dropdown-content'>
                            {ingredients && ingredients.map((ingredient) => (

                                <div key={ingredient} className='dropdown-item'>
                                    {ingredient}
                                </div>
                            ))}
                        </div>
                    
                    )}
                </div>

        </div>    


    )
}