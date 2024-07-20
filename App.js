import { View, Text } from 'react-native'
import React, { Component } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Signup from './App/container/Signup/Signup';
import Login from './App/container/Login/Login';
import Forgot_pass from './App/container/Forgot_pass/Forgot_pass';
import HomePage from './App/container/Home_page/HomePage';
import SubCategories2 from './App/container/SubCategories2/SubCategories2';
import FavoritesPage from './App/container/FavoritesPage/FavoritesPage';
import ProductCard from './App/container/ProductCard/ProductCard';
import AddShipingAddress from './App/container/AddShipingAddress/AddShipingAddress';
import Counter from './App/counter/Counter';
import { configurestore } from './App/redux/store';
import { Provider } from 'react-redux';
import Rating from './App/container/rating/Rating';
import Womens_top from './App/container/women\'stop/Womens_top';
import OrderDetails from './App/container/orderdetail/OrderDetails';
import ShippingAddresses from './App/container/shippingadresses/ShippingAddresses';
import Filter from './App/container/filter/Filter';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './App/navigation/Bottom';
import 'react-native-gesture-handler';


export default function App() {
  const store = configurestore()
  return (
    <Provider store={store} >
    <NavigationContainer>
    {/* // <View style={{backgroundColor:'#ffffff',height:'100%'}}> */}
    {/* <Signup></Signup> */}
    {/* <Login></Login> */}
    {/* <Forgot_pass></Forgot_pass> */}
    {/* <HomePage /> */}
    {/* <Rating/> */}
    {/* <Womens_top/> */}
    {/* <OrderDetails/> */}
    {/* <ShippingAddresses/> */}
    {/* <SubCategories2></SubCategories2> */}
    <Bottom></Bottom>
    {/* <FavoritesPage></FavoritesPage> */}
    {/* <FavoritesPage></FavoritesPage> */}
   {/* <ProductCard></ProductCard> */}
   {/* <AddShipingAddress></AddShipingAddress> */}
    {/* <Counter></Counter> */}
    {/* <Filter></Filter> */}
    {/* <OrderDetails/> */}
    {/* // </View> */}
    </NavigationContainer>
    </Provider>
  )
}
// import { View, Text } from 'react-native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();
// import React from 'react'
// import Signup from '../container/Signup/Signup';
// import SubCategories2 from '../container/SubCategories2/SubCategories2';
// import HomePage from '../container/Home_page/HomePage';

// export default function Bottom() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="homepage" component={HomePage} />
//             <Tab.Screen name="SubCategories2" component={SubCategories2} />
//         </Tab.Navigator>
//     )
// }