import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


export default UserData = (props) => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item} >{item.id}</Text>
      <Text style={styles.item} >{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    margin: 2,
    flex: 1
  },
  box : {
    flexDirection: 'row',
    borderWidth : 2,
    borderColor : 'red',
    marginBottom : 1,
  }   
})
