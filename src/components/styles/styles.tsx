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
        backgroundColor:'transparent', 
        alignItems:"center",
        justifyContent: "center",
        marginTop:-40,
    },
    body_flavors:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"space-around",
        width:350,
    },
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
    body_size:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"space-around",
        width:350,
        marginTop:-40,
        height:'100%',
    },
    brotao:{
        width:'40%',
        height:'35%',  
        alignItems:'center',
    },
    pequena:{
        width:'45%',
        height:'40%',  
        alignItems:'center',
    },
    media:{
        width:'55%',
        height:'50%',  
        alignItems:'center',
    },
    grande:{
        width:'65%',
        height:'60%',  
        alignItems:'center',
    },
    familia:{
        width:'75%',
        height:'70%',  
        alignItems:'center',
    },
})