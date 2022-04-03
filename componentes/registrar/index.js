import {Text, View,Alert,TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Header from "../general/";
import styles from "./estilos.js"

function mostrar(elementos){
    console.log(elementos);
    if(
        elementos.nombre!=""&
        elementos.matricula!=0&
        elementos.matricula!=0&
        elementos.apPaterno!=""&
        elementos.apPaterno!=""&
        elementos.apMaterno!=""&
        elementos.grupo!=""&
        elementos.correo!=""&
        //elementos.telefono!=0&
        elementos.contrasenia!=""&
        elementos.confcontrasenia!=""
    ){
        Alert.alert("Todo lleno");
    }
    else{
        Alert.alert("Llena todos los campos \n*Telefono es opcional*");
    }

}


function Registrar(){
    const elementos={
        matricula:0,
        nombre:"",
        apPaterno:"",
        apMaterno:"",
        carrera:"",
        grupo:"",
        correo:"",
        telefono:0,
        contrasenia:"",
        confcontrasenia:"",


    }


    return (

        <View style={styles.container}>
            <Header />
            <View style={styles.formulario}>
                <View style={styles.linea}>
                    <Text style={styles.title}>Matricula:</Text>
                    <TextInput style={styles.input}
                      placeholder="Matricula"
                      keyboardType = 'number-pad'
                      maxLength={10}
                      onChangeText={(matricula)=>elementos.matricula=matricula}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Nombre:</Text>
                    <TextInput style={styles.input}
                      placeholder="Nombre"
                      onChangeText={(nombre)=>elementos.nombre=nombre}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Apellido Paterno:</Text>
                    <TextInput style={styles.input}
                      placeholder="Apellido Paterno"
                      onChangeText={(app)=>elementos.apPaterno=app}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Apellido Materno:</Text>
                    <TextInput style={styles.input}
                      placeholder="Apellido Materno"
                      onChangeText={(apm)=>elementos.apMaterno=apm}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Carrera:</Text>
                    {/*<TextInput style={styles.input}
                      placeholder="Carrera"
                      onChangeText={(carrera)=>elementos.carrera=carrera}

    />*/}
                    <Picker style={styles.input}>
                        <Picker.Item label="ISC" value="ISC"/>
                        <Picker.Item label="TIC's" value="TIC's"/>
                    </Picker>       
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Grupo:</Text>
                    <TextInput style={styles.input}
                      placeholder="Grupo"
                      onChangeText={(grupo)=>elementos.grupo=grupo}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Correo:</Text>
                    <TextInput style={styles.input}
                      keyboardType="email-address"
                      placeholder="Correo"
                      onChangeText={(correo)=>elementos.correo=correo}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Telefono(opc):</Text>
                    <TextInput style={styles.input}
                      placeholder="Telefono"
                      keyboardType="phone-pad"
                      maxLength={10}
                      onChangeText={(telefono)=>elementos.telefono=telefono}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Contraseña:</Text>
                    <TextInput style={styles.input}
                      placeholder="Contraseña"
                      secureTextEntry={true} 
                      password={true}
                      onChangeText={(contrasenia)=>elementos.contrasenia=contrasenia}
                    />
                </View>
                <View style={styles.linea}>
                    <Text style={styles.title}>Conf. Contraseña:</Text>
                    <TextInput style={styles.input}
                      placeholder="Conf. Contraseña"
                      secureTextEntry={true} 
                      password={true}
                      onChangeText={(conf)=>elementos.confcontrasenia=conf}
                    />
                </View>
                <View style={styles.botonRegistrar}>
                    <TouchableOpacity 
                      onPress={() => mostrar(elementos)}
                      style={styles.boton}>
                        <Text style={styles.titleBlanco}>Registrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={() => Alert.alert("pedro")}
                      style={styles.boton}>
                        <Text style={styles.titleBlanco}>Regresar</Text>
                    </TouchableOpacity>
                </View>

                

            </View>
        </View>
    );
}






export default Registrar;