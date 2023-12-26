import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import  TabRoutes  from './tab.routes' 

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){

       return(
            <Drawer.Navigator screenOptions={{
                drawerStyle:{
                    borderTopRightRadius:50,
                    borderBottomRightRadius:50,
                },
                drawerActiveBackgroundColor:"#FFF",
                drawerType:'front'
            }}>
                <Drawer.Screen
                    name='inicio'
                    component={TabRoutes}
                    options={{
                        drawerIcon: () => <Ionicons size={40} color={'#EB8806'} name='home-outline'/>,
                        drawerItemStyle:{
                            marginTop:60
                        },
                        drawerLabel: 'Home',
                        drawerLabelStyle:{
                            fontSize:20,
                            fontWeight:'bold',
                            color:"#EB8806"
                        },
                        title:'',
                        headerTransparent:true,
                        headerTintColor:"#FFF",
                    }}
                />
                <Drawer.Screen
                    name='endereco'
                    component={TabRoutes}
                    options={{
                        drawerIcon: () => <Ionicons size={40} color={'#EB8806'} name='map-outline'/>,
                        drawerLabel: 'Meu Endereço',
                        drawerLabelStyle:{
                            fontSize:20,
                            fontWeight:'bold',
                            color:"#EB8806",
                        },
                        title:'',
                        headerTransparent:true,
                        headerTintColor:"#FFF",
                    }}
                />
                <Drawer.Screen
                    name='promocoes'
                    component={TabRoutes}
                    options={{
                        drawerIcon: () => <Ionicons size={40} color={'#EB8806'} name='ribbon-outline'/>,
                        drawerLabel: 'Promoções',
                        drawerLabelStyle:{
                            fontSize:20,
                            fontWeight:'bold',
                            color:"#EB8806",
                        },
                        title:'',
                        headerTransparent:true,
                        headerTintColor:"#FFF",
                    }}
                />
            </Drawer.Navigator>
        )
}

