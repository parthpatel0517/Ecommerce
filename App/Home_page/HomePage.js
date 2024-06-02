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
        <Image source={require('../../assets/img/Graphic.png')} style={{ width: '100%', height: '100%' }} />
        <Text style={style.FistViewText}>New collection</Text>
      </View>


      <View style={style.DirectView}>
        <View style={style.SecondView}>
          <View style={style.SummSale}>
            <View style={style.SumTextView}>
              <Text style={style.SummText1}>Summer Sale</Text>
            </View>


          </View>
          <View style={style.BlackView}>
            <Image source={require('../../assets/img/Graphic1.png')} style={{ width: '100%', height: '100%' }} />
            <Text style={style.BlackText}>Black</Text>
          </View>
        </View>

        <View style={style.BodieView}>
          <Image source={require('../../assets/img/Graphic3.png')} style={{ width: '100%', height: '100%' }}/>
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
    backgroundColor: 'red',
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
    backgroundColor: 'red',
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
    backgroundColor: 'red',
    width: '50%',
    height: '100%',
    position:'relative'
  },
  hoodieTextView:{
    position:'absolute',
    bottom:170,
    left:50,

  },
  hoodieText : {
    color:'white',
    fontSize:35, 
    fontFamily: 'Metropolis-Bold', 
  }

})







// import React from 'react';
// import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <Image source={require('./assets/back.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>9:41</Text>
//         <TouchableOpacity>
//           <Image source={require('./assets/search.png')} style={styles.searchIcon} />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.filterBar}>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Filters</Text>
//         </TouchableOpacity>
//         <View style={styles.sortContainer}>
//           <TouchableOpacity style={styles.sortButton}>
//             <Image source={require('./assets/sort.png')} style={styles.sortIcon} />
//           </TouchableOpacity>
//           <Text style={styles.sortText}>Price: lowest to high</Text>
//         </View>
//         <TouchableOpacity style={styles.gridButton}>
//           <Image source={require('./assets/grid.png')} style={styles.gridIcon} />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.productList}>
//         <View style={styles.productItem}>
//           <Image source={require('./assets/product1.jpg')} style={styles.productImage} />
//           <View style={styles.productInfo}>
//             <Text style={styles.productName}>Pullover</Text>
//             <Text style={styles.productBrand}>Mango</Text>
//             <View style={styles.ratingContainer}>
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Text style={styles.ratingText}>(3)</Text>
//             </View>
//             <Text style={styles.productPrice}>51$</Text>
//           </View>
//           <TouchableOpacity style={styles.heartButton}>
//             <Image source={require('./assets/heart.png')} style={styles.heartIcon} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.productItem}>
//           <Image source={require('./assets/product2.jpg')} style={styles.productImage} />
//           <View style={styles.productInfo}>
//             <Text style={styles.productName}>Pullover</Text>
//             <Text style={styles.productBrand}>Mango</Text>
//             <View style={styles.ratingContainer}>
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Text style={styles.ratingText}>(0)</Text>
//             </View>
//           </View>
//           <TouchableOpacity style={styles.heartButton}>
//             <Image source={require('./assets/heart.png')} style={styles.heartIcon} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.productItem}>
//           <Image source={require('./assets/product3.jpg')} style={styles.productImage} />
//           <View style={styles.productInfo}>
//             <Text style={styles.productName}>Pullover</Text>
//             <Text style={styles.productBrand}>Mango</Text>
//             <View style={styles.ratingContainer}>
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Text style={styles.ratingText}>(10)</Text>
//             </View>
//           </View>
//           <TouchableOpacity style={styles.heartButton}>
//             <Image source={require('./assets/heart.png')} style={styles.heartIcon} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.productItem}>
//           <Image source={require('./assets/product4.jpg')} style={styles.productImage} />
//           <View style={styles.productInfo}>
//             <Text style={styles.productName}>Pullover</Text>
//             <Text style={styles.productBrand}>Mango</Text>
//             <View style={styles.ratingContainer}>
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Image source={require('./assets/star.png')} style={styles.starIcon} />
//               <Text style={styles.ratingText}>(3)</Text>
//             </View>
//             <Text style={styles.productPrice}>51$</Text>
//           </View>
//           <TouchableOpacity style={styles.heartButton}>
//             <Image source={require('./assets/heart.png')} style={styles.heartIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image source={require('./assets/home.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image source={require('./assets/shop.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Shop</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image source={require('./assets/bag.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Bag</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image source={require('./assets/favorite.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Favorites</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton}>
//           <Image source={require('./assets/profile.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Profile</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fff',
//     elevation: 5,
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   searchIcon: {
//     width: 24,
//     height: 24,
//   },
//   filterBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fff',
//     elevation: 5,
//   },
//   filterButton: {
//     padding: 8,
//   },
//   filterText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   sortContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   sortButton: {
//     padding: 8,
//   },
//   sortIcon: {
//     width: 16,
//     height: 16,
//   },
//   sortText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   gridButton: {
//     padding: 8,
//   },
//   gridIcon: {
//     width: 24,
//     height: 24,
//   },
//   productList: {
//     flex: 1,
//     padding: 16,
//   },
//   productItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     marginBottom: 8,
//     backgroundColor: '#fff',
//     elevation: 5,
//     borderRadius: 8,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//   },
//   productInfo: {
//     flex: 1,
//     marginLeft: 16,
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   productBrand: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 8,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   starIcon: {
//     width: 16,
//     height: 16,
//   },
//   ratingText: {
//     fontSize: 14,
//     marginLeft: 4,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   heartButton: {
//     padding: 8,
//   },
//   heartIcon: {
//     width: 24,
//     height: 24,
//   },
//   footer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     padding: 16,
//     backgroundColor: '#fff',
//     elevation: 5,
//   },
//   footerButton: {
//     alignItems: 'center',
//   },
//   footerIcon: {
//     width: 24,
//     height: 24,
//     marginBottom: 4,
//   },
//   footerText: {
//     fontSize: 12,
//     color: '#000',
//   },
// });

// export default App;