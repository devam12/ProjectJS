import React, { useState } from 'react';
import {Text, View, SectionList} from 'react-native';

const App = () => {

  const users = [
    {
      id: 1,
      name: "Devam",
      data : ['c++', 'java']
    },
    {
      id: 2,
      name: "Jhanvi",
      data : ['c','python']
    },
    {
      id: 3,
      name: "Meet",
      data : ['react', 'express']
    },
    {
      id: 4,
      name: "Nisha",
      data : ['java', 'node']
    },

  ];

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30 , color : 'red' }}>Flat List</Text>
      <SectionList
      sections={users}
      renderSectionHeader={({section:{name}})=>(
        <Text style={{  fontSize: 30 }}>{name}</Text>
        )}
      renderItem={({item})=> <Text style={{ textAlign: 'center', fontSize: 25 }}>{item}</Text>}
      />
    </View>
  );
};

export default App;
