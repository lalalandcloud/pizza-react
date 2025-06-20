import { configureStore } from '@reduxjs/toolkit'
import panierReducer from './panierSlice'
import pizzaData from '../../pizzas.json'
import ingredientReducer from './ingredientSlice'


const store = configureStore({
    reducer: {
        panier: panierReducer,
        ingredient : ingredientReducer
    }
});

export default store;
