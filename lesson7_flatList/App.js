import { Text, View, StyleSheet, FlatList} from 'react-native';
import Constants from 'expo-constants';
import React, {useState} from 'react';

import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import ListItemSeparator from './app/components/ListItemSeparator';
import ListItemDeleteAction from './app/components/ListItemDeleteAction';

export default function App() {

// this is the array we will use for the example on FlatLists
//this is the starting list of the friends I have
  const initialFriends = [
    {
      id: 1,
      name: "Angela",
      age: "18",
      favActivity: "Dancing",
    },
    {
      id: 2,
      name: "Draven",
      age: "16",
      favActivity: "Making music",
    },
    {
      id: 3,
      name: "Ben",
      age: "17",
      favActivity: "Sleeping",
    },
   // add more if you like, continue the same format and use unique id numbers
  ]
  //created a state var called friends that is updated
  //with the function setFriends and begins with the
  //values in initialFriends
  const [friends, setFriends] = useState(initialFriends);

  /*
    This function takes in one parameter called friend that
    represents the friends we want to delete from the array
  */
  const handleDelete = friend => {
    //use the filter method for the friends array
    //returns a filtered subarray of all the objects that meet the
    //filter criteria

    //only keep the friends (f) thas had id not equal to the friend
    //I am trying to delete
    const newFriends= friends.filter(f => f.id !== friend.id);
    setFriends(newFriends);   // updates state, rerender component
  }
  

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>My Friends</Text>
     {/* First we will design ONE row of our FlatList*/}

     {/*
      <View style={styles.itemRowContainer}>
        <Text style={styles.rowText}>Ishaan, 17</Text>
        <Text style={{color:colors.secondary}}>Crocheting</Text>
      </View>
     */}

     {/* Then we will take this code and use it to build a ListItem component*/}
     {/* Next we will add one ListItem component to ensure the code is how we want*/}
     
     {/*
      <ListItem
        name="Ziyan"
        age="666666"
        favActivity="Playing ping pong"/>
     */}

     {/* Replace that code with a FlatList that has the array of friends as its data*/}
     <FlatList
      data={friends}
      keyExtractor={friend=>friend.id.toString()}
      renderItem={({item})=>(
        <ListItem
          name={item.name}  
          age={item.age}
          favActivity={item.favActivity}
          onPress={()=>console.log(item)}
          renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
        />
      )}
      ItemSeparatorComponent={()=><ListItemSeparator color={colors.dark}/>}
     />
     {/* Create a ListItemSeparator component that can go between ListItems */}

     {/* Begin to interact with our FlatList (more to come!) */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.verylight,
    padding: 8,
  },
  itemRowContainer:{
    backgroundColor:colors.light,
    padding:5,
  },
  rowText:{
    fontSize:16,
    color:colors.medium,
    fontWeight:"bold",
  },
  text: {
    color: colors.primary,
    fontSize: 20,
  }
});