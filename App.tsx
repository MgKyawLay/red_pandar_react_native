import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';

const App = () => {
  const isSignin = false;
  return (
    <PaperProvider>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={isSignin ? 'rgb(247,243, 249)' : 'rgb(242,242, 242)'}
      />
      <Toast />
      <RootNavigator />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
