import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react';
import { Text, View, FlatList, Button, TextInput } from 'react-native';

const App = ()=>{
  const[count,setCount] = useState(0);
  const[data,setData] = useState(100);

  useEffect(()=>{
    console.warn("Inmain",count);
  },[count])

  useEffect(()=>{
    console.warn("Inmain",data);
  },[data])

    return (
      <View>
        <Text>Main Class count : {count}</Text>
        <Text>Main Class data : {data}</Text>
        <Button title='Click me' onPress={()=>{setData(200)}} />
        <TextInput placeholder='Enter name : ' onChangeText={(text)=>{setCount(text.length)}}></TextInput>
        <Second data={data} count={count}/>
      </View>
    )
}

const Second = (props)=>{

  useEffect(()=>{
    console.warn("Inchild",props.count);
  },[props.count])

  useEffect(()=>{
    console.warn("Inchild",props.data);
  },[props.data])

    return (
      <View>
        <Text>Child Class count : {props.count}</Text>
        <Text>Child Class data : {props.data}</Text>
   
      </View>
    )
}

export default App;
