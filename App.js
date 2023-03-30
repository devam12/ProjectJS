import React from 'react';
import { StyleSheet, View , Text } from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <View style={styles.main}>
      <WebView source={{uri:"http://devampanchasara.github.io/"}}></WebView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex:1
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
