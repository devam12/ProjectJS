import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react';
import { Text, View, FlatList, Button, TextInput } from 'react-native';

const App = ()=>{
  const[count,setCount] = useState(0);
  const[data,setData] = useState(100);
  const[show,setShow] = useState(true);

    return (
      <View>
        <Text>Main Class count : {count}</Text>
        <Text>Main Class data : {data}</Text>
        <Button title='Click me' onPress={()=>{setShow(!show)}} />
        <TextInput placeholder='Enter name : ' onChangeText={(text)=>{setCount(text.length)}}></TextInput>
        {
          show ? <Second data={data} count={count}/> : null
        }
      </View>
    )
}

const Second = (props)=>{

  let count = props.count;
  let data = props.data;

  useEffect(()=>{
    return ()=>{console.warn("child",count);}
  },[count])

  useEffect(()=>{
    return ()=>{console.warn("child",data);}
  },[data])

    return (
      <View>
        <Text>Child Class count : {props.count}</Text>
        <Text>Child Class data : {props.data}</Text>
      </View>
    )
}

export default App;
