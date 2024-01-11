import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ac31d',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingTop:30,
  },
  text:{
    fontSize:70,
    color:'blue',
  },
});
