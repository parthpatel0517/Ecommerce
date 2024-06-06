import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react'

export default function ProductCard() {
    const [images, setImages] = useState(
        [
            require('../../assets/img/Dress1.jpg'),
            require('../../assets/img/Dress2.webp')          // Local image
        ]
    )

    console.log(images);

    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.ArrowView}>
                <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Short dress</Text>
                <TouchableOpacity><MaterialIcons name="share" size={30} color="black" style={{ marginTop: 27 }} /></TouchableOpacity>
            </View>


            <ScrollView horizontal>
                {
                    images.map((v) => (
                        <Image source={v} style={{ width: 320, height: 480, resizeMode: 'cover', marginRight: 20 }} />
                    ))
                }
            </ScrollView>
            <View style={styles.SizeBlackView}>
                <View style={styles.SizeView}>
                    <Text style={styles.SizeText}>Size</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={25} color='black'style={styles.SizeArrow}/>
                </View>
                <View style={styles.BlackView}>
                    <Text style={styles.SizeText}>Black</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={25} color='black'style={styles.SizeArrow}/>
                </View>
                <View>
                <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart} /></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#F9F9F9'
    },
    ArrowView: {
        width: '100%',
        height: 80,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ArrowText: {
        color: 'black',
        fontSize: 23,
        marginTop: 28,
        fontFamily: 'Metropolis-SemiBold'
    },
    KeyboardArrow: {
        marginTop: 16,
        marginLeft: -15
    },
    SizeBlackView : {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    SizeView : {
        width:140,
        height:50,
        borderWidth:1,
        borderColor:'#F01F0E',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    SizeText : {
        color:'#222222',
        fontFamily:'Metropolis-Medium',
        fontSize:16,
        marginLeft:10,
        marginTop:13
    },
    SizeArrow : {
        marginRight:6,
        marginTop:10
    },
    BlackView:{
        width:140,
        height:50,
        borderWidth:1,
        borderColor:'#9B9B9B',
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    heart: {
        position: 'absolute',
        bottom: -10,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        
    },
})