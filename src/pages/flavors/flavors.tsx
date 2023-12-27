import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../components/styles/styles'
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from '../../components/cards/flavors.cards/cards';

export default function Flavors({navigation, route}) {

    const sizeSelected = route.params?.Tamanho

    const next = (size) => navigation.navigate("carrinho", {size: size})
  
    function nextCart(){
      console.log(sizeSelected)
      next(sizeSelected)
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
              onPress={nextCart}>
              <Card
              title={'Calabresa'}
              image={require('../../components/cards/flavors.cards/images/calabresa.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={'Tradicional'}
                image={require('../../components/cards/flavors.cards/images/tradicional.jpg')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}
              >
                <Card
                title={'Quatro Queijos'}
                image={require('../../components/cards/flavors.cards/images/4queijos.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={'Camarão'}
                image={require('../../components/cards/flavors.cards/images/camarao.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={'Marguerita'}
                image={require('../../components/cards/flavors.cards/images/marguerita.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={'Frango / Catupiry'}
                image={require('../../components/cards/flavors.cards/images/frangocomcatupiry.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={'Portuguesa'}
                image={require('../../components/cards/flavors.cards/images/portuguesa.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.mainContainer}
              onPress={() => navigation.navigate('')}>
                <Card
                title={'Strogonof'}
                image={require('../../components/cards/flavors.cards/images/strogonof.png')}
                />
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }




