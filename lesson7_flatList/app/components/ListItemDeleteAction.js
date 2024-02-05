import { StyleSheet, View ,TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

        <View style={styles.container}>
            <MaterialCommunityIcons name="trash-can" size={35} color="white" />
        </View>

    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    }
})