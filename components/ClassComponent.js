import React, { Component, useState } from 'react';
import { Text, View, FlatList, Button } from 'react-native';

class ClassComponent extends Component {
  render() {
    return (
      <View><Text>Student name : {this.props.name}</Text></View>
    )
  }
}

export default ClassComponent;
