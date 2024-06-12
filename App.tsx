import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import {PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const isSignin = false;
  const queryClient = new QueryClient();
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={isSignin ? 'rgb(247,243, 249)' : 'rgb(242,242, 242)'}
        />
        <Toast />
        <RootNavigator />
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
