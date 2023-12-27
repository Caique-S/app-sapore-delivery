import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from '../../components/styles/styles'

export default function Cart({route}){
    return(
      <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
        <View style={styles.top_bar}>
          <Text style={styles.title_logo}>Carrinho</Text>
        </View>
        <View>
          <Text>Recuperar Valores</Text>
          <Button
          title="Resgatar"
          onPress={()=> {
            console.log(route.params?.size)
          }}/>
        </View>
      </View>
    )
}