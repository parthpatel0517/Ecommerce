import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react'
const Data = [
    {
        id: 1,
        title: 'Dorothy perkins',
        subtitle: 'Evening Dress',
        img: require('../../assets/img/shopping.webp'),
        price: 15,
        discount: 12
    },
    {
        id: 0,
        title: 'Dorothy perkins',
        subtitle: 'Evening Dress',
        img: require('../../assets/img/Dress2.webp'),
        price: 15,
        discount: 12
    },
    {
        id: 2,
        title: 'Dorothy perkins',
        subtitle: 'Evening Dress',
        img: require('../../assets/img/shopping.webp'),
        price: 15,
        discount: 12
    },
    {
        id: 3,
        title: 'Dorothy perkins',
        subtitle: 'Evening Dress',
        img: require('../../assets/img/shopping.webp'),
        price: 15,
        discount: 12
    }
]
export default function ProductCard() {
    const [images, setImages] = useState(
        [
            require('../../assets/img/Dress1.jpg'),
            require('../../assets/img/Dress2.webp')          // Local image
        ]
    )

    console.log(images);
    const ProductCard = ({ v }) => (
        <View style={{ marginRight: 20 }}>

            <Image source={v.img} style={{ width: 170, height: 250, borderRadius: 10 }}></Image>

            <View style={styles.iconview}>
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <FontAwesome name="star" size={17} style={{ color: '#FFBA49', marginRight: 3 }} />
                <Text style={{ color: '#9B9B9B' }}>(10)</Text>
            </View>
            <View style={{ position: 'relative' }}>
                <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart2} /></TouchableOpacity>
            </View>
            <Text style={styles.title}>{v.title}</Text>
            <Text style={styles.subtitle}>{v.subtitle}</Text>
            <View style={styles.PriceView}>
                <Text style={styles.discount}>{v.discount}$</Text>
                <Text style={styles.price}>{v.price}$</Text>

            </View>

        </View>



    )
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
                    <MaterialIcons name="keyboard-arrow-down" size={25} color='black' style={styles.SizeArrow} />
                </View>
                <View style={styles.BlackView}>
                    <Text style={styles.SizeText}>Black</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={25} color='black' style={styles.SizeArrow} />
                </View>
                <View style={{ position: 'relative' }}>
                    <TouchableOpacity><FontAwesome name="heart-o" size={20} color="black" style={styles.heart} /></TouchableOpacity>
                </View>
            </View>
            <View style={styles.HandMView}>
                <View>
                    <Text style={styles.HAndM}>H&M</Text>
                    <Text style={styles.ShortDress}>Short black dress</Text>
                    <View style={styles.iconview}>
                        <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                        <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                        <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                        <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 2, marginTop: 2 }} />
                        <FontAwesome name="star" size={13} style={{ color: '#FFBA49', marginRight: 3, marginTop: 2 }} />
                        <Text style={{ color: '#9B9B9B', fontSize: 13 }}>(10)</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.HANdMPrice}>$19.99</Text>
                </View>
            </View>
            <View style={styles.TextsView}>
                <Text style={styles.Texts}>Short dress in soft cotton jersey with decorative buttons down the
                    front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated
                    seam under the bust and short puff sleeves with a small frill trim.
                </Text>
            </View>
            <View style={styles.ItemView}>
                <Text style={styles.ItemText}>Item detail</Text>
                <TouchableOpacity><MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} /></TouchableOpacity>
            </View>
            <View style={styles.ShippingView}>
                <Text style={styles.ItemText}>Shipping info</Text>
                <TouchableOpacity><MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} /></TouchableOpacity>
            </View>
            <View style={styles.SupportView}>
                <Text style={styles.ItemText}>Support</Text>
                <TouchableOpacity><MaterialIcons name="chevron-right" size={28} color='black' style={{ marginTop: 8, marginRight: 4 }} /></TouchableOpacity>
            </View>
            <View style={styles.LikeThisView}>
                <Text style={styles.LikeThisText}>You can also like this </Text>
                <Text style={styles.NumitemText}>12 item</Text>
            </View>
            <FlatList
                data={Data}
                renderItem={({ item }) => <ProductCard v={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
            />


            <TouchableOpacity style={styles.ButtonView}><View style={styles.ButtonUnderView}>
                <Text style={styles.AddCart}>ADD TO CART</Text>
            </View>
            </TouchableOpacity>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 17,
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
    SizeBlackView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SizeView: {
        width: 140,
        height: 50,
        borderWidth: 1,
        borderColor: '#F01F0E',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SizeText: {
        color: '#222222',
        fontFamily: 'Metropolis-Medium',
        fontSize: 16,
        marginLeft: 10,
        marginTop: 13
    },
    SizeArrow: {
        marginRight: 6,
        marginTop: 10
    },
    BlackView: {
        width: 140,
        height: 50,
        borderWidth: 1,
        borderColor: '#9B9B9B',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30
    },
    heart: {
        position: 'absolute',
        bottom: -43,
        right: 3,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    HandMView: {
        marginTop: 18,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    HAndM: {
        color: 'black',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 27
    },
    ShortDress: {
        color: '#9B9B9B',
        fontFamily: 'Metropolis-Regular',
        fontSize: 14,
    },
    iconview: {
        flexDirection: 'row',
        marginTop: 8,
    },
    HANdMPrice: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Metropolis-SemiBold',
        marginRight: 15
    },
    TextsView: {
        marginTop: 22,
        marginLeft: 14,
        width: '90%',
    },
    Texts: {
        color: '#222222',
        fontFamily: 'Metropolis-Regular',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'left'
    },
    ItemView: {
        marginTop: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#9B9B9B',
    },
    ItemText: {
        color: '#222222',
        fontFamily: 'Metropolis-Regular',
        fontSize: 17,
        marginTop: 15,
        marginBottom: 15,

    },
    ShippingView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#9B9B9B',
    },
    SupportView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#9B9B9B',
        borderBottomColor: '#9B9B9B',
        borderBottomWidth: 1
    },
    LikeThisView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    LikeThisText: {
        color: '#222222',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 19,
    },
    NumitemText: {
        color: '#9B9B9B',
        fontFamily: 'Metropolis-Regular',
        fontSize: 13
    },
    title: {
        color: 'black',
        paddingHorizontal: 4,
        fontSize: 13,
        fontFamily: 'Metropolis-Regular',
        marginTop: 5
    },
    subtitle: {
        color: 'black',
        paddingHorizontal: 4,
        fontSize: 19,
        fontFamily: 'Metropolis-SemiBold',
        marginTop: 2
    },
    PriceView: {
        flexDirection: 'row'
    },
    discount: {
        color: '#9B9B9B',
        fontSize: 19,
        marginTop: 2,
        paddingHorizontal: 3,
        textDecorationLine: 'line-through',
        fontFamily: 'Metropolis-Medium'
    },
    price: {
        color: '#DB3022',
        fontSize: 19,
        marginTop: 2,
        paddingLeft: 6,
        fontFamily: 'Metropolis-Medium'
    },
    heart2: {
        position: 'absolute',
        right: 0,
        bottom: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 23
    },
    ButtonView: {
        backgroundColor: 'white',
        width: '100%',
        height: 120,
    },
    ButtonUnderView: {
        backgroundColor: '#DB3022',
        width: 350,
        height: 50,
        margin: 'auto',
        borderRadius: 50,
      
    },
    AddCart: {
        color: '#FFFFFF',
        fontFamily: 'Metropolis-Medium',
        fontSize: 17,
        margin: 'auto'
    }
})