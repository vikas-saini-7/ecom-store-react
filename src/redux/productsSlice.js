import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./actions/productsActions";


const initialState = {
    products: [],
    loading: false,
    error: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default productsSlice.reducer