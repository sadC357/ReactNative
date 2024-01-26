import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

import colors from '../config/colors';

function MyButton({title="0", onPress, underlayColor=colors.pink,backgroundColor, borderColor,text}) {
    return(
        <TouchableHighlight 
        style={[styles.button,
            {backgroundColor:backgroundColor,
            borderColor:borderColor,
            text:text}]}
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  button:{
    height:50,
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

export default MyButton;