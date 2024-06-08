import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs';
import AppBar from './AppBar';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: (props) => <AppBar {...props}/>
                }}
            >
                <Stack.Screen name='main' component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator