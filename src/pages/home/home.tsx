import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import  { styles }  from '../../components/styles/styles'
import { Ionicons } from '@expo/vector-icons'
import { Card } from '../../components/cards/home_cards/cards';


export default function Home() {

    return (
            <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
  
                <View style={styles.top_bar}>
                  <TouchableOpacity style={styles.historic}>
                    <Ionicons size={30} color={'#FFF'} name='md-timer-outline'/>
                  </TouchableOpacity>
  
                  <Text style={styles.title_logo}>
                    Pizzaria Sapore D'Amores
                  </Text>
  
                  <TouchableOpacity style={styles.shopping}>
                    <Ionicons size={30} color={'#FFF'} name='basket-outline'/>
                  </TouchableOpacity>
  
                </View>

                <Card 
                title={"Pizzas"} 
                description={"Mais de 30 sabores de pizza em até 4 tamanhos diferentes de fome."} 
                timelapse={" 30 mins"}
                image={require("../../components/cards/home_cards/images/wepi.png")}
                />
                <Card
                title={"Bebidas não-alcoólicas"}
                description={"Refrigerantes, Sucos, Energéticos e Água."}
                timelapse={" 5 mins"}
                image={require("../../components/cards/home_cards/images/refri.jpg")}
                />
            </View>
    );
  }