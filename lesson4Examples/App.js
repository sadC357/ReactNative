import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import colors from './app/config/colors';
import MyButton from './app/components/MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight 
        style={styles.button}
        onPress={()=>console.log("pressed")}
        underlayColor={colors.pink}
      >
        <Text style={styles.text}>HELLO</Text>
      </TouchableHighlight>

      <MyButton/>

      <MyButton title="HI"/>

      <MyButton 
        title="HEY"
        onPress={()=>console.log("hey")}
      />

      <MyButton 
        title="WOAH"
        onPress={()=>console.log("woah")}
        underlayColor={colors.lavender}
      />

      <MyButton 
        title="yay"
        onPress={()=>console.log("yay")}
        underlayColor={colors.green}
        backgroundColor={colors.lavender}
        borderColor={colors.purple}
        text={colors.navyBlue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
