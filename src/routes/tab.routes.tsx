import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Size  from '../pages/size/size';
import Flavors  from '../pages/flavors/flavors'
import Cart  from '../pages/cart/cart';
import StackRoutes from './stack.routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){

    return(
    
        <Tab.Navigator >
            <Tab.Screen 
            name="first"
            component={StackRoutes}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveBackgroundColor:"#EB8806",
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <Ionicons size={size} color={'#FFF'} name='home'/>
                    } 
                    return <Ionicons size={size} color={color} name='home-outline'/>
                }
            }
        }
        />
            <Tab.Screen
            name="tamanho"
            component={Size}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveBackgroundColor:"#006600",
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <Ionicons size={size} color={'#FFF'} name='disc'/>
                    } 
                    return <Ionicons size={size} color={color} name='disc-outline'/>
                }
            }
        }
        />
            <Tab.Screen
            name="sabores"
            component={Flavors}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveBackgroundColor:"#660000",
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <Ionicons size={size} color={'#FFF'} name='pizza'/>
                    } 
                    return <Ionicons size={size} color={color} name='pizza-outline'/>
                }
            }
        }
        />
            <Tab.Screen
            name="carrinho"
            component={Cart}
            options={{
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor:"#EB8806",
                headerShown: false,
                tabBarIcon: ({focused, size, color}) =>{
                    if(focused){
                        return <Ionicons size={size} color={'#FFF'} name='cart'/>
                    } 
                    return <Ionicons size={size} color={color} name='cart-outline'/>
                }
            }
        }
        />       
        </Tab.Navigator>
)
}