import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Modal } from 'react-native';

const App = () => {
  const [show,setShow] = useState(false);
  return (
    <View style={styles.main}>
      {show ? <Modal transparent={true} visible={show} animationType='fade'>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello code step by step</Text>
            <Button style={styles.modalButton} title='Close' onPress={()=>{setShow(false)}}></Button>
          </View>
        </View>
      </Modal> : null}
      <View style={styles.button}>
        <Button title='Open modal' onPress={()=>{setShow(true)}}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    flex:1,
    justifyContent:'flex-end',
    backgroundColor: 'gray',
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems : 'center',
    
  },
  modalView:{
    backgroundColor:'white',
    padding:25,
    borderRadius:20
  },
  modalText:{
    fontSize:25,
    marginBottom:20
  },
  modalButton:{
    margin:25
  }
})



export default App;
