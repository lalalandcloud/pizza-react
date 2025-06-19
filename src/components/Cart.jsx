import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deletePizza } from '../redux/panierSlice'

export default function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.panier)
    const result = cartItems.reduce((total, currentValue) => total = total + currentValue.price,0);

    return(

        <>
        <div className="cart">
            <h2>Votre panier</h2>
            <p>Quantité : {cartItems.length}</p>
            <div>
                {cartItems.map((item, index) => {
                    return (
                        <div key={index} className="d-flex flex-column">
                            <div className="d-flex gap-2">
                                <p>{item.name} - €{item.price}</p>
                                <div>
                                    <button onClick={() => dispatch(deletePizza(item.name))}>X</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <h4>Total: {result}</h4>
                </div>
            </div>
        </div>
        </>
    )
}