import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getSingleProduct } from "./actions/productsActions";


const initialState = {
    products: [],
    singleProduct: {},
    loading: false,
    error: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        // all products 
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
        // single product
        builder.addCase(getSingleProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload;
        })
        builder.addCase(getSingleProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default productsSlice.reducer