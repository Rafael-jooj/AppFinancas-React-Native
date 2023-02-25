import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Projects() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Meu Projeto</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.item}>Tempo em dias</Text>
                <Text style={styles.item}>14 dias e 5 horas</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.item}>Valor do projeto</Text>
                <Text style={styles.item}>R$ 1.000,00</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.item}>Total em horas</Text>
                <Text style={styles.item}>90 horas</Text>
            </View>
            <View style={styles.list}>
                <Text style={styles.item}>Progresso</Text>
                <Text style={styles.item}>50%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4658ED',
        height: '25%',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10
    },
    title:{
        width: '90%',
        height: 30,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        borderBottomWidth: 1,
        borderColor: '#fff',
        textAlign: 'center'
    },
    box:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    list:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '5%',
        paddingEnd: '5%',
        marginBottom: 10
    },
    item:{
        color: '#fff'
    }
})