import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        panier: panierReducer
    }
});

export default store;