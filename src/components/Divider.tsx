import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Size } from '../helpers/enums/styles';

interface DividerProps {
    text?: string|number;
}

const Divider: React.FC<DividerProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={{...styles.sepratorText, marginHorizontal: !text ? 0 : 10}}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor:'red',
    justifyContent:'center',
    paddingVertical: 10,
    alignItems:'center',
  },
  line: {
    // width: '100%',
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  sepratorText: {
    color: 'black',
    fontSize: Size.Medium,
    fontWeight: 'condensed',
  }
});
