import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from '../../components/styles/styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from '../../components/cards/flavors.cards/cards';

export default function Flavors({navigation, route}) {

    const sizeSelected = route.params?.Tamanho
    const priceSelected = route.params?.Preco

    const calabresa = "Calabresa"
    const tradicional = "Tradicional"
    const quatroqueijos = "Quatro Queijos"
    const camarao = "Camarão"
    const marguerita = "Marguerita"
    const frangocatupiry = "Frango / Catupiry"
    const portuguesa = "Portuguesa"
    const strogonof = "Strogonof"

    const next = (size, price, flavor) => navigation.navigate("carrinho", {size: size, price: price, flavor: flavor})
    
    function flavCalabresa(){
    next(sizeSelected,priceSelected,calabresa)
      console.log("O Tamanho escolhido foi: " + sizeSelected + " Custa R$" + priceSelected + " Sabor de: " + calabresa)
    }

    return (
      <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
        <View style={styles.top_bar1}>
          <Text style={styles.title_logo}>Sabores</Text>
        </View>
        <View style={styles.flavors_page}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.body_flavors}>
            
              <TouchableOpacity 
              style={styles.mainContainer}
              onPress={flavCalabresa}>
              <Card
              title={calabresa}
              image={require('../../components/cards/flavors.cards/images/calabresa.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.mainContainer}
              onPress={flavCalabresa}>
                <Card
                title={tradicional}
                image={require('../../components/cards/flavors.cards/images/tradicional.jpg')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}
              >
                <Card
                title={quatroqueijos}
                image={require('../../components/cards/flavors.cards/images/4queijos.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={camarao}
                image={require('../../components/cards/flavors.cards/images/camarao.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={marguerita}
                image={require('../../components/cards/flavors.cards/images/marguerita.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={frangocatupiry}
                image={require('../../components/cards/flavors.cards/images/frangocomcatupiry.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={portuguesa}
                image={require('../../components/cards/flavors.cards/images/portuguesa.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={strogonof}
                image={require('../../components/cards/flavors.cards/images/strogonof.png')}
                />
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }




