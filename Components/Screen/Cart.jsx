import { FlatList, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch()
  const [item, setItem] = useState([])
  const products = useSelector(state => state.cart)
  useEffect(() => {
    setItem(products)
  }, [products])
  const handleRemove = (id) => {
    dispatch(remove(id))
  }
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <FlatList data={item} renderItem={({ item }) => {
        return (
          
          <View style={styles.list}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View>

              <Text>Title :{item.title}</Text>
              <Text>Item:id{item.id}</Text>
              <Text>Item:Price ${item.price}</Text>
              <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.btn}><Text style={styles.btntxt}>Remove from Cart</Text></TouchableOpacity>
          </View>
      </View>
        )
      }} />
      <View>

      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  list: {
      flexDirection: 'row',
      height: 120,
      width: '100%',
      borderWidth: 1,
      borderColor: 'black',
      marginVertical: 10
  },
  itemImage: {
      width: 90,
      height: 100,
      objectFit: 'contain'
  },
  btn: {
      backgroundColor: 'blue',
      padding: 5,
      width: 100,
      borderRadius: 10
  },
  btntxt: {
      color: 'white',
      fontWeight: 'bold',
      textAlign:'center',
      textAlign:'center'
  }
})