import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    ViewWrapper:{
        flex:1
    },
    Viewfrom:{
        flex:2,
        padding:10

    },
    ViewData:{
        flex:4
    },
    TextInput:{
        padding:10,
        fontSize:15,
        borderRadius:15,
        borderWidth:1,
        borderColor:'#cccccc',
        marginBottom:10,
        backgroundColor:'#dedede'

    },
    viewList:{
        flexDirection:'row',
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:'#dedede'
    },
    textListNama:{
        flex:3,
        fontSize:20,
        fontWeight:'bold'
    },
    textListEdit:{
        color:'blue',
        marginRight:20,
    },
    textListDelete:{
        color:'red'
    }
})