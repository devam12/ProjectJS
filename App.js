import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, Pressable, StatusBar, Platform } from 'react-native';

const App = () => {
  const [show,setShow] = useState(true);
  return (
    <View style={styles.main}>

    { Platform.OS==='android' ? <Text style={styles.text}>{Platform.OS}</Text> : 
     <Text style={styles.text}>{Platform.OS}</Text> }

     <Text>ALL Details : {JSON.stringify(Platform)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
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
