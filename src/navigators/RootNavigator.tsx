import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import AppBar from './AppBar';
import LoginScreen from '../screens/auth/LoginScreen';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isSignedIn: boolean = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <AppBar {...props} />,
          animation: 'ios',
        }}>
        {!isSignedIn ? (
          <>
            <Stack.Screen
              name="SignIn"
              component={LoginScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="main" component={BottomTabs} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
