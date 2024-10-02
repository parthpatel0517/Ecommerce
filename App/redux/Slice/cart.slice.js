// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import firestore, { firebase } from '@react-native-firebase/firestore';

// const initialState = {
//     isLoading: false,
//     cart: [],
//     error: null
// }
// export const addtoCart = createAsyncThunk(
//     'cart/addtoCart',
//     async (data) => {
//         try {
//             console.log("11111");
//             let cartData = [];

//             const userDoc = firestore().collection('Cart').doc(data.uid);
//             await userDoc.get()
//                 .then(documentSnapshot => {
//                     if (documentSnapshot.exists) {
//                         cartData.push(documentSnapshot.data())

//                     }
//                 });

//             console.log("222222", cartData);

//             if (cartData[0]?.cart?.length > 0) {

//                 const index = cartData[0].cart.findIndex((v) => v.pid === data.id);
//                 console.log("33333", index, cartData);
//                 try {
//                     if (index !== -1) {
//                         try {
//                             await userDoc.update(
//                                 {
//                                     cart: firebase.firestore.FieldValue.arrayRemove({
//                                         pid: data.id,
//                                         qty: cartData[0].cart[index].qty
//                                     })
//                                 }
//                             );
//                             await userDoc.update(
//                                 {
//                                     cart: firebase.firestore.FieldValue.arrayUnion({
//                                         pid: data.id,
//                                         qty: cartData[0].cart[index].qty + 1
//                                     })
//                                 }
//                             )

//                         } catch (error) {
//                             console.log("errorerrorerror", error);
//                         }
//                     } else {
//                         await userDoc.update(
//                             {
//                                 cart: firebase.firestore.FieldValue.arrayUnion({
//                                     pid: data.id,
//                                     qty: 1
//                                 })
//                             }
//                         )
//                     }
//                     cartData = [];

//                     const userDoc = firestore().collection('Cart').doc(data.uid);
//                     await userDoc.get()
//                         .then(documentSnapshot => {
//                             if (documentSnapshot.exists) {
//                                 cartData.push(documentSnapshot.data())

//                             }
//                         });

//                     return cartData
//                 } catch (error) {
//                     console.log("errorerrorerroerrorerrorerrorr", error);
//                 }

//                 return cartData
//             } else {
//                 await firestore()
//                     .collection('Cart')
//                     .doc(data.uid)
//                     .set({
//                         cart: [{
//                             pid: data.id,
//                             qty: 1
//                         }]
//                     })

//                 console.log("555555555", [{
//                     pid: data.id,
//                     qty: 1
//                 }]);
//                 return [{
//                     id: data.uid,
//                     cart: [{
//                         pid: data.id,
//                         qty: 1
//                     }]
//                 }]
//             }


//             // cartData = [];

//             //         await userDoc.get()
//             //             .then(documentSnapshot => {
//             //                 if (documentSnapshot.exists) {
//             //                     cartData.push(...documentSnapshot.data())

//             //                 }
//             //             });

//             //             console.log("444444",  cartData);
//             // return cartData

//         } catch (error) {
//             console.log("eororoeoemcnsksmksksacasc", error);
//         }
//     }
// )

// export const getcart = createAsyncThunk(
//     'cart/getcart',
//     async (id) => {
//         console.log("kskskkskskskskskksk", id);
//         try {
//             const cartdata = [];
//             await firestore()
//                 .collection('Cart')
//                 .doc(id)
//                 .get()
//                 .then(documentSnapshot => {
//                     console.log('User exists: ', documentSnapshot.exists);

//                     if (documentSnapshot.exists) {
//                         console.log('User data: ', documentSnapshot.id, documentSnapshot.data());

//                         cartdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
//                     }
//                 });
//             console.log("dkkdkdkdkdkkddkdkddkddkkddkdkdkdkdk", cartdata);
//             return cartdata
//         } catch (error) {
//             console.log("eoeoeomc nckskss", error);
//         }


//     }
// )

// export const incrementQty = createAsyncThunk(
//     'cart/incrementQty',
//     async (data, { getState }) => {
//         const { cart } = getState();
//         const cartData = [];

//         // console.log("cartcartcartcart", cart.cart[0].cart);

//         const index = cart?.cart[0]?.cart.findIndex((v) => v.pid === data.id);

//         console.log("indexindexindexindexindexindex", index);

//         const userDoc = firestore().collection('Cart').doc(data.uid);

//         try {
//             await userDoc.update(
//                 {
//                     cart: firebase.firestore.FieldValue.arrayRemove({
//                         pid: data.id,
//                         qty: cart?.cart[0]?.cart[index].qty
//                     })
//                 }
//             );
//             await userDoc.update(
//                 {
//                     cart: firebase.firestore.FieldValue.arrayUnion({
//                         pid: data.id,
//                         qty: cart?.cart[0]?.cart[index].qty + 1
//                     })
//                 }
//             )

//         } catch (error) {
//             console.log("errorerrorerror", error);
//         }
//         await userDoc.get()
//             .then(documentSnapshot => {
//                 if (documentSnapshot.exists) {
//                     cartData.push(documentSnapshot.data())

//                 }
//             });

//         return cartData;

//     }
// )

// export const decrementQty = createAsyncThunk(
//     'cart/decrementQty',
//     async (data, { getState }) => {
//         const { cart } = getState();
//         const cartData = [];

//         // console.log("cartcartcartcart", cart.cart[0].cart);

//         const index = cart?.cart[0]?.cart.findIndex((v) => v.pid === data.id);

//         console.log("indexindexindexindexindexindex", index);

//         const userDoc = firestore().collection('Cart').doc(data.uid);

//         try {
//             await userDoc.update(
//                 {
//                     cart: firebase.firestore.FieldValue.arrayRemove({
//                         pid: data.id,
//                         qty: cart?.cart[0]?.cart[index].qty
//                     })
//                 }
//             );
//             await userDoc.update(
//                 {
//                     cart: firebase.firestore.FieldValue.arrayUnion({
//                         pid: data.id,
//                         qty: cart?.cart[0]?.cart[index].qty - 1
//                     })
//                 }
//             )

//         } catch (error) {
//             console.log("errorerrorerror", error);
//         }
//         await userDoc.get()
//             .then(documentSnapshot => {
//                 if (documentSnapshot.exists) {
//                     cartData.push(documentSnapshot.data())

//                 }
//             });

//         return cartData;

//     }
// )

// export const deletedata = createAsyncThunk(
//     'cart/deletedata',
//     async (data, { getState }) => {
//         const { cart } = getState();

//         const userDoc = firestore().collection('Cart').doc(data.uid);

//         const index = cart?.cart[0]?.cart.findIndex((v) => v.pid === data.id);


//         try {
//             await userDoc.update(
//                 {
//                     cart: firebase.firestore.FieldValue.arrayRemove({
//                         pid: data.id,
//                         qty: cart?.cart[0]?.cart[index].qty
//                     })
//                 }
//             );
//             let cartData = [];
//             await userDoc.get()
//                 .then(documentSnapshot => {
//                     if (documentSnapshot.exists) {
//                         console.log("opopopopopopopo", documentSnapshot.data());
//                         if (documentSnapshot.data()?.cart?.length > 0) {
//                             cartData.push(documentSnapshot.data())
//                         } else {
//                             cartData = []
//                         }


//                     }
//                 });

//             console.log("sdasdasdasdas", cartData);

//             return cartData;
//         } catch (error) {
//             console.log("errorerrorerror", error);
//         }




//     }
// )

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     // reducers: {
//     //     // addtocart:(state,action) => {
//     //     //     const index =state.cart.findIndex((v) => v.pid === action.payload);
//     //     //     console.log('akaskakakaka',index);
//     //     //     if(index === -1){
//     //     //         state.cart.push({pid : action.payload , qty : 1})
//     //     //     }else{
//     //     //         state.cart[index].qty++ ;
//     //     //     }
//     //     // },
//     //     // IncQty : (state,action) => {
//     //     //     const index =state.cart.findIndex((v) => v.pid === action.payload);
//     //     //     state.cart[index].qty++  ;

//     //     // },
//     //     // DecQty : (state,action) => {
//     //     //     const index =state.cart.findIndex((v) => v.pid === action.payload);
//     //     //     if(state.cart[index].qty > 1){
//     //     //         state.cart[index].qty--;
//     //     //     }
//     //     // }
//     // },
//     extraReducers: (builder) => {
//         builder.addCase(getcart.fulfilled, (state, action) => {
//             // console.log("in productttttttttttt", action);
//             state.cart = action.payload
//         })
//         builder.addCase(incrementQty.fulfilled, (state, action) => {
//             // console.log("in productttttttttttt", action);
//             state.cart = action.payload
//         })
//         builder.addCase(decrementQty.fulfilled, (state, action) => {
//             // console.log("in productttttttttttt", action);
//             state.cart = action.payload
//         })
//         builder.addCase(deletedata.fulfilled, (state, action) => {
//             // console.log("in productttttttttttt", action);
//             state.cart = action.payload
//         })
//         builder.addCase(addtoCart.fulfilled, (state, action) => {
//             console.log(" in producttttttttttttwwwwww", JSON.stringify(action.payload));
//             state.cart = action.payload
//         })



//     }
// })

// // export const { addtocart, IncQty, DecQty } = cartSlice.actions
// export default cartSlice.reducer


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
            const userDoc = firestore().collection('Cart').doc(data.uid);

            // Fetch existing cart data from Firestore
            let cartData = [];
            await userDoc.get().then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    cartData.push(documentSnapshot.data());
                }
            });

            if (cartData.length > 0 && cartData[0].cart) {
                const index = cartData[0].cart.findIndex((v) => v.pid === data.id);

                if (index !== -1) {
                    try {
                        await userDoc.update({
                            cart: firebase.firestore.FieldValue.arrayRemove({
                                pid: data.id,
                                qty: cartData[0].cart[index].qty
                            })
                        });

                        await userDoc.update({
                            cart: firebase.firestore.FieldValue.arrayUnion({
                                pid: data.id,
                                qty: cartData[0].cart[index].qty + 1
                            })
                        });
                    } catch (error) {
                        console.log("Error updating cart: ", error);
                    }
                } else {
                    await userDoc.update({
                        cart: firebase.firestore.FieldValue.arrayUnion({
                            pid: data.id,
                            qty: 1
                        })
                    });
                }
            } else {

                await userDoc.set({
                    cart: [{
                        pid: data.id,
                        qty: 1
                    }]
                });
            }


            cartData = [];
            await userDoc.get().then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    cartData.push(documentSnapshot.data());
                }
            });

            return cartData;
        } catch (error) {
            console.log("Error in addtoCart: ", error);
        }
    }
);

export const getcart = createAsyncThunk(
    'cart/getcart',
    async (id) => {
        try {
            const cartdata = [];
            await firestore()
                .collection('Cart')
                .doc(id)
                .get()
                .then(documentSnapshot => {
                    console.log('User exists: ', documentSnapshot.exists);

                    if (documentSnapshot.exists) {
                        console.log('User data: ', documentSnapshot.data());

                        cartdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                    }
                });
            console.log("dkkdkdkdkdkkddkdkddkddkkddkdkdkdkdk", cartdata);
            return cartdata
        } catch (error) {
            console.log("eoeoeomc nckskss", error);
        }
    }
)

export const incrementQty = createAsyncThunk(
    'cart/incrementQty',
    async (data, { getState }) => {
        const { cart } = getState();
        const cartData = [];

        // console.log("cartcartcartcart", cart.cart[0].cart);

        const index = cart?.cart[0]?.cart.findIndex((v) => v.pid === data.id);

        console.log("indexindexindexindexindexindex", index);

        const userDoc = firestore().collection('Cart').doc(data.uid);

        try {
            await userDoc.update(
                {
                    cart: firebase.firestore.FieldValue.arrayRemove({
                        pid: data.id,
                        qty: cart?.cart[0]?.cart[index].qty
                    })
                }
            );
            await userDoc.update(
                {
                    cart: firebase.firestore.FieldValue.arrayUnion({
                        pid: data.id,
                        qty: cart?.cart[0]?.cart[index].qty + 1
                    })
                }
            )

        } catch (error) {
            console.log("errorerrorerror", error);
        }
        await userDoc.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    cartData.push(documentSnapshot.data())

                }
            });

        return cartData;

    }
)

export const decrementQty = createAsyncThunk(
    'cart/decrementQty',
    async (data, { getState }) => {
        const { cart } = getState();
        const cartData = [];

        // console.log("cartcartcartcart", cart.cart[0].cart);

        const index = cart?.cart[0]?.cart.findIndex((v) => v.pid === data.id);

        console.log("indexindexindexindexindexindex", index);

        const userDoc = firestore().collection('Cart').doc(data.uid);

        try {
            await userDoc.update(
                {
                    cart: firebase.firestore.FieldValue.arrayRemove({
                        pid: data.id,
                        qty: cart?.cart[0]?.cart[index].qty
                    })
                }
            );
            await userDoc.update(
                {
                    cart: firebase.firestore.FieldValue.arrayUnion({
                        pid: data.id,
                        qty: cart?.cart[0]?.cart[index].qty - 1
                    })
                }
            )

        } catch (error) {
            console.log("errorerrorerror", error);
        }
        await userDoc.get()
            .then(documentSnapshot => {
                if (documentSnapshot.exists) {
                    cartData.push(documentSnapshot.data())

                }
            });

        return cartData;

    }
)

export const deletedata = createAsyncThunk(
    'cart/deletedata',
    async (data, { getState }) => {
        const { cart } = getState();

        const userDoc = firestore().collection('Cart').doc(data.uid);

        const index = cart?.cart[0]?.cart.findIndex((v) => v.pid === data.id);


        try {
            await userDoc.update(
                {
                    cart: firebase.firestore.FieldValue.arrayRemove({
                        pid: data.id,
                        qty: cart?.cart[0]?.cart[index].qty
                    })
                }
            );
            const cartData = [];
            await userDoc.get()
                .then(documentSnapshot => {
                    if (documentSnapshot.exists) {
                        cartData.push(documentSnapshot.data())

                    }
                });

            return cartData;
        } catch (error) {
            console.log("errorerrorerror", error);
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
        builder.addCase(addtoCart.fulfilled, (state, action) => {
            // console.log("in productttttttttttt", action);
            state.cart = action.payload
        })
        builder.addCase(getcart.fulfilled, (state, action) => {
            // console.log("in productttttttttttt", action);
            state.cart = action.payload
        })
        builder.addCase(incrementQty.fulfilled, (state, action) => {
            // console.log("in productttttttttttt", action);
            state.cart = action.payload
        })
        builder.addCase(decrementQty.fulfilled, (state, action) => {
            // console.log("in productttttttttttt", action);
            state.cart = action.payload
        })
        builder.addCase(deletedata.fulfilled, (state, action) => {
            // console.log("in productttttttttttt", action);
            state.cart = action.payload
        })
    }
})

export const { addtocart, IncQty, DecQty } = cartSlice.actions
export default cartSlice.reducer