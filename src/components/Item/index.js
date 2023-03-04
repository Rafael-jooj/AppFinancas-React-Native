import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Item(props) {
    return (
    <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.value}>R$500,00</Text>
        <View style={styles.infoContainer}>
            <Text style={styles.info}>Compra</Text>
            <Text style={styles.info}>01/01/2023</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F0F8FF',
        paddingStart: '5%',
        paddingEnd: '5%',
        width: '90%',
        height: 100,
        alignSelf: 'center',
        borderRadius: 10,
        paddingTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#c4c4c4'
    },
    name:{
        fontSize: 16
    },
    value:{
        fontSize: 20,
        color: 'green',
    },
    infoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    info:{
        color: '#A9A9A9'
    }
})