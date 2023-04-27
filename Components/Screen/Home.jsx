import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect ,useState  } from 'react'
import Navbar from './Navbar'
import Product from './Product'
const Home = () => {
  return (
    <View>
       <Navbar/> 
      <Text style={styles.txt}>Welcome To Redux Toolkit</Text>
      <View>
        <Product/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  txt:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  }
})