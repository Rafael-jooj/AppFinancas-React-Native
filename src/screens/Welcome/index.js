import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

    const Navigation = useNavigation()

    return (
    <View style={style.container}>
            <View style={style.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo4.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={style.containerBox}>
                <Text style={style.boxTitle}>Monitore e organize suas despesas de qualquer lugar!</Text>
                <Text style={style.boxText}>Faça o login para começar</Text>
                <TouchableOpacity style={style.boxButton} onPress={()=> Navigation.navigate('Login')}>
                    <Text style={style.buttonText}>Acessar</Text>
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
    containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#29384D'
    },
    containerBox:{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingEnd: '5%',
        paddingStart: '5%'
    },
    boxTitle:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#29384D'
    },
    boxText:{
        color: '#a1a1a1'
    },
    boxButton:{
        backgroundColor: '#29384D',
        borderRadius: 50,
        position: 'absolute',
        alignSelf: 'center',
        width: '60%',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '20%'
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})