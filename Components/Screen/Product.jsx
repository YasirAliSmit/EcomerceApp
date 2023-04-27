

import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { add } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
const Product = () => {
    const dispatch = useDispatch()
    const [product, setProducts] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const url = `https://fakestoreapi.com/products`
                const res = await fetch(url)
                const data = await res.json()
                setProducts(data)
                    
            } catch (error) {
                console.log(`error => ${error}`)
            }
        }
        fetchProduct()
    }, [])



    const handleAdd = (product) => {
dispatch(add(product))
    }


    return (
        <View>
            {product.length ? <FlatList data={product} renderItem={({ item }) => {
                return (
                    <View style={styles.list}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View>

                            <Text>Title :{item.title}</Text>
                            <Text>Item:id{item.id}</Text>
                            <Text>Item:Price ${item.price}</Text>
                            <TouchableOpacity onPress={() => handleAdd(item)} style={styles.btn}><Text style={styles.btntxt}>Add To Cart</Text></TouchableOpacity>
                        </View>
                    </View>
                )
            }} /> : null}
        </View>
    )
}

export default Product

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
        fontFamily:'Montserrat-BoldItalic',
         color: 'white',
        
    }
})