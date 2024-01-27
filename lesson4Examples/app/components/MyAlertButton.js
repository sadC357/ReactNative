import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

const readyAlert=()=>{
    Alert.alert("Are You Ready?","Click One",[
      {text:"Yes",onPress:()=>console.log("Pressed Yes")},
      {text:"Maybe",onPress:()=>console.log("Pressed Maybe")},
      {text:"No",onPress:()=>console.log("Pressed No")},
    ]);
  }

function MyAlertButton({title="0", onPress, backgroundColor, borderColor}) {
    return(
        <TouchableOpacity 
        style={[styles.button,
            {backgroundColor:backgroundColor,
            borderColor:borderColor,}]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button:{
    height:100,
    width:100,
    borderRadius:10, 
    backgroundColor:colors.pink,
    borderWidth:5,
    borderColor:colors.navyBlue,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:18,
    fontWeight:"bold",
    color:colors.maroon,
  },
})

export default MyAlertButton;