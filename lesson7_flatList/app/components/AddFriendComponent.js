import { Text, View, StyleSheet, TextInput, TouchableHighlight, Keyboard } from 'react-native';
import React, {useState} from 'react';

import colors from '../config/colors';

export default function AddFriendComponent({startingId,handleAdd}) {
    //create a state variable to represent each of the vars for a friend
    const [id,setId]=useState(startingId);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [favActivity,setFavActivity]=useState("");

    //need a function to add the friend
    const handleAddFriend = () =>{
        /*
            need a prop to gte handleAdd function from App.js
            call that function
            update handleAdd in App.js to reflect the new usage
        */

       //create a friend object from the state vars
        const newFriend={
            id:id,
            name:name,
            age:age,
            favActivity:favActivity,
        }

        //needs to call handleAdd from App.js and send it newFriend
        handleAdd(newFriend);

        //call setId to increase if num for the next friend we make
        setId(id+1);

        //resetting the state vars to clear out textInput
        setName("");
        setAge("");
        setFavActivity("");
        Keyboard.dismiss();
    }

    return (
        <View style={styles.inputTextContainer}>
            <View style={styles.inputTextRow}>
            <Text style={styles.textLabel}>Name:</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={text=> setName(text)}
                value={name}
                />

            <Text style={styles.textLabel}>Age:</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={text=> setAge(text)}
                value={age}
                />
            </View>

            <View style={styles.inputTextRow}>
            <Text style={styles.textLabel}>Fav Activity:</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={text=> setFavActivity(text)}
                value={favActivity}
                />
            </View>

            <View style={styles.inputTextRow}>
            <TouchableHighlight
                style={styles.button}
                underlayColor={colors.verylight}
                onPress={handleAddFriend}>
                <Text style={styles.text}>Add Friend</Text>
            </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputTextContainer:{
        backgroundColor: colors.dark,
        width:"100%",
        height:200,
        justifyContent:"center",
    },
    inputTextRow:{
        flexDirection:"row",
        height:50,
        justifyContent:"center",
        margin:5,
    },
    textLabel:{
        fontSize:18,
        color:colors.secondary,
        margin:5,
    },
    textInput:{
        backgroundColor:colors.light,
        fontSize:18,
        borderWidth:2,
        borderRadius:10,
        borderColor:colors.secondary,
        width:"35%",
        height:"65%",
    },
    button:{
        backgroundColor:colors.light,
        justifyContent:"center",
        alignItems:"center",
        borderColor:colors.secondary,
        borderRadius:20,
        borderWidth:5,
        width:150,
    },
    text:{
        color: colors.primary,
        fontSize: 20,
    }
})