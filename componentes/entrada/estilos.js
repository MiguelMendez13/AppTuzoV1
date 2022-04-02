import { StyleSheet} from "react-native"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: "nowrap",

    },
    viewBotonRegistar:{
        height: 10,
        padding: 10,
        marginLeft:10,
        justifyContent:'flex-end',
        flex: 1,
        flexDirection:'row',  
    },

    title: {
        color:"black",
        fontSize: 25,
    },
    titleReg: {
        color:"red",
        fontSize: 30,
    },
    titleBlanco:  {
        color:"white",
        fontSize: 25, 
    },
    botonRegistrar: {
        width:150,
        height:50,
        justifyContent:"center",
        alignItems:"center",
    },
    boton2: {
        backgroundColor: "gray",
        width:150,
        height:50,
        borderWidth:1,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    boton3: {
        backgroundColor: "gray",
        width:150,
        height:150,
        borderWidth:1,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
    },
    input: {
        height: 40,
        width: 140,
        margin: 12,
        borderWidth: 1,
    },
    
    formulario: {
        flex:4,
        borderWidth: 1,
        borderColor: "black",
        margin: "2%",
    },
    viewInputs: {
        height: 10,
        padding: 10,
        marginLeft:10,
        //justifyContent:'center',
        flex: 1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft: "2%",
        paddingRight: "2%",
    },
    viewBtnEntrar: {
        height: 10,
        padding: 10,
        marginLeft:10,
        //justifyContent:'center',
        flex: 1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        paddingLeft: "2%",
        paddingRight: "2%",
    },

    vacio: {
        flex:3,
        justifyContent:"center",
        alignItems:"center",
    }
});

export default styles;