import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("getAllProducts",async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    return result;
})

export const getSingleProduct = createAsyncThunk("getSingleProduct",async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();
    return result;
})