import { configureStore } from '@reduxjs/toolkit'
import panierReducer from './panierSlice'
import pizzaData from '../../pizzas.json'


const store = configureStore({
    reducer: {
        panier: panierReducer
    }
});

export default store;
