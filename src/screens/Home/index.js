import React, { cloneElement } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth'
import { Feather, FontAwesome } from '@expo/vector-icons';
import Item from '../../components/Item';
import Carousel from '../../components/Carousel';

export default function Home() {

    const data = [
        '#fff',
        '#FFD700',
        '#D3D3D3',
    ]

    function SingOut(){
        auth().signOut()
    }

    return (
    <View style={style.container}>
        <View style={style.banner}>
            <View style={style.header}>
                <Text style={style.title}>Olá, Rafael</Text>
                <TouchableOpacity style={style.button} onPress={SingOut}>
                    <Feather name="log-out" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <Carousel data={data} title={'Movimentação'} valor={2500}/>
        </View>
        <View style={style.content}>
            <View style={style.titleContainer}>
                <Text style={style.title2}>Listagem</Text>
                <TouchableOpacity style={style.add}>
                    <FontAwesome name="plus" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{paddingBottom: 50}}>
                <Item name={'Alimentação'}/>
                <Item name={'Academia'}/>
                <Item name={'Aluguel'}/>
                <Item name={'Suplemento'}/>
                <Item name={'Gasolina'}/>
            </ScrollView>
        </View>
    </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#29384D'
    },
    banner:{
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingEnd: '5%',
        paddingStart: '5%',
        marginBottom: 10
    },
    content:{
        flex: 2,
        backgroundColor: '#fff',
        paddingBottom: 80
    },
    title:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
    },
    title2:{
        fontSize: 20,
    },
    titleContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    button:{
        width: 40,
        height: 40,
        backgroundColor: '#475465',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    add:{
        backgroundColor: '#475465',
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})