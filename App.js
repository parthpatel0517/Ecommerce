import { View, Text } from 'react-native'
import React, { Component } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Signup from './App/Signup/Signup';
import Login from './App/Login/Login';
import Forgot_pass from './App/Forgot_pass/Forgot_pass';
import HomePage from './App/Home_page/HomePage';
import SubCategories2 from './App/SubCategories2/SubCategories2';
import FavoritesPage from './App/FavoritesPage/FavoritesPage';
import ProductCard from './App/ProductCard/ProductCard';
import AddShipingAddress from './App/AddShipingAddress/AddShipingAddress';
import Counter from './App/counter/Counter';
import { configurestore } from './App/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  const store = configurestore()
  return (
    <Provider store={store}>
    {/* // <View style={{backgroundColor:'#ffffff',height:'100%'}}> */}
    {/* <Signup></Signup> */}
    {/* <Login></Login> */}
    {/* <Forgot_pass></Forgot_pass> */}
    {/* <HomePage></HomePage> */}
    {/* <SubCategories2></SubCategories2> */}
    {/* <FavoritesPage></FavoritesPage> */}
   {/* <ProductCard></ProductCard> */}
   {/* <AddShipingAddress></AddShipingAddress> */}
    <Counter></Counter>
    {/* // </View> */}
    </Provider>
  )
}
