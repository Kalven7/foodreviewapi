import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/dataContext'

const Teste = () => {
    const data = useContext(Context)
  return (
    <View style = {styles.container}>
      <Text>
        {data}
      </Text>
    </View>
  )
}
export default Teste