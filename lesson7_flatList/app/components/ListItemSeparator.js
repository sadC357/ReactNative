import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import colors from '../config/colors';

export default function ListItemSeparator({color=colors.primary}) {
  return (
    <View 
        style={[styles.separator,{backgroundColor:color}]}
    />
  )
}

const styles = StyleSheet.create({
    separator:{
        width:"100%",
        height:15,
        backgroundColor:"pink",
    },
})