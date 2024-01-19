import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.darkGreyContainer}>

        <View style={styles.redBox}>
            <Text>1</Text>
        </View>

        <View style={styles.redBox}>
            <Text>2</Text>
        </View>

        <View style={styles.redBox}>
            <Text>3</Text>
        </View>

      </View>

      <View style={styles.darkGreenContainer}>

        <View style={styles.greenRect}>
        </View>

        <View style={styles.greenRect}>
        </View>

        <View style={styles.greenRect}>
        </View>

      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#a3f5d8",
    alignItems:"center",
    justifyContent: "space-around",
    
  },
  darkGreyContainer: {
    flex:0.2,
    backgroundColor:"gray",
    width:350,
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:40,
    alignItems:"center"
  },
  redBox: {
    backgroundColor:"red",
    width:30,
    height:30,
    alignItems:"center",
    justifyContent:"center",
  },
  darkGreenContainer: {
    flex:0.7,
    backgroundColor:"darkgreen",
    width:350,
    marginBottom:30,
    alignItems:"center",
    justifyContent:"space-evenly",
  },
  greenRect: {
    backgroundColor:"lightgreen",
    width:250,
    height:60,
  },
});
