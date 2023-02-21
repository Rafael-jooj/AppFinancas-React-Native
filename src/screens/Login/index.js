import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput 
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

export default function Login() {

    const Navigation = useNavigation()

    return (
    <View style = {style.container}>
            <Animatable.View style={style.titleContainer} animation="fadeInLeft">
                <Text style={style.title}>Bem-Vindo(a)</Text>
            </Animatable.View>
            <Animatable.View style={style.boxContainer} animation="fadeInUp" delay={600}>
                <Text style={style.inputText}>Email</Text>
                <TextInput placeholder='Digite um email...' style={style.input}/>

                <Text style={style.inputText}>Senha</Text>
                <TextInput placeholder='Sua senha' style={style.input}/>

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.cadastro} onPress={()=> Navigation.navigate('SingUp')}>
                    <Text style={{color: '#4658ED'}}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
    </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4658ED'
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
        color: '#4658ED'
    },
    input:{
        borderBottomWidth: 1,
        borderColor: '#4658ED',
        height: 40,
        marginBottom: 20
    },
    button:{
        width: '100%',
        backgroundColor: '#4658ED',
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