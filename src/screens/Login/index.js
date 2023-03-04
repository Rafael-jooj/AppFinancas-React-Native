import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput 
} from 'react-native';

import auth from '@react-native-firebase/auth'
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function SingIn(){
        auth().signInWithEmailAndPassword(email, senha)
        .then(()=>console.log('Usuário logado!'))
        .catch(error => console.log(error))
    }

    const Navigation = useNavigation()

    return (
    <View style = {style.container}>
            <Animatable.View style={style.titleContainer} animation="fadeInLeft">
                <Text style={style.title}>Bem-Vindo(a)</Text>
            </Animatable.View>
            <Animatable.View style={style.boxContainer} animation="fadeInUp" delay={600}>
                <Text style={style.inputText}>Email</Text>
                <TextInput placeholder='Digite um email...' style={style.input} onChangeText={setEmail}/>

                <Text style={style.inputText}>Senha</Text>
                <TextInput secureTextEntry={true} placeholder='Sua senha' style={style.input} onChangeText={setSenha}/>

                <TouchableOpacity style={style.button} onPress={SingIn}>
                    <Text style={style.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.cadastro} onPress={()=> Navigation.navigate('SingUp')}>
                    <Text style={{color: '#29384D'}}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
    </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#29384D'
    },
    titleContainer:{
        paddingStart: '5%',
        marginBottom: '10%',
        marginTop: '10%'
    },
    title:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
    },  
    boxContainer:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: 20
    },
    inputText:{
        fontSize: 18,
        marginTop: 10,
        fontWeight: "400",
        color: '#29384D'
    },
    input:{
        borderBottomWidth: 1,
        borderColor: '#29384D',
        height: 40,
        marginBottom: 20
    },
    button:{
        width: '100%',
        backgroundColor: '#29384D',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cadastro:{
        alignSelf: 'center',
        marginTop: 20
    }
})