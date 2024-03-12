import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart (state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                // If the item already exists, increase its quantity
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it to the cart
                state.items.push({...newItem, quantity: 1});
            }
        },
        removeFromCart (state, action) {}
    },
    extraReducers: builder => {}
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer