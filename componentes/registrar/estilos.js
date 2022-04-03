import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formulario:{
        flex: 4,
        borderWidth: 1,
        borderColor: "black",
        margin: "2%",
        borderRadius:20,
    },
    linea:{
        flex: 1,
        margin: "2%",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    input: {
        width:140,
        height:30,
        borderWidth:1,
    },
    title: {
        fontSize: 25,
    },
    botonRegistrar: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:"10%",
        marginRight:"10%",
        marginBottom:"3%",

    },
    boton:{
        backgroundColor:"gray",
        borderColor:"black",
        borderWidth:1,
        borderRadius:5,
    },
    titleBlanco: {
        fontSize: 25,
        color: "white",
    },


    vacio: {
        flex: 1,
    }

});
export default styles;