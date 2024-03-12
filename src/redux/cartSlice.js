import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart (state, action) {},
        removeFromCart (state, action) {}
    },
    extraReducers: builder => {}
})

export default cartSlice.reducer