import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
const Store = configureStore({
    reducer:{
     cart : cartReducer
    }
})
export default Store

const styles = StyleSheet.create({})