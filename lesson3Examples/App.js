import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Image, Text, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';
import colors from './app/config/colors';

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
        style={{backgroundColor:"lightblue",borderWidth:5,height:25}} 
        underlayColor="green"
      >
        <Text>ARE YOU READY?</Text>
      </TouchableOpacity>

      <TouchableHighlight
        onPress={firstFunction}
        style={styles.warmUpButton}  
        underlayColor={colors.purple}
      >
        <Text>HELLO</Text>
      </TouchableHighlight>

      <Image
        style={styles.imageStyle}
        source={require("./app/assets/images/canyon.jpg")}
      />

      <Image
        style={styles.imageStyle}
        source={{uri:"https://fastly.picsum.photos/id/559/200/300.jpg?hmac=lNV_-XwwjsYJn2cX4Pq7EFx4GA57ekwh_ZoR1dc09H0"}}
      />

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
  warmUpButton:{                                              
    backgroundColor:colors.lightBlue,
    width:50,
    height:50,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
  },
  imageStyle:{
    width:200,
    height:150,
    margin:10,
    borderWidth:3,
    borderColor:colors.purple,
  },
});
