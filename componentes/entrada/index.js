import { StyleSheet, Text, View, Image,Button,Alert,TouchableOpacity, TextInput } from 'react-native';
import Header from "../general/";
import styles from "./estilos.js"
function Entrada(){
    return (

        <View style={styles.container}>
            <Header />
            <View style={styles.formulario}>

                <View style={styles.viewInputs}>
                    <Text style={styles.title}> Matricula: </Text>
                    <TextInput style={styles.input}
                      placeholder="Matricula"
                      keyboardType = 'number-pad'
                      maxLength={10}
                    />
                </View>
                <View style={styles.viewInputs}>
                    <Text style={styles.title} >Contraseña:</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder="Contraseña"
                      secureTextEntry={true} 
                      password={true} 
                    />
                </View>
                <View style={styles.viewBtnEntrar}>
                    <TouchableOpacity 
                    onPress={() => Alert.alert("pedro")}
                    style={styles.boton2}
                    >
                    <Text style={styles.titleBlanco}>Entrar</Text>
                
                    </TouchableOpacity>

                </View>
                <View style={styles.viewBotonRegistar}>
                    <TouchableOpacity onPress={() => Alert.alert("pedro")} style={styles.botonRegistrar}>
                    <Text style={styles.titleReg}>Registrar</Text>
                    
                    </TouchableOpacity> 
                </View>
                <View style={styles.vacio}>
                    
                    <TouchableOpacity 
                    onPress={() => Alert.alert("pedro")}
                    style={styles.boton3}>
                        <Text style={styles.titleBlanco}>Entrar como invitado</Text>
                    
                    </TouchableOpacity> 
                </View>

            </View>
        
        </View>
    );
}


export default Entrada;