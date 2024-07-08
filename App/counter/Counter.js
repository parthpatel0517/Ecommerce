import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/action/counter.action'


export default function Counter() {
    const dispatch = useDispatch()

    const counter = useSelector(state => state.count)

    const handalInc = ()=>{
        dispatch(increment())
    }

    const handalDec = ()=>{
        dispatch(decrement())
    }

  return (
    
    <View>
      <Text>Counter</Text>
     {/* 1 */}
      <TouchableOpacity onPress={handalInc}> 
            <Text>+</Text>
        </TouchableOpacity>

        <Text>{counter.count}</Text>

        <TouchableOpacity onPress={handalDec}>
            <Text>-</Text>
        </TouchableOpacity>

    </View>
  )
}