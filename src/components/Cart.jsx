import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deletePizza } from '../redux/panierSlice'

export default function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.panier)
    const result = cartItems.reduce((total, currentValue) => total = total + currentValue.price, 0);

    return(

        <>
  
        <div className="cart d-flex flex-column justify-content-between">
            {/* Recap panier */}
            <div className="panier d-flex flex-column justify-content-between border border-3">
                <div className="h-100 border cart-bis">
                {/* Titre */}
                    <h2>Panier d'achat</h2>
                        {/* Items ajoutés au panier */}
                        <div className="cart-content">
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
                        </div>
                </div>
                {/* Total */}
                <div className="total">
                        <h4>Total: € {result}</h4>
                </div>


            </div>

            {/* Bouton Commander */}
            <div>
                <button disabled className="w-100 commander d-flex justify-content-evenly">
                    <div>
                        <p className="p-0 m-0">{cartItems.length}</p>
                    </div>
                    <div>
                        <p className="p-0 m-0">Commander</p>
                    </div>
                    <div>
                        <p className="p-0 m-0">€ {result}</p>
                    </div>

                </button>
            </div>


        </div>
    </>
    )
}