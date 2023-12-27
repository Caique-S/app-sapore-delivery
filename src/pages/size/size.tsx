import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import  { styles }  from '../../components/styles/styles'
import { Card } from '../../components/cards/size_cards/card';

export default function Size({navigation}) {

  const brotaoName = "Brotão"
  const brotaoPrice = 15

  const pequenaName = "Pequena"
  const pequenaPrice = 38

  const mediaName = "Média"
  const mediaPrice = 48

  const grandeName = "Grande"
  const grandePrice = 58

  const familiaName = "Familia"
  const familiaPrice = 68
  
  const next = (props1 , props2) => navigation.navigate('sabores', {Tamanho: props1 , Preco: props2})
  

  function brotaoSwitchPage(){
    next(brotaoName,brotaoPrice);
    console.log("O Tamanho escolhido foi: " + brotaoName + ". O Preço do tamnho selecionado é: R$" + brotaoPrice + ",00")
  }
  function pequenaSwitchPage(){
    next(pequenaName,pequenaPrice);
    console.log("O Tamanho escolhido foi: " + pequenaName + ". O Preço do tamnho selecionado é: R$" + pequenaPrice + ",00")
  }
  function mediaSwitchPage(){
    next(mediaName,mediaPrice);
    console.log("O Tamanho escolhido foi: " + mediaName + ". O Preço do tamnho selecionado é: R$" + mediaPrice + ",00")
  }
  function grandeSwitchPage(){
    next(grandeName,grandePrice);
    console.log("O Tamanho escolhido foi: " + grandeName + ". O Preço do tamnho selecionado é: R$" + grandePrice + ",00")
  }
  function familiaSwitchPage(){
    next(familiaName,familiaPrice);
    console.log("O Tamanho escolhido foi: " + familiaName + ". O Preço do tamnho selecionado é: R$" + familiaPrice + ",00")
  }
  
    return (
      <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
        <View style={styles.top_bar2}>
          <Text style={styles.title_logo}>Tamanhos</Text>
        </View>
        <View style={styles.body_size}>
          <TouchableOpacity 
          style={styles.mainContainer}
            onPress={brotaoSwitchPage}>
            <Card
            price={"R$" + brotaoPrice + ",00"}
            theme={styles.brotao}
            title={brotaoName}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.mainContainer}
          onPress={pequenaSwitchPage}>
            <Card
            price={"R$" + pequenaPrice + ",00"}
            theme={styles.pequena}
            title={pequenaName}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.mainContainer}
          onPress={mediaSwitchPage}>
            <Card
            price={"R$" + mediaPrice + ",00"}
            theme={styles.media}
            title={mediaName}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.mainContainer}
          onPress={grandeSwitchPage}>
            <Card
            price={"R$" + grandePrice + ",00"}
            theme={styles.grande}
            title={grandeName}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.mainContainer}
          onPress={familiaSwitchPage}>
            <Card
            price={"R$" + familiaPrice + ",00"}
            theme={styles.familia}
            title={familiaName}
            image={require('../../components/cards/size_cards/images/pizza_size.png')}
            />
          </TouchableOpacity>

        </View>
      </View>
    );
  }