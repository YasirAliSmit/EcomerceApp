import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Product from './Components/Screen/Product'
import Home from './Components/Screen/Home'
import Navigatior from './Components/Navigatior'
const App = () => {
  return (
    <View style={styles.container}>

      <Navigatior/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})