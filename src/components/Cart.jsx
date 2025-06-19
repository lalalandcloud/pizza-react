import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deletePizza } from '../redux/panierSlice'

export default function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.panier)
    const result = cartItems.reduce((total, currentValue) => total = total + currentValue.price, 0);

    return(

        <>
  
        <div className="cart d-flex flex-column justify-content-between gap-2">
            {/* Recap panier */}
            <div className="panier d-flex flex-column justify-content-between">
                <div className="cart-bis p-2">
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
                        <div className="d-flex justify-content-between p-3">
                            <h5 className="p-0 m-0">Total</h5>
                            <h5 className="p-0 m-0">€{result.toFixed(2)}</h5>
                        </div>
                </div>


            </div>

            {/* Bouton Commander */}
            <div>
                <button disabled={cartItems.length === 0} className="w-100 commander d-flex justify-content-between px-3 py-2">
                    <div className="quantite">
                        <div className="quantite-2">
                        <p className="p-0 m-0">{cartItems.length}</p>
                        </div>
                    </div>
                    <div className="btn-commander">
                        <p className="p-0 m-0">Commander</p>
                    </div>
                    <div className="money">
                        <p className="p-0 m-0">€{result.toFixed(2)}</p>
                    </div>

                </button>
            </div>


        </div>
    </>
    )
}