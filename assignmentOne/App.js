import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from './app/config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>React Native Assgn 1</Text>
        </View>
      </View>

      <View style={styles.lavenderTopContainer}>
          <View style={styles.darkGrayBox}>
          </View>
          <View style={styles.darkGrayBox}>
          </View>
          <View style={styles.darkGrayBox}>
          </View>
      </View>

      <View style={styles.lavenderBottomContainer}>
          <View style={styles.tealBox}>
          </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.lightGrey,
    alignItems:"center",
    justifyContent:"center",
  },
  purpleContainer:{
    backgroundColor:colors.primary,
    flex:0.25,
    width:"90%",
    marginTop:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
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
  lavenderTopContainer:{
    backgroundColor:colors.secondary,
    flex:0.82,
    width:"90%",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  darkGrayBox:{
    height:70,
    width:100,
    backgroundColor:colors.darkGrey,
    marginTop:10,
    borderRadius:10,
  },
  lavenderBottomContainer:{
    backgroundColor:colors.secondary,
    flex:0.82,
    width:"90%",
    marginBottom:30,
    flexDirection:"column-reverse",
  },
  tealBox:{
    backgroundColor:colors.teal,
    height:280,
    width:"28%",
    marginLeft:230,
    marginBottom:30,
    borderColor:colors.darkGrey,
    borderWidth:5,
  },
});
