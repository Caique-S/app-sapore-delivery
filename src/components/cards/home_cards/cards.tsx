import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export function Card({title, description, timelapse,image }){

    const cardPizzasTitle = title
    const cardPizzasImage = image
    const cardPizzasTime = timelapse
    const cardPizzasDescripition = description

    return(
        <View style={styles.card}> 
            <View style={styles.incardleft}>
                <Image 
                source={cardPizzasImage}
                style={styles.picture}
                />
            </View>
            <View style={styles.incardright}>
                <Text style={styles.titlecard}>{cardPizzasTitle}</Text>
                <Text style={styles.textcard}>{cardPizzasDescripition}</Text>
                <View style={{height:"20%", flexDirection:"row",alignItems:"flex-end"}}>
                    <Ionicons size={20} color={'#999999'} name='alarm-outline'/>
                    <Text style={{fontSize:15,color:"#999999"}}>{cardPizzasTime}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flexDirection:"row",
        width:"90%",
        height:125,
        backgroundColor:"#fff",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:-40,
        marginBottom:50,
        shadowColor:'#000',
        elevation: 10
    },
    incardleft:{
        width:"30%",
        height:"90%",
    },
    picture:{
        width:"100%",
        height:"100%",
        borderRadius:10,
    },
    incardright:{
        width:"60%",
        height:"90%",
        alignItems:"flex-start"
    },
    titlecard:{
        fontSize:20,
        color:"#7B4804",
        height:"20%"
    },
    textcard:{
        fontSize:17,
        color:"#999999",
        height:"50%"
    }
})