import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favItems: [],
}

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers:{
        addToFavorites(state, action){
            const id = action.payload.id;
            const existingItem = state.favItems.find((item) => item.id === id);
            if(existingItem){
                alert('already liked');
                return
            }
            state.favItems.push(action.payload);
        },
        removeFromFavorites(state, action){
            const id = action.payload.id;
            state.favItems = state.favItems.filter((item) => item.id !== id);
        }
    }
})

export const {addToFavorites, removeFromFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer