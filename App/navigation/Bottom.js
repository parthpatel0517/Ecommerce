import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import Signup from '../container/Signup/Signup';
import SubCategories2 from '../container/shhoping/shopping';
import HomePage from '../container/Home_page/HomePage';
import Favorites from '../container/favorites/Favorites';
import { Favoritestack, Homestack, Mybagstack, Profilestack, Shoppingstack, Subcategorystack, shoppingstack, subcategorystack } from './stacknavigator';
import My_Bag from '../container/mybag/My_Bag';
import My_Profile from '../container/myprofile/My_Profile';


const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    <Tab.Navigator initialRouteName='homepage'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'homepageTab') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'FavoritesTab') {
            iconName = focused ? 'cards-heart' : 'cards-heart-outline';
          } else if (route.name === 'My_BagTab') {
            iconName = focused ? 'shopping' : 'shopping-outline';
          } else if (route.name === 'shoppingTab') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen options={{
        headerShown: false,
        tabBarLabel: 'Home',

      }} name="homepageTab" component={Homestack} />

      <Tab.Screen options={{
        headerShown: false,
        tabBarLabel: 'favourites',

      }} name="FavoritesTab" component={Favoritestack} />

      <Tab.Screen options={{
        headerShown: false,
        tabBarLabel: 'My Bag',

      }} name="My_BagTab" component={Mybagstack} />

      <Tab.Screen options={{
        headerShown: false,
        tabBarLabel: 'shopping',

      }} name="shoppingTab" component={Shoppingstack} />

      <Tab.Screen options={{
        headerShown: false,
        tabBarLabel: 'Profile',

      }} name="ProfileTab" component={Profilestack} />


    </Tab.Navigator>
  )
}