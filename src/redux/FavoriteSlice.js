import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],

}

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers:{
        addToFavorites(state, action){
            const id = action.payload.id;
            const existingItem = state.items.find((item) => item.id === id);
            if(existingItem){
                alert('already liked');
                return
            }
            state.items.push(action.payload);
        },
        removeFromFavorites(state, action){}
    }
})

export const {addToFavorites, removeFromFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer