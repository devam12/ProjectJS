import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal, Pressable } from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <Pressable>
        <Text style={styles.button} onPress={() => console.warn("On press")} onLongPress={() => console.warn("On Long press")} onPressIn={() => console.warn("On press In")} onPressOut={() => console.warn("On press Out")}>Click Button</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
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
