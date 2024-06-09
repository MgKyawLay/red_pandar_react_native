import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface SpacerProps {
  height: number;
  width?: number;
}
const Spacer: React.FC<SpacerProps> = ({height, width}) => {
  return <View style={{height: height, width: width ? width : '100%'}}></View>;
};

export default Spacer;
