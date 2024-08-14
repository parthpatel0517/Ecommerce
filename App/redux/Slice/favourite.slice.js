import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    favourites: [],
    error: null
}


export const googlefavourite = createAsyncThunk(
    'favourites/googlefavourite',
    async (id) => {
        console.log("kdkkddkkdkd", id);
        return id
    }
)



export const favouriteSlice = createSlice({
    name: 'shopping',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(googlefavourite.fulfilled, (state, action) => {
            state.favourites = action.payload
        })
        
    }
})

export default favouriteSlice.reducer