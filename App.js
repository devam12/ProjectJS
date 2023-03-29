import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedradio,setSeletedradio] = useState(1)
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>{setSeletedradio(1)}}>
        <View style={styles.radiowarp}>
          <View style={styles.radio}>
            {
              selectedradio===1 ? <View style={styles.selectedbtn}></View> : null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{setSeletedradio(2)}}>
        <View style={styles.radiowarp}>
          <View style={styles.radio}>
          {
              selectedradio===2 ? <View style={styles.selectedbtn}></View> : null
            }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
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
