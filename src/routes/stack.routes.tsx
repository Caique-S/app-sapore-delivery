import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Pizzas from '../components/screens/pizzas';



const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      name="Pizzas" 
      component={Pizzas} />
    </Stack.Navigator>
  </NavigationContainer>

}
