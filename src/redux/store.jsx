import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import productsReducer from './productSlice'
import favReducer from './FavSlice'

const store = configureStore({
    reducer:{
        cart: cartSlice,
        products: productsReducer,
        favorites: favReducer
    }
})

export default store;

