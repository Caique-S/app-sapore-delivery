import React from "react";
import { View, Text, Image , StyleSheet } from "react-native";

export function Card({title , image, theme, price}){


    return(
            <View style={styles.imageContainer} >
                <Image 
                source={image}
                style={theme}
                />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:20,
        fontWeight:'bold',
        color:'#665566',
    },
    price:{
        fontSize:22,
        fontWeight:'bold',
        color:'#665566',
    }
})