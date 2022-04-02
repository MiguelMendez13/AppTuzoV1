import imagenn from "../../assets/imagenes/TESOEMLogo.png";
import imgcontacto from "../../assets/imagenes/imgContacto.png";
import { StyleSheet, Text, View, Image} from "react-native";

function Header(){
    
    return(
        <View style={styles.viewImagen}>
            <Image
              source={imagenn}
              style={styles.image}
            />
            <Image
              source={imgcontacto}
              style={styles.image2}
            />
            </View>
    )
}

const styles = StyleSheet.create({
    viewImagen: {
        flex:.7,
        backgroundColor: "#348936",
        flexDirection: 'row',    
        alignItems:"flex-end",
        justifyContent:"space-between",
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingBottom: "2%",
        
    },
    image: {
        height:50,
        width:150,
        //borderRadius:50,
    /*    marginLeft: 10,
        marginTop: 90,*/
        backgroundColor:"white",
    },
    image2:{
        width:50,
        height:50,
        /*marginLeft: 170,
        marginTop: 90,*/
    },
});

export default Header;