import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import CompanyData from './components/CompanyData'

const App =  () =>  {
  const [data,setData] = useState(10) 
  const fun = (val)=>{
    setData(20)
    console.warn("Button Called " + val);
  }
  return (
    <View>
        <CompanyData />
        <SecondCompuonent data={data} />
        <Text style={{color : "red" , fontSize: 25}}>{props.data}</Text>
        <Button title="press here" onPress={()=>{fun("Devam")}}></Button>
    </View>
  );
};

const SecondCompuonent =  (props) =>  {
  return (
    <View>
        <Text style={{color : "red" , fontSize: 25}}>Second Compuonent data : {props.data}</Text>
    </View>
  );
};

export default App;
