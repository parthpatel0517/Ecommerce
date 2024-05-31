import { View, Text, StatusBar, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, VirtualizedList } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../assets/Metrics/Metrics'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    img: require('../../assets/img/shopping.webp'),
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



export default function HomePage() {
  const ProductCard = ({ v }) => (
    <View style={{ marginTop: 19, marginBottom: 5000 ,paddingHorizontal:10 }}>
      <View style={{ width: 200, height: 250, backgroundColor: 'white' }}>
        <Image source={v.img} style={{ width: '100%', height: '100%' ,borderRadius:10}}></Image>
        <View style={style.iconview}>
        <FontAwesome name="star" size={20} style={{color:'#FFBA49'}}/>
        <FontAwesome name="star" size={20} style={{color:'#FFBA49'}}/>
        <FontAwesome name="star" size={20} style={{color:'#FFBA49'}}/>
        <FontAwesome name="star" size={20} style={{color:'#FFBA49'}}/>
        <FontAwesome name="star" size={20} style={{color:'#FFBA49'}}/>
        </View>

        <Text style={{ color: 'black', fontSize: 12, fontFamily: 'Metropolis-Regular' }}>{v.title}</Text>
        <Text style={{ color: 'black', fontSize: 17, fontFamily: 'Metropolis-SemiBold' }}>{v.subtitle}</Text>
        <Text>{v.price}</Text>


      </View>
    </View>
  )
  return (
    <ScrollView style={style.container}>
      <StatusBar
        animated={true}
        translucent backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{ width: '100%', height: verticalScale(570), position: 'relative' }}>
        <ImageBackground
          source={require('../../assets/img/pexels-godisable-jacob-226636-896293.jpg')}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
        </ImageBackground>
        <View style={{ width: horizontalScale(200) }}>
          <Text style={{
            color: 'white',
            fontSize: moderateScale(54),
            position: 'absolute',
            bottom: moderateScale(130),
            left: moderateScale(20),
            fontFamily: 'Metropolis-Black'
          }}>Fashion Sale</Text>

          <TouchableOpacity style={{
            width: verticalScale(150),
            backgroundColor: '#DB3022',
            height: verticalScale(40),
            alignItems: 'center',
            padding: 10,
            borderRadius: moderateScale(50),
            position: 'absolute',
            bottom: moderateScale(80),
            left: moderateScale(10),
          }}>
            <Text style={{ color: 'white', fontSize: moderateScale(18), fontFamily: 'Metropolis-Medium' }}>Check</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 12 }}>

        <View style={{
          flex: 1,
          marginTop: 18,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View>
            <Text style={{ color: 'black', fontSize: 34, fontFamily: 'Metropolis-Bold' }}>Sale </Text>
            <Text style={{ color: '#9B9B9B', fontSize: 11, fontFamily: 'Metropolis-Regular' }}>Super summer sale </Text>
          </View>


          <Text style={{
            paddingRight: 10,
            marginTop: 19,
            fontSize: 13,
            fontFamily: 'Metropolis-Regular',
            color: 'black'
          }}>View all</Text>

        </View>

        <FlatList
          data={Data}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />


      </View>

    </ScrollView>
  )
}

const style = StyleSheet.create([
  container = {
    flex: 1,
    position:'relative',
    backgroundColor: 'white'
  },
  iconview = {
    flexDirection:'row'
  }

])