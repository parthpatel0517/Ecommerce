import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';


const initialState = {
    isLoading: false,
    cart: [],
    error: null
}
export const addtoCart = createAsyncThunk(
    'cart/addtoCart',
    async (data) => {
        try {
            const cartData = [];

            const userDoc = firestore().collection('Cart').doc(data.uid);
            await userDoc.get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        cartData.push(documentSnapshot.data())

                    }
                });

            if (cartData.length > 0) {
                const index = cartData[0].cart.findIndex((v) => v.pid === data.id);

                try {
                    if (index !== -1) {
                        try {
                            await userDoc.update(
                                {
                                    cart: firebase.firestore.FieldValue.arrayRemove({
                                        pid: data.id,
                                        qty: cartData[0].cart[index].qty
                                    })
                                }
                            );
                            await userDoc.update(
                                {
                                    cart: firebase.firestore.FieldValue.arrayUnion({
                                        pid: data.id,
                                        qty: cartData[0].cart[index].qty + 1
                                    })
                                }
                            )

                        } catch (error) {
                            console.log("errorerrorerror", error);
                        }
                    } else {
                        await userDoc.update(
                            {
                                cart: firebase.firestore.FieldValue.arrayUnion({
                                    pid: data.id,
                                    qty: 1
                                })
                            }
                        )
                    }
                } catch (error) {
                    console.log("errorerrorerroerrorerrorerrorr", error);
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
        } catch (error) {
            console.log("eororoeoemcnsksmksksacasc", error);
        }
    }
)



export const getcart = createAsyncThunk(
    'cart/getcart',
    async () => {
        try {
            const cartdata = [];
        await firestore()
            .collection('Cart')
            .get()
            .then(querySnapshot => {
                console.log('Total Product: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    cartdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                });

            })
        console.log("dkkdkdkdkdkkddkdkddkddkkddkdkdkdkdk", cartdata);
        return cartdata
        } catch (error) {
            console.log("eoeoeomc nckskss",error);
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
    },
    extraReducers: (builder) => {
        builder.addCase(getcart.fulfilled, (state, action) => {
            console.log("in productttttttttttt", action);
            state.cart = action.payload
        })


    }
})

export const { addtocart, IncQty, DecQty } = cartSlice.actions
export default cartSlice.reducer
