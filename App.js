import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList
} from 'react-native';

const App = () => {
  // const [usename, setUsename] = useState("")
  // const [password, setPassword] = useState("")
  // const [email, setEmail] = useState("")
  // const [display, setDisplay] = useState(false);

  const users = [
    {
      id: 1,
      name: "Devam",
    },
    {
      id: 2,
      name: "Darshan",
    },
    {
      id: 3,
      name: "Priyanka",
    },
    {
      id: 4,
      name: "Miral",
    },
    {
      id: 5,
      name: "Akshay",
    },
    {
      id: 6,
      name: "Nisha",
    },
    {
      id: 7,
      name: "Jhanvi",
    },{
      id: 8,
      name: "Jhanvi",
    },{
      id: 9,
      name: "Jhanvi",
    },{
      id: 10,
      name: "Jhanvi",
    },{
      id: 11,
      name: "Jhanvi",
    },{
      id: 12,
      name: "Jhanvi",
    },
  ];

  return (
    <>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>Flat List</Text>
        <FlatList
          data={users}
          renderItem={({ item }) =>  <Text style={styles.item}>{item.name}</Text> }
          keyExtractor={item => item.id} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'black',
    borderColor: 'red',
    borderWidth: 2,
    margin: 5,
    padding: 2,
  }
})

export default App;
