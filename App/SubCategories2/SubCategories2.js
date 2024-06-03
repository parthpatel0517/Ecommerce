import { View, Text, ScrollView, StatusBar, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { horizontalScale, moderateScale, verticalScale } from '../../assets/Metrics/Metrics'
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

export default function SubCategories2() {
    const ProductCard = ({ v }) => (

        <View style={styles.CategorisView}>
            <View style={styles.Options}><Text style={styles.OptionsText}>{v.title}</Text></View>

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
                <Text style={styles.ArrowText}>Women's tops</Text>
                <MaterialIcons name="search" size={30} color="black" style={{marginTop:25}}/>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <ProductCard v={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
            />
            <View style={styles.FilterOptions}>
        <FontAwesome name="wifi" size={26} color="black" /><Text style={styles.filterText}>Filters</Text>
        <FontAwesome name="arrows-v" size={26} color="black" /><Text style={styles.filterText}>Price:lowest to high</Text>
        <FontAwesome name="th" size={26} color="black" />
      </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
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
        marginTop: 22
    },
    KeyboardArrow: {
        marginTop: 16,
        marginLeft: -15
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
        marginTop:4
        
      },
})