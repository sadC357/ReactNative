import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import colors from '../config/colors';

function ListItem({name,age,favActivity}) {
  return(
    <View style={styles.itemRowContainer}>
    <Text style={styles.rowText}>{name}, {age}</Text>
    <Text style={{color:colors.secondary}}>{favActivity}</Text>
   </View>
  );
}


const styles = StyleSheet.create({
    itemRowContainer:{
        backgroundColor:colors.dark,
        padding:5,
      },
      rowText:{
        fontSize:16,
        color:colors.medium,
        fontWeight:"bold",
      },
});

export default ListItem; 