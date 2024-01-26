import React from 'react';
import {TouchableHighlight, Text, View, StyleSheet} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function IconTextButton({title="food",name="xbox",onPress,underlayColor=colors.green,borderColor=colors.pink}) {
    return(
        <View>
        <TouchableHighlight 
            style={[styles.button,
                {borderColor:borderColor}]}
            onPress={onPress}
            underlayColor={underlayColor}
        >
            <MaterialCommunityIcons name="food-croissant" size={24} color="black">
                <Text>{title}</Text>
            </MaterialCommunityIcons>
        </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    alignContent:"space-between"
  },
  button:{
    height:70,
    width:200,
    borderRadius:50, //when br is half side, it makes a circle
    backgroundColor:colors.lavender,
    borderWidth:5,
    borderColor:colors.lavender,
    justifyContent:"space-around",
    alignItems:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
  },
})

export default IconTextButton;