import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';


const initialState = {
    isLoading: false,
    cart: [],
    error: null
}


export const  addshhipadress =  () => {
    'cart/addshhipadress',
    async () => {
        
    }
}
 



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
    }
})