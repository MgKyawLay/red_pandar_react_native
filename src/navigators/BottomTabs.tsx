import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{}}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarIcon: 'home',
            }} />
        </Tab.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})