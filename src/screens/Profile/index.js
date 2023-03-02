import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.containerFoto}>
                <Image
                    source={require('../../assets/profile.png')}
                    style={{width: '100%', height: '80%'}}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.info}>Rafael Silva</Text>

                <Text style={styles.title}>Email</Text>
                <Text style={styles.info}>rafael@gmail.com</Text>

                <Text style={styles.title}>Telefone</Text>
                <Text style={styles.info}>(63)91111-1111</Text>

                <Text style={styles.title}>Data de nascimento</Text>
                <Text style={styles.info}>08/00/2001</Text>

                <TouchableOpacity style={styles.buttom}>
                    <Text style={styles.buttomText}>Alterar informações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerFoto:{
        backgroundColor: '#29384D',
        flex: 1
    },
    containerInfo:{
        flex: 3,
        backgroundColor: '#fff',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 16,
        marginTop: 20
    },
    info:{
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        marginTop: 10,
        height: 30
    },
    buttom:{
        height: 50,
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 15,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
        buttomText:{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
        }
})