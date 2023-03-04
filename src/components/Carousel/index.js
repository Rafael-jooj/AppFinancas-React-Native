import React from 'react';
import { FlatList, View, Dimensions, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const {width} = Dimensions.get('window')

export default function Carousel({data, valor, title}) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => String(item)}
            horizontal
            snapToOffsets={[... Array(data.length)].map(
                (x, i) => i * (width*0.8 - 40) + (i - 1) * 40
            )}
            snapToAlignment='start'
            scrollEventThrottle={16}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View 
                    style={{
                        backgroundColor: item,
                        height: width/2.5,
                        width: width * 0.8 - 20,
                        marginHorizontal: 10,
                        borderRadius: 12,
                        paddingStart: '5%', 
                        paddingEnd: '5%',
                }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
                        <MaterialIcons name="attach-money" size={30} color="green" />
                    </View>
                    <Text style={{fontSize: 30, fontWeight: 'bold', position: 'absolute', bottom: 30, paddingStart: '5%'}}>R${valor},00</Text>
                </View>
            )}
        />
    );
}