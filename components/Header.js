import {styles} from './components.styles';
import {View, Text} from 'react-native';
import React from 'react';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>Shopping List</Text>
        </View>
    );
}