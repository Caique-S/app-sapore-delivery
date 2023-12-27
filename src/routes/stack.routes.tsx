import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/home/home';
import Flavors from '../pages/flavors/flavors';
import Size from '../pages/size/size';
import Cart from '../pages/cart/cart';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}/>
      <Stack.Screen 
      name="Flavors" 
      component={Flavors}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen name="Size" component={Size} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}
