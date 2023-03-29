import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedradio, setSeletedradio] = useState(1)


  const skills = [
    {
      id: 1,
      name: "java"
    },
    {
      id: 2,
      name: "cpp"
    },
    {
      id: 3,
      name: "react"
    },
    {
      id: 4,
      name: "nativ"
    }
  ]
  return (
    <View style={styles.main}>

      {skills.map((item,index) => {
        return <TouchableOpacity onPress={() => { setSeletedradio(item.id) }}>
          <View style={styles.radiowarp}>
            <View style={styles.radio}>
              {
                selectedradio === item.id ? <View style={styles.selectedbtn}></View> : null
              }
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      })}



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
