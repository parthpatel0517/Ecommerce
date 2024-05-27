import { View, Text, StatusBar, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomePage() {
  return (
    <ScrollView style={style.container}>
      <StatusBar
        animated={true}
        translucent backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{ width: '100%', height: 720, position: 'relative' }}>
        <ImageBackground
          source={require('../../assets/img/pexels-godisable-jacob-226636-896293.jpg')}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
        </ImageBackground>
        <View style={{ width: 200 }}>
          <Text style={{ color: 'white', fontSize: 50, position: 'absolute', bottom: 150, left: 10, fontFamily: 'Metropolis-Black' }}>Fashion Sale</Text>

          <TouchableOpacity style={{
            width:180,
            backgroundColor: '#DB3022',
            height:50,
            alignItems:'center',
            padding:14,
            borderRadius:50,
            position: 'absolute', 
            bottom: 80, 
            left: 10,
            }}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Metropolis-Medium'}}>Check</Text>
              
              </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
}

const style = StyleSheet.create([
  container = {
    flex: 1,

  },
])