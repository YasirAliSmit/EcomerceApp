import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Home from './Home'
import Cart from './Cart'
import { useSelector } from 'react-redux';
const Navbar = () => {
   const items = useSelector((state)=>state.cart)
    const navigation = useNavigation();
  return (
    <View style={styles.contain}>
      <Text style={styles.txt}>Redux Store</Text>
      <View style={styles.nav}>
<TouchableOpacity onPress={()=>navigation.navigate('Home')} ><Text style={styles.navtxt} >Home</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('Cart')} ><Text style={styles.navtxt}>Cart</Text></TouchableOpacity>
    <Text style={styles.navtxt}>Cart Items : {items.length} </Text>

          </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    txt:{
        fontWeight:'700',
        textAlign:'center',
        color:'black',
        fontSize:30
    },
    nav:{
        flexDirection:'row',
        justifyContent:'space-evenly',
       
    },
    navtxt:{
        fontWeight:'700',
        textAlign:'center',
        color:'black',
        fontSize:20
    }
})