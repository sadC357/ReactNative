import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import colors from '../config/colors';

function IconButton({title="0", onPress, 
underlayColor=colors.pink,
backgroundColor, borderColor, text, name="xbox"}) {
    return(
        <TouchableHighlight 
        style={[styles.button,
            {backgroundColor:backgroundColor,
            borderColor:borderColor,
            text:text}]}
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <FontAwesome6 name={name} size={24} color={borderColor} />
      </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  button:{
    height:100,
    width:100,
    borderRadius:50, //when br is half side, it makes a circle
    backgroundColor:colors.green,
    borderWidth:5,
    borderColor:colors.navyBlue,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:18,
    fontWeight:"bold",
    color:colors.navyBlue,
  },
})

export default IconButton;