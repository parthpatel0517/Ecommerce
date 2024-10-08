import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    order: [],
    error: null
}

export const orderdata = createAsyncThunk(
    'order/orderdata',
    async (data) => {
        console.log("datadatadatadatadata",data);
        try {
            // const AddShippingData = []

            const userRefrence = await firestore().collection('OrderData').doc(data.uid);
            const userDoc = await userRefrence.get();

            console.log("userDocuserDoc", userDoc.exists);

            try {
                if (userDoc.exists) {
                    await userRefrence.update(
                        {
                            order: firebase.firestore.FieldValue.arrayUnion(
                                data.address,
                            )
                        }
                    );
                } else {
                    await userRefrence.set({
                        order: [data.address]
                    })
                }

                const getorderdata = [];
                await firestore()
                    .collection('OrderData')
                    .doc(data.uid)
                    .get()
                    .then(documentSnapshot => {
                        if (documentSnapshot.exists) {
                            getorderdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })

                        }
                    });

                return getorderdata;
            } catch (error) {
                console.log("Eroroooaoaooeeeo", error);
            }

        } catch (error) {
            console.log("erorroorororor", error);
        }
    }
);

export const getorderdata = createAsyncThunk(
    'order/getorderdata',
    async (id) => {
        try {
            const getorderdaata = [];

            try {
                await firestore()
                    .collection('OrderData')
                    .doc(id)
                    .get()
                    .then(documentSnapshot => {
                        if (documentSnapshot.exists) {
                            getorderdaata.push({ id: documentSnapshot.id, ...documentSnapshot.data() })

                        }
                    });
            } catch (error) {
                console.log("eoeoellslslsldsl", error);
            }

            // console.log("getaddshipdatagetaddshipdata", getorderdaata);
            return getorderdaata;

        } catch (error) {
            console.log(error);
        }
    },
)

const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(orderdata.fulfilled, (state, action) => {
            state.adsshipadrress = action.payload
        })
    }
})

export default orderSlice.reducer