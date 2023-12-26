import React from "react";
import { View, Text, Image , TouchableOpacity , StyleSheet } from "react-native";



export function Card({title , image, teste}){


    return(
        <TouchableOpacity style={styles.mainContainer} onPress={teste}>
            <View style={styles.imageContainer} >
                <Image 
                source={image}
                style={styles.image}
                />
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        width:155,
        height:175,
        backgroundColor:"#FFF",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginBottom:15,
        shadowColor:'#000',
        elevation: 10
    },
    imageContainer:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width:'80%',
        height:'75%',  
        alignItems:'center',
    },
    text: {
        fontSize:20,
        fontWeight:'bold',
        color:'#665566',
    }
})