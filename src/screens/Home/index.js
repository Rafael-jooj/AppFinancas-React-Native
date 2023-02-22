import React, { cloneElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'

export default function Home() {

    function SingOut(){
        auth().signOut()
    }

    return (
    <View style={style.container}>
        <View>
            <Text style={style.title}>Home Page</Text>
            <Text style={style.title}>Tela para usuários cadastrados</Text>
        </View>

        <TouchableOpacity style={style.button}>
            <Text style={style.buttonText} onPress={SingOut}>Sair</Text>
        </TouchableOpacity>
    </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button:{
        width: '90%',
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
})