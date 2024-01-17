import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  //have javascript
  const {height, width} = Dimensions.get('window');
	console.log("height " + height + " width " + width);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'purple',
      alignItems: 'center',
      //justifyContent: 'center',
      paddingTop:30,
    },
    textContainer:{
      backgroundColor:'lightgrey',
      width:width*.85,//width=85% of the screen
    },
    text:{
      fontSize:60,
      color:'blue',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {/* comment */}
        <Text style={styles.text}>HELLO</Text>
        <Text style={{color:'red',fontSize:20}}>It's very cold</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}