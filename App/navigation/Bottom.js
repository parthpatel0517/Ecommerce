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
        <Tab.Navigator initialRouteName='homepage'>
            <Tab.Screen  name="homepage" component={Homestack} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
            }}/>
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'favourites',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="favorite" color={color} size={size} />
                ),
            }} name="Favorites" component={Favoritestack} />
            <Tab.Screen options={{
                headerShown: true,
                tabBarLabel: 'My Bag',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="shopping-bag" color={color} size={size} />
                ),
            }} name="My_Bag" component={Mybagstack} />
             <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'shopping',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="shopping-cart" color={color} size={size} />
                ),
            }} name="shopping" component={Shoppingstack} />
             <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="account-circle" color={color} size={size} />
                ),
            }} name="Profile" component={Profilestack} />
            
        </Tab.Navigator>
    )
}