import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './app/config/colors';
import defaultStyles from './app/config/defaultStyles'

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.purpleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>React Native Assgn 1</Text>
        </View>
      </View>

      <View style={styles.lavenderContainer}>
        <View styles={styles.squareContainer}>
          <View style={styles.darkGrayBox}>
          </View>

          <View style={styles.darkGrayBox}>
          </View>

          <View style={styles.darkGrayBox}>
          </View>
        </View>

        <View style={styles.rectContainer}>
          <View style={styles.tealBox}>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-between",
  },
  purpleContainer:{
    backgroundColor:colors.primary,
    flex:0.15,
    width:"80%",
    marginTop:50,
    alignItems:"center",
    justifyContent:"center",
  },
  titleContainer:{
    backgroundColor:colors.secondary,
    margin:10,
  },
  title:{
    fontSize:28,
    padding:10,
    fontWeight:"bold",
  },
  lavenderContainer:{
    backgroundColor:colors.secondary,
    flex:0.82,
    width:"80%",
    flexDirection:"column",
    marginBottom:30,
  },
  squareContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  darkGrayBox:{
    backgroundColor:colors.darkGrey,
    height:50,
    width:50,
  },
  rectContainer:{
    flexDirection:"column-reverse"
  },
  tealBox:{
    backgroundColor:colors.teal,
    height:400,
    width:50,
    marginTop:50,
    marginBottom:50,
  },
});
