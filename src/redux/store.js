import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import favoriteReducer from "./FavoriteSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        favorites: favoriteReducer
    }
})