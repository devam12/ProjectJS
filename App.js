import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

const App = () => {
  const [usename, setUsename] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [display, setDisplay] = useState(false);

  const displayData = () => {
    return (
      <>

      </>
    )
  }
  return (
    <>
      <View>
        <TextInput style={styles.text} onChangeText={(value) => { setUsename(value) }} value={usename} placeholder="Enter username"></TextInput>
        <TextInput style={styles.text} onChangeText={(value) => { setPassword(value) }} value={password} secureTextEntry={true} placeholder="Enter password"></TextInput>
        <TextInput style={styles.text} onChangeText={(value) => { setEmail(value) }} value={email} placeholder="Enter email"></TextInput>
        <Button title="Clear Text" onPress={() => { setUsename(''); setPassword(''); setEmail(''); setDisplay(false); }}></Button>
        <Button title="Display Data" onPress={() => { setDisplay(true) }}></Button>
      </View>
      {
        display ?
          <View>
            <Text style={{ color: "red", fontSize: 20 }}>{usename}</Text>
            <Text style={{ color: "red", fontSize: 20 }}>{password}</Text>
            <Text style={{ color: "red", fontSize: 20 }}>{email}</Text> 
          </View> : null
      }
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    borderColor: 'red',
    borderWidth: 2,
    margin: 5,
    padding: 2,
  }
})

export default App;
