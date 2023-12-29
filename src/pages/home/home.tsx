import React from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Card } from '../../components/cards/home_cards/cards';
import { styles } from '../../components/styles/styles';

export default function Home({navigation}) {



  const avant = () => navigation.navigate('tamanho')

  function prox(){
    avant();
    console.log("Mudou de pagina")
  }

    return (
            <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
  
                <View style={styles.top_bar}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate("historic")}
                  style={styles.historic}>
                    <Ionicons size={30} color={'#FFF'} name='md-timer-outline'/>
                  </TouchableOpacity>
  
                  <Text style={styles.title_logo}>
                    Pizzaria Sapore D'Amores
                  </Text>
  
                  <TouchableOpacity
                  onPress={() => navigation.navigate('carrinho')} 
                  style={styles.shopping}>
                    <Ionicons size={30} color={'#FFF'} name='basket-outline'/>
                  </TouchableOpacity>
  
                </View>
                <TouchableOpacity onPress={prox}>
                <Card
                title={"Pizzas"} 
                description={"Mais de 30 sabores de pizza em até 4 tamanhos diferentes de fome."} 
                timelapse={" 30 mins"}
                image={require("../../components/cards/home_cards/images/wepi.png")}
                />
                </TouchableOpacity>
                <Card
                title={"Bebidas não-alcoólicas"}
                description={"Refrigerantes, Sucos, Energéticos e Água."}
                timelapse={" 5 mins"}
                image={require("../../components/cards/home_cards/images/refri.jpg")}
                /> 
            </View>
    );
  }
