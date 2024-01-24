import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';

//put functions before App()
const firstFunction=()=>{
  alert("Yay, first function");
}

const myAlertFn=()=>{
  Alert.alert("Alert Title","Alert Message",[
    {text:"Yes",onPress:()=>console.log("Pressed Yes")},
    {text:"No",onPress:()=>console.log("Pressed No")},
  ]);
}

const readyAlert=()=>{
  Alert.alert("Are You Ready?","Click One",[
    {text:"Yes",onPress:()=>console.log("Pressed Yes")},
    {text:"Maybe",onPress:()=>console.log("Pressed Maybe")},
    {text:"No",onPress:()=>console.log("Pressed No")},
  ]);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Button"
        onPress={()=>console.log("Button Clicked")}
        color="#841584"
      />

      <Button
        title="Call A Function"
        onPress={firstFunction}
        color="green"
      />

      <TouchableHighlight
        onPress={firstFunction}
        style={styles.button}  
        underlayColor="lightblue"
      >
        <Text>TH Button</Text>
      </TouchableHighlight>

      <Button
        title="Alert Button"
        onPress={myAlertFn}
      />

      <TouchableOpacity
        onPress={readyAlert}
        style={{backgroundColor:"lightblue",borderWidth:5,height:50}} 
        underlayColor="green"
      >
        <Text>ARE YOU READY?</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
    backgroundColor:"pink",
    width:50,
    height:50,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
  },
});
