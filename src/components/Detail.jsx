import { Link, useParams } from 'react-router-dom'
import './Detail.css'
import pizzaData from '../../pizzas.json'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Cart from './Cart'
import { addPizza } from '../redux/panierSlice'


export default function Detail(){


    const dispatch = useDispatch()

    const params = useParams();
    const {name} = useParams();

    const [open, setOpen] = useState(true)
       
    const pizza = pizzaData.find(pizza => pizza.name.toLowerCase() === name?.toLowerCase())
    const ingredients = useSelector(state => state.ingredient)
    const panier = useSelector (state => state.panier)

    const [counts, setCounts] = useState([]);
    useEffect(() => {
        setCounts(pizza?.ingredients ? Array(pizza.ingredients.length).fill(1) : []);
    }, [pizza]);




    const handleAddToCart = () => {
        dispatch(addPizza({
                name: pizza.name,
                price: pizza.price,
                counts: counts,
                ingredient: pizza.ingredients
            
        }))
    }




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
                    <img src={pizza.imageBis} alt="" />
                </div>

                <div className='detail-text'>
                    <div className='detail-text-header'>
                        <h3>{pizza.name}</h3>
                        <h5>€{pizza.price}</h5>
                    </div>
                    <p>{pizza.description}</p>


                    <div className='dropdown'>

                        <button onClick={() => setOpen(!open)} className='btn-dropdown'>
                            Ingrédients
                        </button>

                        {open && pizza &&(
                            <div className='dropdown-content'>
                                {pizza.ingredients?.map((ingredient, index) => (

                                    <div key={index} className='dropdown-item'>
                                        <div className='dropdown-detail'>
                                            <img className='detail-icon' src={`/assets/img/ingredients_decoupes/${ingredient.icon}.png`} alt="" />
                                            <span>{ingredient.name}</span>
                                        </div>
                                        <div className='detail-count'>
                                            <button
                                                className='detail-btn' 
                                                onClick={() => {
                                                    const newCounts = [...counts];
                                                    newCounts[index] = Math.max(0, newCounts[index] -1);
                                                    setCounts(newCounts)
                                                }}
                                                disabled={counts[index] === 0}
                                            >-</button>
                                            <span>{counts[index]}</span>
                                            <button
                                                className='detail-btn'
                                                onClick={() => {
                                                    const newCounts = [...counts];
                                                    newCounts[index] = Math.min(5, newCounts[index] + 1);
                                                    setCounts(newCounts);
                                                }}
                                                disabled ={counts[index]===1}>+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        
                        )}
                    </div>
                    <div>
                        <button className='detail-ajout' onClick={handleAddToCart}>Ajouter au panier €{pizza.price}</button>
                    </div>

                </div>
                <Cart />
            </div> 
            
        </div>    


    )
}