import { StyleSheet, Text, View, Image,Button,Alert,TouchableOpacity, TextInput } from 'react-native';
import imagenn from "./assets/imagenes/TESOEMLogo.png";
import imgcontacto from "./assets/imagenes/imgContacto.png";
export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.viewImagen}>
                <Image
                source={imagenn}
                style={styles.image}
                />
                <Image
                source={imgcontacto}
                style={styles.image}
                />
            </View>
            <View style={styles.formulario}>

                <View style={styles.viewMatricula}>
                    <Text style={styles.title}> Matricula: </Text>
                    <TextInput
                    style={styles.input}
                    />
                </View>
                <View style={styles.viewMatricula}>
                    <Text style={styles.title}>Contraseña:</Text>
                    <TextInput
                    style={styles.input}
                    />
                </View>
                <View style={styles.viewMatricula}>
                    <TouchableOpacity 
                    onPress={() => Alert.alert("pedro")}
                    style={styles.boton2}
                    >
                    <Text style={styles.title}>Entrar</Text>
                
                    </TouchableOpacity>

                </View>
                <View style={styles.viewBotonRegistar}>
                    <TouchableOpacity 
                    onPress={() => Alert.alert("pedro")}
                    style={styles.botonRegistrar}
                    >
                    <Text style={styles.title}>Registrar</Text>
                    
                    </TouchableOpacity> 
                </View>
                <View style={styles.vacio}>
                    
                    <TouchableOpacity 
                    onPress={() => Alert.alert("pedro")}
                    style={styles.boton3}
                    >
                        <Text style={styles.title}>Entrar como invitado</Text>
                    
                    </TouchableOpacity> 
                </View>

            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#00f',
        //alignItems: 'center',
        //justifyContent: 'center',
        
    },
    viewBotonRegistar:{
        height: 10,
        padding: 10,
        marginLeft:10,
        justifyContent:'flex-end',
        //alignItems: "center",
        flex: 1,
        flexDirection:'row',
        backgroundColor:"red",
        borderWidth:1,    
    },
    title: {
        color:"black",
        fontSize: 30,
    },
    image: {
        height:50,
        width:150,
        //borderRadius:50,
        marginLeft: 10,
        marginTop: 90,
        backgroundColor:"white",
    },
    botonRegistrar: {
        //backgroundColor: "gray",
        width:150,
        height:50,
        //borderWidth:1,
        //borderRadius:10,
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
        width: 200,
        margin: 12,
        borderWidth: 1,
    },
    
    formulario: {
        flex:4
    },
    viewMatricula: {
        height: 10,
        padding: 10,
        marginLeft:10,
        justifyContent:'center',
        //alignItems: "center",
        flex: 1,
        flexDirection:'row',
        /*backgroundColor:"red",
    borderWidth:1,*/
    },
    viewImagen: {
        flex:1,
        backgroundColor: "#348936",
    },
    vacio: {
        flex:3,
        justifyContent:"center",
        alignItems:"center",
    }
});
