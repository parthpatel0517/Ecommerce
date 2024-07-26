import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale, verticalScale } from '../../../assets/Metrics/Metrics'
import Collapsible from 'react-native-collapsible';

const data = [
    {
        id: 1,
        title: 'T-shirts',

    },
    {
        id: 2,
        title: 'Crop tops',

    },
    {
        id: 3,
        title: 'Blouses',

    },
    {
        id: 4,
        title: 'Shirt',

    }
]
const Data2 = [
    {
        id: 1,
        img: require('../../../assets/img/see_you.png'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    },
    {
        id: 2,
        img: require('../../../assets/img/see_you.png'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    },
    {
        id: 3,
        img: require('../../../assets/img/see_you.png'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    },
    {
        id: 4,
        img: require('../../../assets/img/see_you.png'),
        title: 'Mango',
        SubTitle: 'T-Shirt SPANISH',
        price: 9
    }
]
export default function shhoping({route, navigation }) {
    const ProductCard = ({ v }) => (

        <View style={styles.CategorisView}>
            <View style={styles.Options}><Text style={styles.OptionsText}>{v.title}</Text></View>

        </View>
    )
    const ProductData = ({ v }) => (
        <TouchableOpacity onPress={() => navigation.navigate("ProductCard")}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.productMainView}>
                <View style={styles.productImg}>
                    <Image source={v.img} style={{ width: '100%', height: '100%',borderTopLeftRadius:15,borderTopRightRadius:15}} />   
                </View>
                <View>
                <TouchableOpacity style={{zIndex:999}}><FontAwesome name="heart-o" size={20} color="black" style={styles.heart} /></TouchableOpacity>
                </View>
                <View style={styles.productText}>
                    <View style={styles.iconview}>
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
                        <Text style={{ color: '#9B9B9B' }}>(3)</Text>
                    </View>
                    <Text style={styles.mangoText}>{v.title}</Text>
                    <Text style={styles.tShirt}>{v.SubTitle}</Text>
                    <Text style={styles.price}>{v.price}$</Text>
                </View>

            </View>
        </View>
        </TouchableOpacity>
    )
    return (
        <ScrollView style={styles.container}>
            <StatusBar
                animated={true}
                translucent backgroundColor="transparent"
                barStyle="dark-content"
            />
            {/* <View style={styles.ArrowView}>
                <Text style={styles.KeyboardArrow}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
                <Text style={styles.ArrowText}>Women's tops</Text>
                <TouchableOpacity><MaterialIcons name="search" size={30} color="black" style={{ marginTop: 25 }} /></TouchableOpacity>
            </View> */}
            <View style={{ backgroundColor: 'white', marginBottom: 25 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =><ProductCard v={item} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

                <View style={styles.FilterOptions}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navigation.navigate("filter")}><MaterialIcons name="filter-list" size={30} color="black" /><Text style={styles.filterText}>Filters</Text></TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row'}}><FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filterText}>Price:lowest to high</Text></TouchableOpacity>
                    <TouchableOpacity><FontAwesome name="th-list" size={26} color="black" /></TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={Data2}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => <TouchableOpacity><ProductData v={item} /></TouchableOpacity>}
                keyExtractor={item => item.id}
            // horizontal={true}
            />




        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: horizontalScale(15),
        backgroundColor: '#F9F9F9'
    },
    ArrowView: {
        width: '100%',
        height: verticalScale(80),
        marginTop: verticalScale(40),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ArrowText: {
        color: 'black',
        fontSize: moderateScale(23),
        marginTop: verticalScale(22)
    },
    KeyboardArrow: {
        marginTop: verticalScale(16),
        marginLeft: horizontalScale(-15)
    },
    CategorisView: {
        paddingRight: horizontalScale(10),
    },
    Options: {
        width: horizontalScale(90),
        height: verticalScale(35),
        backgroundColor: 'black',
        borderRadius: horizontalScale(100),
        justifyContent: 'center',
        alignItems: 'center',

    },
    OptionsText: {
        fontSize: moderateScale(14),
        fontFamily: 'Metropolis-Bold',
        color: 'white',

    },
    FilterOptions: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F9F9F9',
        marginBottom: verticalScale(20)
    },
    filterText: {
        color: 'black',
        paddingRight: verticalScale(60),
        marginTop: verticalScale(4),
        marginLeft:horizontalScale(10)
    },
    productMainView: {
        width: horizontalScale(170),
        height: verticalScale(350),
        marginBottom:verticalScale(40)
        
    },
    productImg: {
        width: '100%',
        height: '68%',
        position: 'relative',
    },
    heart: {
        position: 'absolute',
        bottom: verticalScale(-20),
        right: 0,
        backgroundColor: 'white',
        borderRadius: moderateScale(20),
        padding: horizontalScale(10),
        padding: verticalScale(10),
        
    },
    productText: {
        width: '100%',
        height: '32%',
        backgroundColor:'white',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        elevation:2
    },
    iconview: {
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(4),
        marginTop: verticalScale(5),

    },
    mangoText: {
        color: '#9B9B9B',
        fontSize: 15,
        paddingHorizontal: horizontalScale(6),
        marginTop: verticalScale(6),
        fontFamily: 'Metropolis-SemiBold'
    },
    tShirt: {
        color: 'black',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: moderateScale(18),
        paddingHorizontal: horizontalScale(6),
        marginTop:verticalScale(3)
    },
    price: {
        color: 'black',
        fontSize: moderateScale(16),
        fontFamily: 'Metropolis-Medium',
        paddingHorizontal: horizontalScale(7),
        marginTop:verticalScale(4)
    },


})