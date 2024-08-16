import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

const initialState = {
    isLoading: false,
    favourites: [],
    error: null
}


export const tooglefavourite = createAsyncThunk(
    'favourites/tooglefavourite',
    async (id) => {
        console.log("kdkkddkkdkd", id);
        const favData = [];
        await firestore()
            .collection('Fav')
            .get()
            .then(querySnapshot => {
                console.log('Total Category: ', querySnapshot.size);

                querySnapshot.forEach(documentSnapshot => {
                    favData.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                });

            });

        console.log("actionnnnnn", favData);
        //  return favData

        const alvfav = favData.find((v) => v.pid === id)

        if (alvfav) {
            await firestore()
            .collection('Fav')
            .doc(alvfav.id)
            .delete()
            const fData = favData.filter((v)=> v.pid !== id)
            return fData
            
        } else {
            let favid = '';
            await firestore()
                .collection('Fav')
                .add({
                    pid: id,
                    uid: 1
                })
                .then((doc) => {
                    favid = doc.id
                    console.log("User Added!");
                })
            return favData.concat({
                id:favid,
                pid: id, 
                uid : 1
            });

        }


        // return id
    }
)



export const favouriteSlice = createSlice({
    name: 'shopping',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(tooglefavourite.fulfilled, (state, action) => {
            state.favourites = action.payload
        })

    }
})

export default favouriteSlice.reducer