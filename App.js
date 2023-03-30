import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home } from './components/Home';
// import { Login } from './components/Login';


const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='Home' component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const Login = () => {
  return (
      <View style={styles.main}>
          <Text style={styles.modalText}>Login </Text>
      </View>
  )
}

const Home = () => {
  return (
      <View style={styles.main}>
          <Text style={styles.modalText}>Welcome </Text>
      </View>
  )
}


const styles = StyleSheet.create({
  main: {
      flex: 1
  },
  text: {
      padding: 20,
      backgroundColor: 'gray',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: 30
  },
  centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

  },
  modalView: {
      backgroundColor: 'white',
      padding: 25,
      borderRadius: 20
  },
  modalText: {
      fontSize: 25,
      marginBottom: 20
  },
  modalButton: {
      margin: 25
  }
})


export default App;
