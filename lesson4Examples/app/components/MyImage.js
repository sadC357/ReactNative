import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import colors from '../config/colors';

function MyImage({source,onPress, height,width}) {
    return(
        <Image
            style={[styles.image,{height:height,width:width}]}
            source={source}
        />
    );
}

const styles = StyleSheet.create({
  image:{
    height:100,
    width:100,
    borderRadius:5,
  },
})

export default MyImage;