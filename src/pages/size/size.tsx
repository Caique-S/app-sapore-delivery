import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import  { styles }  from '../../components/styles/styles'
import { Card } from '../../components/cards/size_cards/card';

export default function Size({navigation}) {
    return (
      <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
        <View style={styles.top_bar2}>
          <Text style={styles.title_logo}>Tamanhos</Text>
        </View>
        <View style={styles.body_size}>
          <TouchableOpacity 
          style={styles.mainContainer}
            onPress={() => navigation.navigate('sabores')}>
            <Card
            price={'R$15,00'}
            theme={styles.brotao}
            title={'Brotão'}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.mainContainer}
          onPress={() => navigation.navigate('sabores')}>
            <Card
            price={'R$34,00'}
            theme={styles.pequena}
            title={'Pequena'}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.mainContainer}
          onPress={() => navigation.navigate('sabores')}>
            <Card
            price={'R$34,00'}
            theme={styles.media}
            title={'Média'}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainContainer}
          onPress={() => navigation.navigate('sabores')}>
            <Card
            price={'R$34,00'}
            theme={styles.grande}
            title={'Grande'}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.mainContainer}
          onPress={() => navigation.navigate('sabores')}>
            <Card
            price={'R$54,00'}
            theme={styles.familia}
            title={'Família'}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

        </View>
      </View>
    );
  }