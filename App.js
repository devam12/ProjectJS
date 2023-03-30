import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'gray'
          }
        }}>
        <Stack.Screen name="Login" component={Login}
          options={
            {
              headerTitle: () => { return (<Button title='Left'></Button>) },
              headerRight: () => { return (<Button title='Right'></Button>) },
              title: "User Login"
            }} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
