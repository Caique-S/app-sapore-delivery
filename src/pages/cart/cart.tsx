import React from "react";
import { View, Text } from "react-native";
import { styles } from '../../components/styles/styles'

export default function Cart(){
    return(
      <View style={{flex:1, backgroundColor:"#D6D6D6", alignItems:"center"}}>
        <View style={styles.top_bar}>
          <Text style={styles.title_logo}>Carrinho</Text>
        </View>
      </View>
    )
}