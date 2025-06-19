import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deletePizza } from '../redux/panierSlice'

export default function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.panier)

    return(

        <>
        <div className="cart">
            <h2>Votre panier</h2>
            <p>Quantité : {cartItems.length}</p>
            <div>
                {cartItems.map((item, index) => (
                <div key={index} className="d-flex">
                    <p>{item.name} - €{item.price}</p>
                    <button onClick={() => dispatch(deletePizza(item.name))}>X</button>
                </div>
                ))}
            </div>
        </div>
        </>
    )
}