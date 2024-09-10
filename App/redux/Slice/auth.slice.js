import auth from '@react-native-firebase/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const initialState = {
    isLoading: false,
    auth: null,
    error: null
}


export const signupwithemail = createAsyncThunk(
    'auth/signupWithEmail',
    async (data) => {
        console.log("kskskskskskskk", data);
        try {
            await auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(async ({ user }) => {
                    await user.sendEmailVerification()
                    console.log('User account created & signed in!');


                    await firestore()
                        .collection('Users')
                        .doc(user.uid)
                        .set({
                            name: data.name,
                            email: data.email,
                            emailVerification: false
                        })
                        .then(() => {
                            console.log('User added!');
                        });
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

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
    'auth/Loginwithemail',
    async (data) => {
        console.log("kskskskskskskk", data);

        try {
            let UserData = {}
            await auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then(async ({ user }) => {
                    if (user.emailVerified) {
                        await firestore()
                            .collection('Users')
                            .doc(user.uid)
                            .update({
                                emailVerification: true
                            })
                            .then(async () => {
                                console.log('User updated!');
                                const user1 = await firestore().collection('Users').doc(user.uid).get();

                                UserData = user1.data();
                            });
                        console.log('User account Login!');
                    } else {
                        console.log('User account login Failed!');
                    }


                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
            return UserData
        } catch (error) {
            console.log("errrrrkkrkrkkrk", error);
        }


    }
)

export const SignOut = createAsyncThunk(
    'auth/signOut',
    async () => {
        try {
            await auth()
                .signOut()
                .then(() => console.log('User signed out!'));
            await AsyncStorage.clear()
            return null
        } catch (error) {
            console.log("oepepepepepepeppepep", error);
        }
    }

)


export const googleLogin = createAsyncThunk(
    'auth/googleLogin',
    async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const userInfo = await GoogleSignin.signIn()
            console.log("sosossoosos",userInfo);

            
            const { idToken } = await GoogleSignin.getTokens();
            console.log("sdsssdsddsdssssddsdssds",idToken);
            // Create a Google credential with the token
            const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            const  x = await auth().signInWithCredential(googleCredential);
            return x
        } catch (error) {
            console.log("errorrrrrr",error);
        }
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(signupwithemail.fulfilled, (state, action) => {
            state.auth = action.payload
        })
        builder.addCase(Loginwithemail.fulfilled, (state, action) => {
            // console.log("actionsskskskskskskskksksksk",action.payload);
            state.auth = action.payload
        })
        builder.addCase(SignOut.fulfilled, (state, action) => {
            // console.log("actionsskskskskskskskksksksk", action.payload);
            state.auth = action.payload
        })
        builder.addCase(googleLogin.fulfilled, (state, action) => {
            console.log("actionsskskskskskskskksksksk", action.payload);
            state.auth = action.payload
        })
    }
})

export default authSlice.reducer