import React, { useRef } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import Product from './components/Product';



const App = () => {

  const products=[
    {
      name : "i-phone1",
      color : 'black',
      price : 129000,
      image : 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max'
    },
    {
      name : "i-phone2",
      color : 'black',
      price : 129000,
      image : 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max'
    },
    {
      name : "i-phone3",
      color : 'black',
      price : 129000,
      image : 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max'
    },{
      name : "i-phone4",
      color : 'black',
      price : 129000,
      image : 'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max'
    }
  ]
  return (
    <View>
      <Header />
      <ScrollView>
      {
        products.map((item,index)=>{
          return <Product item={item} key={index} />
        })
      }
      </ScrollView>
    </View>
  )
}


export default App;
