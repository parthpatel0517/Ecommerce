import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Signup from './App/Signup/Signup';
import Login from './App/Login/Login';
import Forgot_pass from './App/Forgot_pass/Forgot_pass';
import HomePage from './App/Home_page/HomePage';

export default function App() {
  return (
    <View style={{backgroundColor:'#ffffff' , height:900}}>
    {/* <Signup></Signup> */}
    {/* <Login></Login> */}
    {/* <Forgot_pass></Forgot_pass> */}
    <HomePage></HomePage>
    
    </View>
  )
}
