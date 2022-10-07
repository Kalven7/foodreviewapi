import { SafeAreaView, StyleSheet, Text, Button, } from 'react-native'
import React, { useContext } from 'react'
import Teste from '../components/Teste'
import { Context,Provider } from '../context/dataContext'



const Home = () => {
  const actualState = useContext(Context)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}> {actualState.state.counter} </Text>
      <Button title="aumentar"
      onPress={() => actualState.dispatch({type: "aumentar", payload: 1})}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40
  }
})

export default () => {
  return (
    <Provider>
      <Home />
    </Provider>
  )
}