import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Screen/Home';
import Cart from './Screen/Cart';
import Navbar from './Screen/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Navigatior = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Cart" component={Cart} />
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
            <Stack.Screen options={{headerShown:false}} name="Navbar" component={Navbar} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigatior

const styles = StyleSheet.create({})