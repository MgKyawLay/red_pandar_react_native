import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigator from './src/navigators/RootNavigator'
import { PaperProvider } from 'react-native-paper'

const App = () => {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})