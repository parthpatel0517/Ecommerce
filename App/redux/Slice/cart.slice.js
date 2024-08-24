import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';


const initialState = {
    isLoading: false,
    cart: [],
    error: null
}
export const addtoCart = createAsyncThunk(
    'cart/carttSlice',
    async (data) => {
        console.log("datadatadatadatadata", data);

        const userDoc = await firestore().collection('Cart').doc(data.uid);
        const userData = await userDoc.get();

        if (userData.exists) {
            try {
                await userDoc.update(
                    {
                        cart: firebase.firestore.FieldValue.arrayUnion({
                            pid: data.id,
                            qty: 1
                        })
                    }
                )
            } catch (error) {
                console.log("erroreeroroeerrorroer", error);
            }

        } else {
            await firestore()
                .collection('Cart')
                .doc(data.uid)
                .set({
                    cart: [{
                        pid: data.id,
                        qty: 1
                    }]
                })
        }


    }

)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addtocart:(state,action) => {
        //     const index =state.cart.findIndex((v) => v.pid === action.payload);
        //     console.log('akaskakakaka',index);
        //     if(index === -1){
        //         state.cart.push({pid : action.payload , qty : 1})
        //     }else{
        //         state.cart[index].qty++ ;
        //     }
        // },
        // IncQty : (state,action) => {
        //     const index =state.cart.findIndex((v) => v.pid === action.payload);
        //     state.cart[index].qty++  ;

        // },
        // DecQty : (state,action) => {
        //     const index =state.cart.findIndex((v) => v.pid === action.payload);
        //     if(state.cart[index].qty > 1){
        //         state.cart[index].qty--;
        //     }
        // }

    }
})


export const { addtocart, IncQty, DecQty } = cartSlice.actions
export default cartSlice.reducer

