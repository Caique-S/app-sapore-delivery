import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    top_bar:{
        flexDirection:'row',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000,
        width:1000,
        height:1000,  
        marginTop:-800,
        backgroundColor:"#EB8806",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom:70,
    },
    top_bar1:{
        flexDirection:'row',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000,
        width:1000,
        height:1000,  
        marginTop:-800,
        backgroundColor:"#660000",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom:70,
    },
    top_bar2:{
        flexDirection:'row',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000,
        width:1000,
        height:1000,  
        marginTop:-800,
        backgroundColor:"#006600",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom:70,
    },
    scroll:{
        marginTop:-20,
    },
    historic:{
        
    },
    title_logo:{
        paddingLeft:30,
        paddingRight:30,
        fontSize:22,
        fontWeight:"bold",
        color:"#FFF",
        padding:5,
    },
    shopping:{

    },
    flavors_page:{
        flex:1,
        backgroundColor:"#D6D6D6", 
        alignItems:"center",
        justifyContent:'center',

    },
    body_flavors:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"space-around",
        width:350,
        height:'100%',
    },
})