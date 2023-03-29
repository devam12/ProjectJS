import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Button } from 'react-native';

const App = () => {
  const [display, setDisplay] = useState(true)


 

  return (
    <View style={styles.main}>

      <ActivityIndicator
      size={'small'} color='red' animating={display}
      ></ActivityIndicator>

    <Button title='Toggle loading' onPress={()=>{setDisplay(!display)}}></Button>


    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioText: {
    fontSize: 25,
    paddingTop: 4
  },
  radio: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    margin: 10,
  },
  selectedbtn: {
    height: 20,
    width: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 3
  },
  radiowarp: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    backgroundColor: 'gray',
    textAlign: 'center',
    margin: 10,
    borderRadius: 10,
  }
})



export default App;
