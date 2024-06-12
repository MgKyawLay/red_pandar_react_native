import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Padding, Size} from '../../helpers/enums/styles';
import {Button, IconButton, MD3LightTheme, TextInput} from 'react-native-paper';
import Spacer from '../../components/Spacer';
import Divider from '../../components/Divider';
import GoogleIcon from '../../assets/svgs/GoogleIcon';
import GithubIcon from '../../assets/svgs/GithubIcon';
import LinkedIn from '../../assets/svgs/LinkedinIcon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Login</Text>
      <Spacer height={30} />
      <TextInput placeholder="Email" style={styles.inputStyle} />
      <Spacer height={30} />
      <TextInput
        placeholder="Password"
        style={styles.inputStyle}
        secureTextEntry
      />
      <Spacer height={30} />
      <Button mode="elevated" style={styles.buttonStyle}>
        <Text style={styles.buttonStyle}>Login</Text>
      </Button>
      <Spacer height={10} />
      <Divider text={'OR'} />
      <Spacer height={10} />
      <Button mode="elevated" style={styles.buttonStyle}>
        <Text style={styles.buttonStyle}>Sign Up</Text>
      </Button>
      <View style={styles.iconBox}>
        <GoogleIcon size={Size.XL} />
        <GithubIcon size={Size.XL} />
        <LinkedIn size={Size.XL} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: Padding.Medium,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: MD3LightTheme.colors.primary,
    color: 'white',
    width: '100%',
  },
  header: {
    fontSize: Size.ExtraLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  iconBox: {
    width: '100%',
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    padding: Padding.Medium,
  },
});
