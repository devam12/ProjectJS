import React from 'react';
import { StyleSheet, TouchableHighlight, View ,Text } from 'react-native';

const App = ()=>{
    return (
      <View style={styles.main}>
        <TouchableHighlight>
          <Text style={[styles.button,styles.success]}> Success </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button,styles.error]}> Error </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button,styles.danger]}> Danger </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button,styles.gold]}> Warning </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.primary]}> Primary </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.button}> Button </Text>
        </TouchableHighlight>
      </View>
    )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
  },
  button:{
    padding : 10,
    backgroundColor : 'gray',
    textAlign : 'center',
    margin : 10,
    borderRadius : 10,
  },
  primary:{
    backgroundColor:"lightblue"
  },
  gold:{
    backgroundColor:"gold"
  },
  danger:{
    backgroundColor : 'red'
  },
  error:{
    backgroundColor : 'orange'
  },
  success:{
    backgroundColor : 'green'
  }
})



export default App;
