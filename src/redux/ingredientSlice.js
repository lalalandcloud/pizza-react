import { createSlice } from "@reduxjs/toolkit";
import pizzaData from '../../pizzas.json'

const uniqueIngredients = [ ...new Set(pizzaData.flatMap(pizza => pizza.ingredients))]

const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState : uniqueIngredients,
    reducer: {}
})

export default ingredientSlice.reducer