import React from 'react';
import { Text ,View } from 'react-native';
import { styles } from '../../components/styles/styles'
import { Card } from '../../components/cards/flavors.cards/cards';
import { ScrollView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Pizzas  from '../../components/screens/pizzas'

export default function Flavors({navigation}) {
  const Stack = createNativeStackNavigator()

function Sabores(){
  
  return(
        <Stack.Navigator>
         <Stack.Screen name="Pizzas" component={Pizzas} />
         <Stack.Screen name="sabores" component={Flavors} />
        </Stack.Navigator>
      )
}

    return (
      <View style={styles.flavors_page}>
        <View style={styles.top_bar1}>
          <Text style={styles.title_logo}>Selecione um tipo</Text>
        </View>
        <ScrollView
        showsVerticalScrollIndicator={false} 
        style={styles.scroll}>
        <View style={styles.body_flavors}>
          <Card
          teste={() => navigation.navigate('Pizzas')}
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/calabresa.png")}
          />
          {/* <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/4queijos.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/frangocomcatupiry.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/strogonof.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/marguerita.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/camarao.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/portuguesa.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/tradicional.jpg")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/calabresa.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/4queijos.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/frangocomcatupiry.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/strogonof.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/marguerita.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/camarao.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/portuguesa.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/tradicional.jpg")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/calabresa.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/4queijos.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/frangocomcatupiry.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/strogonof.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/marguerita.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/camarao.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/portuguesa.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/tradicional.jpg")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/calabresa.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/4queijos.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/frangocomcatupiry.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/strogonof.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/marguerita.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/camarao.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/portuguesa.png")}
          />
          <Card 
          title={"Calabresa"} 
          image={require("../../components/cards/flavors.cards/images/tradicional.jpg")}
          /> */}

        </View>
        </ScrollView>
      </View>
    );
  }
