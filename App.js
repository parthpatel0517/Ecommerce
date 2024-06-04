import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Signup from './App/Signup/Signup';
import Login from './App/Login/Login';
import Forgot_pass from './App/Forgot_pass/Forgot_pass';
import HomePage from './App/Home_page/HomePage';
import SubCategories2 from './App/SubCategories2/SubCategories2';

export default function App() {
  return (
    <View style={{backgroundColor:'#ffffff',height:'100%'}}>
    {/* <Signup></Signup> */}
    {/* <Login></Login> */}
    {/* <Forgot_pass></Forgot_pass> */}
    {/* <HomePage></HomePage> */}
    <SubCategories2></SubCategories2>
    
    </View>
  )
}
