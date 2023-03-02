import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Projects from '../../components/Projects';

export default function Budget() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projetos</Text>
            <ScrollView>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
                <Projects/>
            </ScrollView>
            <TouchableOpacity style={styles.buttom}>
                <Text style={{fontSize: 28, color:'#fff'}}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#29384D',
        paddingBottom: 80
    },
    title:{
        fontSize: 22,
        fontWeight: '500',
        alignSelf: 'center',
        color: '#fff',
        marginBottom: 10
    },
    buttom:{
        backgroundColor:"#475465",
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '5%',
    }
})