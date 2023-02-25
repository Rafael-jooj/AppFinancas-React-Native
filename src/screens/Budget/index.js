import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Projects from '../../components/Projects';

export default function Budget() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projetos</Text>
            <Projects/>
            <Projects/>
            <Projects/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    title:{
        fontSize: 22,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 10
    }
})