import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    Productfire: [],
    error: null
}


export const ProBySub = createAsyncThunk(
    'Productfire/ProBySub',
    async (data) => {
        console.log("kdkkddkkdkd",data);
            const ProdctData = [];
            await firestore()
                .collection('Product')
                .get()
                .then(querySnapshot => {
                    console.log('Total Product: ', querySnapshot.size);

                    console.log("cat_id", data.cat_id);
                    console.log("subcate_id", data.subcate_id);

                    querySnapshot.forEach(documentSnapshot => {
                        if((documentSnapshot.data().category_id=== data.cat_id) && (documentSnapshot.data().Subcategory_id === data.subcate_id)){
                            ProdctData.push(documentSnapshot.data())
                        } 
                    
                    });

                })
                console.log("dkkdkdkdkdkkddkdkddkddkkddkdkdkdkdk",ProdctData);
            return ProdctData

    }
)

export const productslice = createSlice({
    name: 'product',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(ProBySub.fulfilled, (state, action) => {
            state.Productfire =  action.payload
          })
    }
})

export default productslice.reducer