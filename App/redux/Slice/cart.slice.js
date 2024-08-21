import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}


const cartSlice  =  createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action) => {


            const index =state.cart.findIndex((v) => v.pid === action.payload);
            console.log('akaskakakaka',index);
            if(index === -1){
                state.cart.push({pid : action.payload , qty : 1})
            } else{
                state.cart[index].qty++ 
            }
        }
    }
})


export const {addtocart} = cartSlice.actions
export default cartSlice.reducer