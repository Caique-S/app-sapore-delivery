import React from "react";
import { Text , View , StyleSheet } from "react-native";

export default function Historico(){
    return(
            <View style={{flex:1, backgroundColor: "#660000"}}>
                <Text style={styles.container}>
                    Ultimos Pedidos
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize:30,
        color:"#999999"
    }
})