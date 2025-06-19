import { createSlice } from '@reduxjs/toolkit'

const panierSlice = createSlice({
    name: 'panier',
    initialState: [],
    reducers: {
        addPizza: (state, action) => {
            state.push(action.payload)
        },
        deletePizza: (state, action) => {
            const index = state.findIndex(item => item.name === action.payload)
            if (index >= 0) {
                state.splice(index, 1)
            }
        }
    }
})

export default panierSlice.reducer;
export const { addPizza, deletePizza } = panierSlice.actions;