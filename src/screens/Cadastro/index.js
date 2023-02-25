import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import auth from '@react-native-firebase/auth'
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native'

export default function Cadastro() {
    const Navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function SingUp(){
        auth().createUserWithEmailAndPassword(email, senha).then(userCredential => {
            console.log('user ', userCredential);
        }).catch(error => {
            if(error.code === 'auth/email-already-in-use'){
                console.log('Email já existente');
            }
            if(error.code === 'auth/invalid-email'){
                console.log('Email invalido');
            }
        })
}

  return (
      <View style = {style.container}>
        <Animatable.View style={style.titleContainer} animation="fadeInLeft">
            <Text style={style.title}>Cadastre-se</Text>
        </Animatable.View>
        <Animatable.View style={style.boxContainer} animation="fadeInUp" delay={600}>
            <Text style={style.inputText}>Email</Text>
            <TextInput placeholder='Insira um email...' style={style.input} onChangeText={setEmail}/>

            <Text style={style.inputText}>Senha</Text>
            <TextInput secureTextEntry={true} placeholder='Insira uma senha' style={style.input} onChangeText={setSenha}/>

            <TouchableOpacity style={style.button} onPress={SingUp}>
                <Text style={style.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.cadastro} onPress={()=> Navigation.navigate('Login')}>
                <Text style={{color: '#111'}}>Já possui uma conta? Entre</Text>
            </TouchableOpacity>
        </Animatable.View>
      </View>
  );
}

const style = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#111'
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
      color: '#111'
  },
  input:{
      borderBottomWidth: 1,
      borderColor: '#111',
      height: 40,
      marginBottom: 20
  },
  button:{
      width: '100%',
      backgroundColor: '#111',
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