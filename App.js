import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import CompanyData from './components/CompanyData'

const App =  () =>  {
  const [data,setData] = useState("") 
  // const fun = (val)=>{
  //   setData(20)
  //   console.warn("Button Called " + val);
  // }
  return (
    <View>
        {/* <CompanyData />
        <SecondCompuonent data={data} /> */}
        <TextInput style={{borderColor:'red' }} onChangeText={(value)=>{setData(value)}} value={data} placeholder="Enter Text"></TextInput>
        <Text style={{color : "red" , fontSize: 25}}>{data}</Text>
        <Button title="press here" onPress={()=>{setData('')}}></Button>
    </View>
  );
};

// const SecondCompuonent =  (props) =>  {
//   return (
//     <View>
//         <Text style={{color : "red" , fontSize: 25}}>Second Compuonent data : {props.data}</Text>
//     </View>
//   );
// };

export default App;
