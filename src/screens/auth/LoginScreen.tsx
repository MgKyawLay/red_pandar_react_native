import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Padding} from '../../helpers/enums/styles';
import {Button, MD3LightTheme, TextInput} from 'react-native-paper';
import Spacer from '../../components/Spacer';

const LoginScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="Email" style={styles.inputStyle}/>
      <Spacer height={30} />
      <TextInput placeholder="Password" style={styles.inputStyle} secureTextEntry/>
      <Spacer height={30} />
      <Button mode="elevated" style={styles.buttonStyle}>
        <Text style={styles.buttonStyle}>Login</Text>
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: Padding.Medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: MD3LightTheme.colors.primary,
    color: 'white',
    width:  '100%',
  },
});
