import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/home/home';
import Flavors from '../pages/flavors/flavors';
import Size from '../pages/size/size';
import Cart from '../pages/cart/cart';
import Historico from '../components/screens/historico';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return (
    <Stack.Navigator screenOptions={{
      animation:'slide_from_left',
    }} >
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
      <Stack.Screen 
      name="Cart" 
      component={Cart}
      options={{
        headerShown: false,
        headerTitle:""
      }} />
      <Stack.Screen 
      name="historic" 
      component={Historico}
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
  )
}
