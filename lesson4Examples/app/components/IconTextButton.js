import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function IconTextButton({title="Croissant",name="food-croissant",color=colors.pink,size=24,
onPress=()=>console.log("default"),underlayColor=colors.maroon,}) {
    return(
        <TouchableHighlight 
            style={[styles.button,{borderColor:color}]}
            onPress={onPress}
            underlayColor={underlayColor}
        >
            <View style={styles.buttonContent}>
              <MaterialCommunityIcons name={name} size={size} color={color}/>
              <Text style={[styles.text,{color:color,fontSize:size}]}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  button:{
    height:100,
    width:200,
    borderRadius:50,
    backgroundColor:colors.navyBlue,
    borderWidth:5,
    borderColor:colors.lavender,
    justifyContent:"space-around",
    alignItems:"center",
    margin:10,
  },
  buttonContent:{
    flexDirection:"row",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:colors.navyBlue,
    paddingLeft:20,
  },
})

export default IconTextButton;