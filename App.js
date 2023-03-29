import React, { Component, useState } from 'react';
import { Text, View, FlatList, Button, TextInput } from 'react-native';
import ClassComponent from './components/ClassComponent';

class App extends Component {
  constructor(){
    super();
    this.state={
      name  : "Devam",
    }
  }

  updateName(changeName){
    this.setState(
      {
        name : changeName,
      }
    )
  }

  render() {
    return (
      <View>
        <Text>Main Class : {this.state.name}</Text>
        <TextInput placeholder='Enter name : ' onChangeText={(changeName)=>{this.updateName(changeName)}}></TextInput>
        <ClassComponent name={this.state.name}/>
      </View>
    )
  }
}

export default App;
