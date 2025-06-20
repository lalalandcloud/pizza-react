import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { addPizza, deletePizza, deletePizza2 } from '../redux/panierSlice'
import { useState } from 'react';

export default function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.panier)

    const [coupon, setCoupon] = useState("")

    const result = cartItems.reduce((total, currentValue) => total = total + currentValue.price, 0);

    const discount = coupon === "-10%" ? 0.1 : 0;
    const resultDiscounted = result - result*discount


    // on va réutiliser le pincipe du reduce pour calculer la quantité de pizzas (et grouper les pizzas par nom) :
    const pizzasGroup = cartItems.reduce((newArray, pizza) => 
        {
            // on va checker si la pizza ajoutée existe déjà dans le cart
            const existante = newArray.find(i => i.name === pizza.name)

            if (existante) {
                existante.quantity += 1
            }
            else {
                // on ajoute une nouvelle propriété à l'array copiée (quantity, qui n'existait pas dans le data set original)
                newArray.push({...pizza, quantity: 1})
            }
            return newArray
        // la valeur initiale du reduce : un empty array qu'on va ensuite accumuler. il faut faire en sorte que ce soit un array vide car on va utiliser la méthode find dessus => il faut une array et pas un objet, s'il y n'y avait pas cette précision par défaut react prendrait le premier item de cartItem (un objet) 
        }, [])

    return(

        <>
  
        <div className="cart flex-column justify-content-between gap-3">
            {/* Recap panier */}
            <div className="panier d-flex flex-column justify-content-between">
                <div className="cart-bis py-2">
                {/* Titre */}
                    <h2 className="px-3">Panier d'achat</h2>
                        {/* Items ajoutés au panier */}
                        <div className={`cart-content ${cartItems.length > 0 ? "added" : ""}`}>
                            {pizzasGroup.map((item, index) => {
                                return (
                                    <div key={index} className="d-flex flex-column px-3 py-2 borders">
                                        <div className="d-flex flex-column gap-2">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="pizza-name p-0 m-0"><b>{item.name}</b></p>
                                                <p className="pizza-price p-0 m-0"><b>€{(item.price*item.quantity).toFixed(2)}</b></p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-2">
                                                    <div className="btn-qt" role="button" onClick={() => dispatch(deletePizza(item.name))}>
                                                        <p className="p-0 m-0">ー</p>
                                                    </div>
                                                    <p className="p-0 m-0"><b>{item.quantity}</b></p>
                                                    <div className="btn-qt" role="button" onClick={() => dispatch(addPizza(item))}>
                                                        <p className="p-0 m-0">+</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex btns-change gap-2">
                                                    <button>Modifier</button>
                                                    <button onClick={() => dispatch(deletePizza2(item.name))}>Supprimer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                </div>
                {/* Coupon */}
                <div className="div-coupon">
                    <input className={`${cartItems.length > 0 ? "selection" : ""}`} type="text" placeholder="Entrez votre coupon: -10%"
                    value={coupon}
                    onChange={(e) => {setCoupon(e.target.value)}} />
                </div>

                {/* Total */}
                <div className="total">
                        <div className="d-flex justify-content-between p-3">
                            <h5 className="p-0 m-0">Total</h5>
                            <h5 className="p-0 m-0">€{resultDiscounted.toFixed(2)}</h5>
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
                        <p className="p-0 m-0">€{resultDiscounted.toFixed(2)}</p>
                    </div>

                </button>
            </div>


        </div>
    </>
    )
}