import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, MD3LightTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

const AppBar = ({ route, options, navigation, back }: any) => {
    const title = getHeaderTitle(options, route.name);
    const colors = MD3LightTheme.colors;
    return (
        <Appbar.Header style={{ backgroundColor: colors.elevation.level1 }}>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} style={{}}/>
        </Appbar.Header>
    )
}

export default AppBar

const styles = StyleSheet.create({})