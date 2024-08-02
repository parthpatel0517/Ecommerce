import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    Shoppingfire: [],
    error: null
}


export const ShopbySub = createAsyncThunk(
    'Shoppingfire/ShopbySub',
    async (data) => {
        console.log("kdkkddkkdkd", data);
        const ShoppingData = [];
        await firestore()
            .collection('Product')
            .get()
            .then(querySnapshot => {
                console.log('Total Product: ', querySnapshot.size);

                console.log("cat_id", data.cat_id);
                console.log("subcate_id", data.subcate_id);

                querySnapshot.forEach(documentSnapshot => {
                    if ((documentSnapshot.data().category_id === data.cat_id) && (documentSnapshot.data().Subcategory_id === data.subcate_id)) {
                        ShoppingData.push(documentSnapshot.data())
                    }

                });

            })
        console.log("dkkdkdkdkdkkddkdkddkddkkddkdkdkdkdk", ShoppingData);
        return ShoppingData

    }
)



export const shoppingslice = createSlice({
    name: 'shopping',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(ShopbySub.fulfilled, (state, action) => {
            state.Shoppingfire = action.payload
        })
        
    }
})

export default shoppingslice.reducer