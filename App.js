import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import UserData  from "./components/UserData";

const App = () => {

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
      name: "Jhanvi",
    },
    {
      id: 7,
      name: "Aeni",
    }
  ];

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30 }}>Flat List</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => { 
        return <UserData item={item} /> 
      }}
      />
    </View>
  );
};

export default App;
