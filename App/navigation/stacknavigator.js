import HomePage from "../container/Home_page/HomePage"
import ProductCard from "../container/ProductCard/ProductCard"
import Favorites from "../container/favorites/Favorites"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const favoritestack = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="ProductCard" component={ProductCard} />
      </Stack.Navigator>
    )
}

export const Homestack = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ProductCard" component={ProductCard} />
      </Stack.Navigator>
    )
}

