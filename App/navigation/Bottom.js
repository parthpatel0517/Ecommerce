import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react'
import Signup from '../container/Signup/Signup';
import SubCategories2 from '../container/SubCategories2/SubCategories2';
import HomePage from '../container/Home_page/HomePage';
import Favorites from '../container/favorites/Favorites';
import { Homestack, favoritestack } from './stacknavigator';


const Tab = createBottomTabNavigator();

export default function Bottom() {
    return (
        <Tab.Navigator initialRouteName='homepage'>
            <Tab.Screen  name="homepage" component={Homestack} options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={"blue"} size={size} />
                ),
            }}/>
            <Tab.Screen options={{
                headerShown: false,
                tabBarLabel: 'favourites',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="favorite" color={"red"} size={size} />
                ),
            }} name="Favorites" component={favoritestack} />
            
        </Tab.Navigator>
    )
}