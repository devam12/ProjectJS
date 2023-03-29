import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = ()=>{
    return (
      <View style={styles.main}>
        <View style={styles.box1}>
          <View style={styles.innerbox1}></View>
          <View style={styles.innerbox2}></View>
          <View style={styles.innerbox3}></View>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'black'
  },
  box1:{
    flex:2,
    backgroundColor:"red",
    flexDirection : 'row'
  },
  box2:{
    flex:1,
    backgroundColor:"green"
  },
  box3:{
    flex:1,
    backgroundColor:"yellow"
  },
  innerbox1:{
    flex:1,
    backgroundColor : 'red'
  },
  innerbox2:{
    flex:1,
    backgroundColor : 'blue'
  },
  innerbox3:{
    flex:1,
    backgroundColor : 'darkgray'
  }
})



export default App;
