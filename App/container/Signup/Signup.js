import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import { horizontalScale, verticalScale,moderateScale } from '../../../assets/Metrics/Metrics';

export default function Signup() {
  return (
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />

      <Text style={{ marginLeft: verticalScale(-13),marginBottom:horizontalScale(20) }}><MaterialIcons name="keyboard-arrow-left" size={50} color="black" /></Text>
      <Text style={{ fontFamily: 'Metropolis-Bold', fontSize: moderateScale(34), color: 'black', marginBottom: verticalScale(50), }}>Sign Up</Text>
      <View>
        <TextInput

          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#9B9B9B'

        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='#9B9B9B'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          placeholderTextColor='#9B9B9B'
        />
        <View style={{ flexDirection: 'row', marginLeft: horizontalScale(210), alignItems: 'center', marginTop: verticalScale(13) }}>
          <Text style={{ color: 'black', fontSize: moderateScale(14) }}>Already have an account?</Text>
          <Text><MaterialIcons name="arrow-right-alt" size={35} color="red" /></Text>
        </View>

        <TouchableOpacity style={{
          width: '100%',
          backgroundColor: '#DB3022',
          marginVertical: 10,
          paddingVertical: 16,
          color: 'white',
          borderRadius: 50,

          fontWeight: '500',
          alignItems: 'center',
          marginTop: 30
        }}><Text style={{ color: 'white', fontSize: moderateScale(16), fontFamily: 'Metropolis-Medium' }}>SIGN UP</Text></TouchableOpacity>
      </View>
      <Text style={{
        color: '#222222',
        textAlign: 'center',
        marginTop: 165,
        marginHorizontal:'auto',
        fontSize: moderateScale(15)
      }}>Or sign up with social account</Text>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:70,
        marginTop:30

      }}>


       <TouchableOpacity   style={{
          marginTop:5,
         shadowColor: 'rgba(.4,.4,.4, .4)', // IOS
         shadowOffset: { height: 1, width: 1 }, // IOS
         shadowOpacity: 1, // IOS
         shadowRadius: 1, //IOS
         backgroundColor: '#fff',
         elevation: 2, // Android
         height: 80,
         marginLeft:30,
         marginTop:1,
         width: 80,
         borderRadius: 15,
         justifyContent: 'center',
         alignItems: 'center',
         flexDirection: 'row',
        }}><Image source={require('../../../assets/img/search_copy.png')} style={{width:39,height:39}} />
     </TouchableOpacity> 
        <TouchableOpacity style={{
             shadowColor: 'rgba(0,0,0, .4)', // IOS
             shadowOffset: { height: 1, width: 1 }, // IOS
             shadowOpacity: 1, // IOS
             shadowRadius: 1, //IOS,
             backgroundColor: '#fff',
             elevation: 2, // Android
             height: 80,
             marginTop:2,
             borderRadius: 15,
             width: 80,
             justifyContent: 'center',
             alignItems: 'center',
             flexDirection: 'row',
        }}><Foundation name="social-facebook" size={50} color="#3B5998"/></TouchableOpacity>


      </View>
    </View>


  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: 20
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    paddingVertical: 20,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: '500',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,

  }
})


