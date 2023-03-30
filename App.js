import React, { useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './components/Home';
import { Login } from './components/Login';


const Tab = createBottomTabNavigator();
const App = () => {
  const refName = useRef();

  const checkRef = ()=>{
    refName.current.focus();  //='DevamGajjar React nativ senior devloper'
  }

  return (
   <View>
    <TextInput ref={refName} placeholder='Enter text'></TextInput>
    <TextInput placeholder='Enter age'></TextInput>
    <Button title='Submit' onPress={checkRef}> </Button>
   </View>
  )
}


export default App;
