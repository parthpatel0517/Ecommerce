import auth from '@react-native-firebase/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    isLoading: false,
    signup: [],
    login: null,
    error: null
}


export const signupwithemail = createAsyncThunk(
    'signup/signupWithEmail',
    async (data) => {
        console.log("kskskskskskskk", data);
        try {
            await auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(async ({ user }) => {
                    await user.sendEmailVerification()
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }``

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } catch (error) {

        }
    }
)
export const Loginwithemail = createAsyncThunk(
    'login/Loginwithemail',
    async (data) => {
        console.log("kskskskskskskk", data);
        try {
            await auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(async ({ user }) => {
                    await user.sendEmailVerification()
                    console.log('User account created & signed in!');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }``

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } catch (error) {

        }
    }
)


const authSlice = createSlice({
    name: 'signup',
    initialState,
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer