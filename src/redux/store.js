import { configureStore } from '@reduxjs/toolkit'
import panierReducer from './panierSlice'

const store = configureStore({
    reducer: {
        panier: panierReducer
    }
});

export default store;