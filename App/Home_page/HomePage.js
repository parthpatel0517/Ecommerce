import { View, Text, StatusBar, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList, VirtualizedList } from 'react-native'
import React, { startTransition } from 'react'
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
const Data1 = [
  {
    id: 1,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  },
  {
    id: 0,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  },
  {
    id: 2,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  },
  {
    id: 3,
    title: 'Sittly',
    subtitle: 'Sport Dress',
    img: require('../../assets/img/Dress1.jpg'),
    price: 19,
    discount: 22
  }
]
export default function HomePage() {
  const ProductCard = ({ v }) => (
    <View style={{ marginHorizontal: 10 }}>

      <Image source={v.img} style={{ width: 170, height: 250, borderRadius: 10 }}></Image>

      <View style={style.iconview}>
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <FontAwesome name="star" size={20} style={{ color: '#FFBA49' }} />
        <Text style={{ color: '#9B9B9B' }}>(10)</Text>
      </View>

      <Text style={style.title}>{v.title}</Text>
      <Text style={style.subtitle}>{v.subtitle}</Text>
      <View style={style.PriceView}>
        <Text style={style.discount}>{v.discount}$</Text>
        <Text style={style.price}>{v.price}$</Text>

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
      <View style={style.mainview}>
        <ImageBackground
          source={require('../../assets/img/pexels-godisable-jacob-226636-896293.jpg')}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
        </ImageBackground>
        <View style={{ width: horizontalScale(200) }}>
          <Text style={style.Fashionsale}>Fashion Sale</Text>

          <TouchableOpacity style={style.checkbutton}>
            <Text style={style.CheckText}>Check</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ paddingHorizontal: 5 }}>

        <View style={style.SaleView}>
          <View>
            <Text style={style.SaleText}>Sale </Text>
            <Text style={style.SummerText}>Super summer sale </Text>
          </View>


          <Text style={style.ViewAll}>View all</Text>

        </View>

        <FlatList
          data={Data}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </View>
      <View style={{ paddingHorizontal: 5 }}>

        <View style={style.SaleView}>
          <View>
            <Text style={style.SaleText}>New </Text>
            <Text style={style.SummerText}>You've never seen it before! </Text>
          </View>


          <Text style={style.ViewAll}>View all</Text>

        </View>

        <FlatList
          data={Data1}
          renderItem={({ item }) => <ProductCard v={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />

      </View>
      <View style={style.FisrtNew}>
        <TouchableOpacity><Image source={require('../../assets/img/Graphic.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
        <Text style={style.FistViewText}>New collection</Text>
      </View>


      <View style={style.DirectView}>
        <View style={style.SecondView}>
          <View style={style.SummSale}>
            <View style={style.SumTextView}>
              <TouchableOpacity><Text style={style.SummText1}>Summer Sale</Text></TouchableOpacity>
            </View>


          </View>
          <View style={style.BlackView}>
            <TouchableOpacity><Image source={require('../../assets/img/Graphic1.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
            <Text style={style.BlackText}>Black</Text>
          </View>
        </View>

        <View style={style.BodieView}>
        <TouchableOpacity><Image source={require('../../assets/img/Graphic3.png')} style={{ width: '100%', height: '100%' }} /></TouchableOpacity>
          <View style={style.hoodieTextView}>
        <Text style={style.hoodieText}>Men's hoodies</Text>
          </View>

        </View>
      </View>

    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  mainview: {
    width: '100%',
    height: verticalScale(570),
    position: 'relative'
  },
  Fashionsale: {
    color: 'white',
    fontSize: moderateScale(54),
    position: 'absolute',
    bottom: moderateScale(130),
    left: moderateScale(12),
    fontFamily: 'Metropolis-Black'
  },

  checkbutton: {
    width: verticalScale(150),
    backgroundColor: '#DB3022',
    height: verticalScale(40),
    alignItems: 'center',
    padding: 10,
    borderRadius: moderateScale(50),
    position: 'absolute',
    bottom: moderateScale(80),
    left: moderateScale(12),

  },
  CheckText: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: 'Metropolis-Medium'
  },
  SaleView: {
    flex: 1,
    marginTop: 18,
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    marginBottom: 30
  },
  SaleText: {
    color: '#222222',
    fontSize: 32,
    fontFamily: 'Metropolis-Bold'
  },
  SummerText: {
    color: '#9B9B9B',
    fontSize: 11,
    fontFamily: 'Metropolis-Regular'
  },
  ViewAll: {
    paddingRight: 10,
    marginTop: 19,
    fontSize: 13,
    fontFamily: 'Metropolis-Regular',
    color: 'black'
  },
  title: {
    color: 'black',
    paddingHorizontal: 4,
    fontSize: 13,
    fontFamily: 'Metropolis-Regular'
  },
  subtitle: {
    color: 'black',
    paddingHorizontal: 4,
    fontSize: 19,
    fontFamily: 'Metropolis-SemiBold'
  },
  iconview: {
    flexDirection: 'row',
    paddingHorizontal: 2,
    marginBottom: 10,
    marginTop: 6
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
  FisrtNew: {
    marginTop: 60,
    width: '100%',
    height: 390,
    position: 'relative'
  },
  FistViewText: {
    color: 'white',
    fontFamily: 'Metropolis-Bold',
    fontSize: 38,
    position: 'absolute',
    bottom: 17,
    right: 22
  },

  SummSale: {
    backgroundColor: 'white',
    width: '100%',
    height: '50%',
    position: 'relative'
  },
  SumTextView: {
    width: 150,
    height: 100,
    position: 'absolute',
    bottom: 30,
    left: 18
  },
  SummText1: {
    color: '#DB3022',
    fontSize: 35,
    fontFamily: 'Metropolis-Bold',
  },
  BlackView: {
    width: '100%',
    height: '50%',
    position: 'relative'
  },
  BlackText: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Metropolis-Bold',
    position: 'absolute',
    bottom: 10,
    left: 18
  },
  SecondView: {
    width: '50%',
    height: 400
  },
  DirectView: {
    width: '100%',
    height: 400,
    flexDirection: 'row'
  },
  BodieView: {
   
    width: '50%',
    height: '100%',
    position: 'relative'
  },
  hoodieTextView: {
    position: 'absolute',
    bottom: 170,
    left: 50,
  },

  hoodieText: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Metropolis-Bold',
  }

})

