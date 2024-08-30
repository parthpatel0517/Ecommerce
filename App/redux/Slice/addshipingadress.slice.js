import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import firestore, { firebase } from '@react-native-firebase/firestore';


const initialState = {
    isLoading: false,
    adsshipadrress: [],
    error: null
}


export const addshhipadress = createAsyncThunk(
    'adsshipadrress/addshhipadress',
    async (data) => {
    try {
        const AddShippingData = []

        const userRefrence = await firestore().collection('AddShippingAddress').doc(data.uid);
        const userDoc = await userRefrence.get();

        console.log("userDocuserDoc",userDoc.exists);

        if(userDoc.exists){
           await userRefrence.update(
               {
                   addrress: firebase.firestore.FieldValue.arrayUnion(
                      data
                   )
               }
           );
           console.log("dkskalallaalallalalaal");
        } else{
           await userRefrence.set({
            addrress:[data]
           })
           console.log("pqppqpqppqpqpqpqpqqp");
        }
        return AddShippingData
    } catch (error) {
        console.log("erorroorororor",error);
    }
        
    }

);

export const getaddshipadreess = createAsyncThunk(
    'adsshipadrress/getaddshipadreess',
    async () => {


        try {
            const getaddshipdata = [];
            await firestore()
                .collection('AddShhipingadrress')
                .get()
                .then(querySnapshot => {

                    querySnapshot.forEach(documentSnapshot => {

                        getaddshipdata.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                    });
                });

            return getaddshipdata;

        } catch (error) {
            console.log(error);
        }
    },
)


const addshipadrressSlice = createSlice({
    name: 'adsshipadrress',
    initialState,
    extraReducers: (builder) => {
        builder
        builder.addCase(addshhipadress.fulfilled, (state, action) => {
            state.adsshipadrress = action.payload
        })
    }
})

export default addshipadrressSlice.reducer