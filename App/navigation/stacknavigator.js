import HomePage from "../container/Home_page/HomePage"
import ProductCard from "../container/ProductCard/ProductCard"
import Favorites from "../container/favorites/Favorites"
import { createStackNavigator } from '@react-navigation/stack';
import My_Bag from "../container/mybag/My_Bag";
import My_Profile from "../container/myorders/My_Orders";
import My_Orders from "../container/myprofile/My_Profile";
import OrderDetails from "../container/orderdetail/OrderDetails";
import SubCategories2 from "../container/SubCategories2/SubCategories2";

const Stack = createStackNavigator();

export const Favoritestack = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen options={{headerShown: true}} name="Favorites" component={Favorites} />
        <Stack.Screen options={{headerShown: false}} name="ProductCard" component={ProductCard} />
        <Stack.Screen options={{headerShown: false}} name="My_Bag" component={My_Bag} />
      </Stack.Navigator>
    )
}

export const Homestack = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen 
        options={{headerShown: false}}
         name="HomePage" component={HomePage}
          />
        <Stack.Screen options={{headerShown: false}} name="ProductCard" component={ProductCard} />
      </Stack.Navigator>
    )
}

export const Profilestack = () => {
  return(
      <Stack.Navigator>
      <Stack.Screen 
      options={{headerShown: false}}
       name="My_Orders" component={My_Orders}
        />
      <Stack.Screen options={{headerShown: false}} name="My_Profile" component={My_Profile} />
      <Stack.Screen options={{headerShown: false}} name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  )
}
export const Subcategorystack = () => {
  return(
      <Stack.Navigator>
      <Stack.Screen 
      options={{headerShown: false}}
       name="SubCategories2" component={SubCategories2}
        />
      <Stack.Screen options={{headerShown: false}} name="ProductCard" component={ProductCard} />
    </Stack.Navigator>
  )
}
export const Mybagstack = () => {
  return(
      <Stack.Navigator>
      <Stack.Screen 
      options={{headerShown: false}}
       name="MyBag" component={My_Bag}
        />
      <Stack.Screen options={{headerShown: false}} name="ProductCard" component={ProductCard} />
    </Stack.Navigator>
  )
}
