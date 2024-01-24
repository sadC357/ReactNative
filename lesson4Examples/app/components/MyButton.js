import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';


function MyButton({title="", onPress}) {
    return (
        <View 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    }
})
export default MyButton;
