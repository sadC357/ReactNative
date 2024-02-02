import { Text, View, StyleSheet, FlatList} from 'react-native';
import Constants from 'expo-constants';

import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import ListItemSeparator from './app/components/ListItemSeparator';

export default function App() {

// this is the array we will use for the example on FlatLists
  const friends = [
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

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontWeight: 'bold'}]}>My Friends</Text>
     {/* First we will design ONE row of our FlatList*/}

     {/*<View style={styles.itemRowContainer}>
      <Text style={styles.rowText}>Ishaan, 17</Text>
      <Text style={{color:colors.secondary}}>Crocheting</Text>
    </View>*/}

     {/* Then we will take this code and use it to build a ListItem component*/}
     {/* Next we will add one ListItem component to ensure the code is how we want*/}
     {/*<ListItem
      name="Ziyan"
      age="666666"
  favActivity="Playing ping pong"/>*/}
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
        />
      )}
      ItemSeparatorComponent={()=><ListItemSeparator color="red"/>}
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
    backgroundColor:colors.dark,
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