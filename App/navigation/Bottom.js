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
  
              if (route.name === 'homepage') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'cards-heart' : 'cards-heart-outline';
              }else if (route.name === 'My_Bag') {
                iconName = focused ? 'shopping' : 'shopping-outline';
              }else if (route.name === 'shopping') {
                iconName = focused ? 'cart' : 'cart-outline';
              }else if (route.name === 'Profile') {
                iconName = focused ? 'account-circle' : 'account-circle-outline';
              }
              // You can return any component that you like here!
              return<MaterialCommunityIcons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen  name="homepage" component={Homestack} options={{
                headerShown: false,
                tabBarLabel: 'Home',
               
            }}/>
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'favourites',
                
            }} name="Favorites" component={Favoritestack} />
            <Tab.Screen options={{
                headerShown: true,
                tabBarLabel: 'My Bag',
               
            }} name="My_Bag" component={Mybagstack} />
             <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'shopping',
                
            }} name="shopping" component={Shoppingstack} />
             <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'Profile',
                
            }} name="Profile" component={Profilestack} />
            
        </Tab.Navigator>
    )
}