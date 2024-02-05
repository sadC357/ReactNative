import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';

import colors from '../config/colors';

function ListItem({name,age,favActivity,onPress,renderRightActions}) {
  return(
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions} >

        <TouchableOpacity onPress={onPress}>

          <View style={styles.itemRowContainer}>
            <Text style={styles.rowText}>{name}, {age}</Text>
            <Text style={{color:colors.primary}}>{favActivity}</Text>
          </View>
          
        </TouchableOpacity>

      </Swipeable>  
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
    itemRowContainer:{
        backgroundColor:colors.light,
        padding:5,
      },
      rowText:{
        fontSize:16,
        color:colors.medium,
        fontWeight:"bold",
      },
});

export default ListItem; 